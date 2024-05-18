import { SortOrder } from "../../util/SortOrder";

export type PromotionOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  discountPercentage?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  updatedAt?: SortOrder;
  validUntil?: SortOrder;
};
