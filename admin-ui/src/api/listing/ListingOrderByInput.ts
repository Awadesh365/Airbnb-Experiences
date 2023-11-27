import { SortOrder } from "../../util/SortOrder";

export type ListingOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  listingCreatedBy?: SortOrder;
  locationData?: SortOrder;
  locationType?: SortOrder;
  mapData?: SortOrder;
  placeAmeneties?: SortOrder;
  placeSpace?: SortOrder;
  placeType?: SortOrder;
  updatedAt?: SortOrder;
};
