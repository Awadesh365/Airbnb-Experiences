<<<<<<< HEAD
import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
=======
import { Module } from "@nestjs/common";
>>>>>>> main
import { UserModuleBase } from "./base/user.module.base";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserResolver } from "./user.resolver";

@Module({
<<<<<<< HEAD
  imports: [UserModuleBase, forwardRef(() => AuthModule)],
=======
  imports: [UserModuleBase],
>>>>>>> main
  controllers: [UserController],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
