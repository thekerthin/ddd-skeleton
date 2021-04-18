import { ValueObject, ValueObjectProps } from "shared/domain/ValueObject";

type ValueObjectClass = { new(props: ValueObjectProps): ValueObject<ValueObjectProps>; };

type Props = { [index: string]: any };

export function Validate(valueObject: ValueObjectClass, props: Props) {

  return function (target: any, propertyKey: string) {
    const prototype = target.constructor;
    const properties = Reflect.getOwnMetadata('__properties__', prototype) || {};

    if (!properties[propertyKey]) {
      properties[propertyKey] = {
        valueObject, props
      }
    }

    Reflect.defineMetadata('__properties__', properties, prototype);
  };

}
