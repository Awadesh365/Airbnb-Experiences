import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "firstName";

export const UserTitle = (record: TUser): string => {
<<<<<<< HEAD
  return record.firstName?.toString() || String(record.id);
=======
  return record.firstName || String(record.id);
>>>>>>> main
};
