import { Entity, Property } from '@mikro-orm/core';

import { UserEmail } from "./UserEmail";
import { UserName } from "./UserName";
import { UserAddress } from "./UserAddress";
import { UserId } from "./UserId";
import { UserCreated } from "./events/UserCreated";
import { UserDeleted } from "./events/UserDeleted";
import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID";
import { AggregateRoot } from "../../../shared/domain/AggregateRoot";

interface UserProps {
  email: UserEmail;
  username: UserName;
  address: UserAddress;
  isEmailVerified?: boolean;
  isAdminUser?: boolean;
  isDeleted?: boolean;
  lastLogin?: Date;
}

@Entity()
export class User extends AggregateRoot<UserProps> {

  get userId(): UserId {
    return UserId.create(this.id);
  }

  @Property({ type: 'string' })
  get email(): UserEmail {
    return this.props.email;
  }

  @Property({ type: 'string' })
  get username(): UserName {
    return this.props.username;
  }

  @Property({ type: 'string' })
  get address(): UserAddress {
    return this.props.address;
  }

  @Property({ name: 'is_deleted', type: 'boolean' })
  get isDeleted(): boolean {
    return this.props.isDeleted;
  }

  @Property({ name: 'is_email_verified', type: 'boolean' })
  get isEmailVerified(): boolean {
    return this.props.isEmailVerified;
  }

  @Property({ name: 'is_admin_user', type: 'boolean' })
  get isAdminUser(): boolean {
    return this.props.isAdminUser;
  }

  @Property({ name: 'last_login' })
  get lastLogin(): Date {
    return this.props.lastLogin;
  }

  public delete(): void {
    if (!this.props.isDeleted) {
      this.addDomainEvent(new UserDeleted(this));
      this.props.isDeleted = true;
    }
  }

  private constructor(props: UserProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: UserProps, id?: UniqueEntityID): User {
    // const guardResult = Guard.againstNullOrUndefinedBulk([
    //   { argument: props.username, argumentName: 'username' },
    //   { argument: props.email, argumentName: 'email' }
    // ]);

    // if (!guardResult.succeeded) {
    //   // throw an exception guardResult.message
    // }

    const isNewUser = !!id === false;

    const user = new User({
      ...props,
      isDeleted: props.isDeleted ? props.isDeleted : false,
      isEmailVerified: props.isEmailVerified ? props.isEmailVerified : false,
      isAdminUser: props.isAdminUser ? props.isAdminUser : false
    }, id);

    if (isNewUser) {
      user.addDomainEvent(new UserCreated(user));
    }

    return user;
  }
}
