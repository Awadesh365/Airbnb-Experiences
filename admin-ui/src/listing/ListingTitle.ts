import { Listing as TListing } from "../api/listing/Listing";

<<<<<<< HEAD
export const LISTING_TITLE_FIELD = "listingCreatedBy";

export const ListingTitle = (record: TListing): string => {
  return record.listingCreatedBy?.toString() || String(record.id);
=======
export const LISTING_TITLE_FIELD = "title";

export const ListingTitle = (record: TListing): string => {
  return record.title || String(record.id);
>>>>>>> main
};
