import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
<<<<<<< HEAD
=======
import { ListingListRelationFilter } from "../listing/ListingListRelationFilter";
import { TripListRelationFilter } from "../trip/TripListRelationFilter";
import { WishlistListRelationFilter } from "../wishlist/WishlistListRelationFilter";
>>>>>>> main

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
<<<<<<< HEAD
  username?: StringFilter;
=======
  listings?: ListingListRelationFilter;
  trips?: TripListRelationFilter;
  username?: StringFilter;
  wishlists?: WishlistListRelationFilter;
>>>>>>> main
};
