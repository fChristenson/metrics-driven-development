import { makeHistogram } from "../../makeMetricStore";

export const createProductTime = makeHistogram(
  "create_product_seconds",
  [],
  [1, 5, 10]
);
