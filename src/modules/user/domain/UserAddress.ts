import { ValueObjectProp } from "shared/domain/decorators/ValueObjectProp";
import { ValueObject } from "../../../shared/domain/ValueObject";

export abstract class Props {
  @ValueObjectProp()
  street: string;

  @ValueObjectProp()
  city: string;

  @ValueObjectProp()
  country: string;
}

export class UserAddress extends ValueObject<Props> {

  get value(): string {
    return `${this.props.street}, ${this.props.city}, ${this.props.country}`;
  }

  private constructor(props: Props) {
    super(props);
  }

  public static create(props: Props): UserAddress {
    return new UserAddress(props);
  }

}
