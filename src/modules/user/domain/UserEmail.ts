import { ValueObjectProp } from 'shared/domain/decorators/ValueObjectProp';
import { ValueObject } from '../../../shared/domain/ValueObject'

export abstract class Props {
  @ValueObjectProp()
  value: string;
}

export class UserEmail extends ValueObject<Props> {

  get value(): string {
    return this.props.value;
  }

  private constructor(props: Props) {
    super(props);
  }

  private static isValidEmail(email: string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  private static format(email: string): string {
    return email.trim().toLowerCase();
  }

  public static create(props: Props): UserEmail {
    // if (!this.isValidEmail(email)) {
    //   // throw an exception
    // }

    // return new UserEmail({ value: this.format(props.value) });
    return new UserEmail(props);
  }

}
