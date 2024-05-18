export type Promotion = {
  code: string | null;
  createdAt: Date;
  description: string | null;
  discountPercentage: number | null;
  id: string;
  isActive: boolean | null;
  updatedAt: Date;
  validUntil: Date | null;
};
