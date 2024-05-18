export type PromotionUpdateInput = {
  code?: string | null;
  description?: string | null;
  discountPercentage?: number | null;
  isActive?: boolean | null;
  validUntil?: Date | null;
};
