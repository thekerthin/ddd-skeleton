import { Entity, Property } from "@mikro-orm/core";

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

  @Property({ type: "string" })
  email: UserEmail;

  @Property({ type: "string" })
  username: UserName;

  @Property({ type: "string" })
  address: UserAddress;

  @Property({ name: "is_deleted", type: "boolean" })
  isDeleted: boolean;

  @Property({ name: "is_email_verified", type: "boolean" })
  isEmailVerified: boolean;

  @Property({ name: "is_admin_user", type: "boolean" })
  isAdminUser: boolean;

  @Property({ name: "last_login" })
  lastLogin: Date;

  private constructor(props: UserProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(props: UserProps, id?: UniqueEntityID): User {
    const isNewUser = !!id === false;

    const user = new User({ ...props }, id);

    if (isNewUser) {
      user.addDomainEvent(new UserCreated(user));
    }

    return user;
  }
}
