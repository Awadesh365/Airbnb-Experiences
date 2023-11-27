import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ListingWhereInput = {
  id?: StringFilter;
  listingCreatedBy?: StringNullableFilter;
  locationData?: JsonFilter;
  locationType?: StringFilter;
  mapData?: JsonFilter;
  placeAmeneties?: JsonFilter;
  placeSpace?: JsonFilter;
  placeType?: StringFilter;
};
