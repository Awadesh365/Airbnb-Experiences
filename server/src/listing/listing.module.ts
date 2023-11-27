<<<<<<< HEAD
import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
=======
import { Module } from "@nestjs/common";
>>>>>>> main
import { ListingModuleBase } from "./base/listing.module.base";
import { ListingService } from "./listing.service";
import { ListingController } from "./listing.controller";
import { ListingResolver } from "./listing.resolver";

@Module({
<<<<<<< HEAD
  imports: [ListingModuleBase, forwardRef(() => AuthModule)],
=======
  imports: [ListingModuleBase],
>>>>>>> main
  controllers: [ListingController],
  providers: [ListingService, ListingResolver],
  exports: [ListingService],
})
export class ListingModule {}
