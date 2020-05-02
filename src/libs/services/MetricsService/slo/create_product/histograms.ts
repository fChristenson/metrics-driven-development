import { makeHistogram } from "../../makeMetricStore";

export const createProductTime = makeHistogram(
  "create_product_seconds",
  [],
  [0, 5, 10, 20, 40, 80]
);
