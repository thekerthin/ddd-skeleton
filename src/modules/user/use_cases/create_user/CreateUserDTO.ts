import { Validate } from "shared/infra/http/decorators/Validate";
import { UserName, Props as UserNameProps } from "modules/user/domain/UserName";
import { UserEmail, Props as UserEmailProps } from "modules/user/domain/UserEmail";
import { UserAddress, Props as UserAddressProps } from "modules/user/domain/UserAddress";

export class CreateUserDTO {

  @Validate(UserName, UserNameProps)
  username: UserName;

  @Validate(UserEmail, UserEmailProps)
  email: UserEmail;

  @Validate(UserAddress, UserAddressProps)
  address: UserAddress;

}
