import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type UserWhereInput = {
  age?: IntNullableFilter;
  email?: StringNullableFilter;
  gender?: "Option1";
  id?: StringFilter;
  name?: StringNullableFilter;
  nickname?: StringNullableFilter;
  notificationSettings?: JsonFilter;
  orders?: OrderListRelationFilter;
  password?: StringNullableFilter;
  paymentPreferences?: JsonFilter;
  photo?: JsonFilter;
};
