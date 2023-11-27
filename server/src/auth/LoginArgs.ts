import { ArgsType, Field } from "@nestjs/graphql";
<<<<<<< HEAD
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Credentials } from "./Credentials";
=======
import { CheckUserValues, Credentials, SignupCredentials } from "./Credentials";
>>>>>>> main

@ArgsType()
export class LoginArgs {
  @Field(() => Credentials, { nullable: false })
<<<<<<< HEAD
  @Type(() => Credentials)
  @ValidateNested()
  credentials!: Credentials;
}
=======
  credentials!: Credentials;
}

@ArgsType()
export class SignupArgs {
  @Field(() => Credentials, { nullable: false })
  credentials!: SignupCredentials;
}

@ArgsType()
export class CheckUserArgs {
  @Field(() => CheckUserValues, { nullable: false })
  CheckUserValues!: CheckUserValues;
}
>>>>>>> main
