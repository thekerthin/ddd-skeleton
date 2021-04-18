import { Validate } from "shared/infra/http/decorators/Validate";
import { UserEmail, Props as UserEmailProps } from "modules/user/domain/UserEmail";
import { UserName, Props as UserNameProps } from "modules/user/domain/UserName";
import { UserAddress, Props as UserAddressProps } from "modules/user/domain/UserAddress";

export class CreateUserDTO {

  @Validate(UserName, UserEmailProps)
  username: UserName;

  @Validate(UserEmail, UserNameProps)
  email: UserEmail;

  @Validate(UserAddress, UserAddressProps)
  address: UserAddress;

}
