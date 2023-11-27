<<<<<<< HEAD
import { InputJsonValue } from "../../types";
=======
import { ListingUpdateManyWithoutUsersInput } from "./ListingUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TripUpdateManyWithoutUsersInput } from "./TripUpdateManyWithoutUsersInput";
import { WishlistUpdateManyWithoutUsersInput } from "./WishlistUpdateManyWithoutUsersInput";
>>>>>>> main

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
<<<<<<< HEAD
  password?: string;
  roles?: InputJsonValue;
  username?: string;
=======
  listings?: ListingUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  trips?: TripUpdateManyWithoutUsersInput;
  username?: string;
  wishlists?: WishlistUpdateManyWithoutUsersInput;
>>>>>>> main
};
