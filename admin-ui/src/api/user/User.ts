<<<<<<< HEAD
import { JsonValue } from "type-fest";
=======
import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { Wishlist } from "../wishlist/Wishlist";
>>>>>>> main

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
<<<<<<< HEAD
  roles: JsonValue;
  updatedAt: Date;
  username: string;
=======
  listings?: Array<Listing>;
  roles: JsonValue;
  trips?: Array<Trip>;
  updatedAt: Date;
  username: string;
  wishlists?: Array<Wishlist>;
>>>>>>> main
};
