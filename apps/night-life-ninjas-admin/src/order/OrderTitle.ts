import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "orderUser";

export const OrderTitle = (record: TOrder): string => {
  return record.orderUser?.toString() || String(record.id);
};
