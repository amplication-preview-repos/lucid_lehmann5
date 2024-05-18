import { InputJsonValue } from "../../types";
import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  age?: number | null;
  email?: string | null;
  gender?: "Option1" | null;
  name?: string | null;
  nickname?: string | null;
  notificationSettings?: InputJsonValue;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  password?: string | null;
  paymentPreferences?: InputJsonValue;
  photo?: InputJsonValue;
};
