import { Promotion as TPromotion } from "../api/promotion/Promotion";

export const PROMOTION_TITLE_FIELD = "code";

export const PromotionTitle = (record: TPromotion): string => {
  return record.code?.toString() || String(record.id);
};
