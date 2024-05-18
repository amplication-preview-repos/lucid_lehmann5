import { JsonValue } from "type-fest";
import { Order } from "../order/Order";

export type User = {
  age: number | null;
  createdAt: Date;
  email: string | null;
  gender?: "Option1" | null;
  id: string;
  name: string | null;
  nickname: string | null;
  notificationSettings: JsonValue;
  orders?: Array<Order>;
  password: string | null;
  paymentPreferences: JsonValue;
  photo: JsonValue;
  updatedAt: Date;
};
