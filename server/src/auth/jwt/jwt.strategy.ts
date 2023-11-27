import { Inject, Injectable } from "@nestjs/common";
<<<<<<< HEAD
import { JWT_SECRET_KEY_PROVIDER_NAME } from "../../constants";
import { JwtStrategyBase } from "./base/jwt.strategy.base";
import { UserService } from "../../user/user.service";
=======
import { JWT_SECRET_KEY } from "../../constants";
import { UserService } from "../../user/user.service";
import { JwtStrategyBase } from "./base/jwt.strategy.base";
>>>>>>> main

@Injectable()
export class JwtStrategy extends JwtStrategyBase {
  constructor(
<<<<<<< HEAD
    @Inject(JWT_SECRET_KEY_PROVIDER_NAME) secretOrKey: string,
    protected readonly userService: UserService
  ) {
    super(secretOrKey, userService);
=======
    protected readonly userService: UserService,
    @Inject(JWT_SECRET_KEY) secretOrKey: string
  ) {
    super(userService, secretOrKey);
>>>>>>> main
  }
}
