import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  createdAt?: SortOrder;
<<<<<<< HEAD
  id?: SortOrder;
  listingCreatedBy?: SortOrder;
  locationData?: SortOrder;
  locationType?: SortOrder;
  mapData?: SortOrder;
  placeAmeneties?: SortOrder;
  placeSpace?: SortOrder;
  placeType?: SortOrder;
=======
  description?: SortOrder;
  id?: SortOrder;
  listingCreatedById?: SortOrder;
  locationData?: SortOrder;
  locationType?: SortOrder;
  mapData?: SortOrder;
  photos?: SortOrder;
  placeAmeneites?: SortOrder;
  placeSpace?: SortOrder;
  placetype?: SortOrder;
  price?: SortOrder;
  title?: SortOrder;
>>>>>>> main
  updatedAt?: SortOrder;
};
