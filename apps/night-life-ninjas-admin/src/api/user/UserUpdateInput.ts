import { InputJsonValue } from "../../types";
import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  age?: number | null;
  email?: string | null;
  gender?: "Option1" | null;
  name?: string | null;
  nickname?: string | null;
  notificationSettings?: InputJsonValue;
  orders?: OrderUpdateManyWithoutUsersInput;
  password?: string | null;
  paymentPreferences?: InputJsonValue;
  photo?: InputJsonValue;
};
