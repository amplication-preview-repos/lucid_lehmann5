import { PaymentUpdateManyWithoutOrdersInput } from "./PaymentUpdateManyWithoutOrdersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  orderStatus?: "Option1" | null;
  orderTotalAmount?: number | null;
  orderUser?: string | null;
  payments?: PaymentUpdateManyWithoutOrdersInput;
  status?: "Option1" | null;
  totalAmount?: number | null;
  user?: UserWhereUniqueInput | null;
};
