import { InputJsonValue } from "../../types";

export type ListingUpdateInput = {
  listingCreatedBy?: string | null;
  locationData?: InputJsonValue;
  locationType?: string;
  mapData?: InputJsonValue;
  placeAmeneties?: InputJsonValue;
  placeSpace?: InputJsonValue;
  placeType?: string;
};
