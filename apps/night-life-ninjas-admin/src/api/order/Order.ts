import { Payment } from "../payment/Payment";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  orderStatus?: "Option1" | null;
  orderTotalAmount: number | null;
  orderUser: string | null;
  payments?: Array<Payment>;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
  user?: User | null;
};
