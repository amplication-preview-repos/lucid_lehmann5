import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PromotionWhereInput = {
  code?: StringNullableFilter;
  description?: StringNullableFilter;
  discountPercentage?: FloatNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  validUntil?: DateTimeNullableFilter;
};
