import { ValueObject } from "../../../shared/domain/ValueObject";
import { ValueObjectProp } from "../../../shared/domain/decorators/ValueObjectProp";

export abstract class Props {
  @ValueObjectProp()
  name: string;
}

export class UserName extends ValueObject<Props> {
  // public static maxLength: number = 15;
  // public static minLength: number = 2;

  toValue(): string {
    return this.props.name;
  }

  private constructor(props: Props) {
    super(props);
  }

  public static create(props: Props): UserName {
    return new UserName(props);
  }
}
