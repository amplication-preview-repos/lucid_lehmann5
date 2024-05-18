import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  age?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  gender?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  nickname?: SortOrder;
  notificationSettings?: SortOrder;
  password?: SortOrder;
  paymentPreferences?: SortOrder;
  photo?: SortOrder;
  updatedAt?: SortOrder;
};
