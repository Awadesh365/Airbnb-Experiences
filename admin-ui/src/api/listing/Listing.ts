import { JsonValue } from "type-fest";

export type Listing = {
  createdAt: Date;
  id: string;
  listingCreatedBy: string | null;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  placeAmeneties: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  updatedAt: Date;
};
