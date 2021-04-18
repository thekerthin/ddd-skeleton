import { ValueObject } from "../../../shared/domain/ValueObject";
import { Guard } from "../../../shared/core/Guard";
import { ValueObjectProp } from "shared/domain/decorators/ValueObjectProp";

export abstract class Props {
  @ValueObjectProp()
  name: string;
}

export class UserName extends ValueObject<Props> {
  // public static maxLength: number = 15;
  // public static minLength: number = 2;

  get value(): string {
    return this.props.name;
  }

  // private constructor(props: UserNameProps) {
  //   super(props);
  // }

  public static create(props: Props): UserName {
    const usernameResult = Guard.againstNullOrUndefined(props.name, 'username');
    if (!usernameResult.succeeded) {
      // throw an exception usernameResult.message
    }

    // const minLengthResult = Guard.againstAtLeast(this.minLength, props.name);
    // if (!minLengthResult.succeeded) {
    //   // throw an exception minLengthResult.message
    // }

    // const maxLengthResult = Guard.againstAtMost(this.maxLength, props.name);
    // if (!maxLengthResult.succeeded) {
    //   // throw an exception maxLengthResult.message
    // }

    return new UserName(props);
  }
}
