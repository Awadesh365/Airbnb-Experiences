<<<<<<< HEAD
import { InputJsonValue } from "../../types";
=======
import { ListingCreateNestedManyWithoutUsersInput } from "./ListingCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TripCreateNestedManyWithoutUsersInput } from "./TripCreateNestedManyWithoutUsersInput";
import { WishlistCreateNestedManyWithoutUsersInput } from "./WishlistCreateNestedManyWithoutUsersInput";
>>>>>>> main

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
<<<<<<< HEAD
  password: string;
  roles: InputJsonValue;
  username: string;
=======
  listings?: ListingCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  trips?: TripCreateNestedManyWithoutUsersInput;
  username: string;
  wishlists?: WishlistCreateNestedManyWithoutUsersInput;
>>>>>>> main
};
