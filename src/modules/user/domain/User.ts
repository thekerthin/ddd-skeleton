import { UserEmail } from "./UserEmail";
import { UserName } from "./UserName";
import { UserAddress } from "./UserAddress";
import { UserId } from "./UserId";
import { UserCreated } from "./events/userCreated";
import { UserDeleted } from "./events/userDeleted";
import { UniqueEntityID } from "../../../shared/domain/UniqueEntityID";
import { Guard } from "../../../shared/core/Guard";
import { AggregateRoot } from "../../../shared/domain/AggregateRoot";

interface UserProps {
  email: UserEmail;
  username: UserName;
  address: UserAddress;
  isEmailVerified?: boolean;
  isAdminUser?: boolean;
  isDeleted?: boolean;
  lastLogin?: Date;
  isLogin?: boolean;
}

export class User extends AggregateRoot<UserProps> {

  get userId(): UserId {
    return UserId.create(this._id);
  }

  get email(): UserEmail {
    return this.props.email;
  }

  get username(): UserName {
    return this.props.username;
  }

  get address(): UserAddress {
    return this.props.address;
  }

  get isDeleted(): boolean {
    return this.props.isDeleted;
  }

  get isEmailVerified(): boolean {
    return this.props.isEmailVerified;
  }

  get isAdminUser(): boolean {
    return this.props.isAdminUser;
  }

  get lastLogin(): Date {
    return this.props.lastLogin;
  }

  public isLoggedIn(): boolean {
    return this.props.isLogin;
  }

  public delete(): void {
    if (!this.props.isDeleted) {
      this.addDomainEvent(new UserDeleted(this));
      this.props.isDeleted = true;
    }
  }

  private constructor(props: UserProps, id?: UniqueEntityID) {
    super(props, id)
  }

  public static create(props: UserProps, id?: UniqueEntityID): User {
    const guardResult = Guard.againstNullOrUndefinedBulk([
      { argument: props.username, argumentName: 'username' },
      { argument: props.email, argumentName: 'email' }
    ]);

    if (!guardResult.succeeded) {
      // throw an exception guardResult.message
    }

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
