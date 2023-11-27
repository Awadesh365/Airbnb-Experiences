import {
  ValidationArguments,
  registerDecorator,
  ValidationOptions,
} from "class-validator";
import isJSONValidator from "validator/lib/isJSON";

export function IsJSONValue(validationOptions?: ValidationOptions) {
<<<<<<< HEAD
  return function (object: Record<string, any>, propertyName: string) {
=======
  return function (object: Object, propertyName: string) {
>>>>>>> main
    registerDecorator({
      name: "IsJSONValue",
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (typeof value === "string") {
            return isJSONValidator(value);
          }

          return isJSONValidator(JSON.stringify(value));
        },
        defaultMessage(args: ValidationArguments): string {
          return `${args.property} must be a valid json`;
        },
      },
    });
  };
}
