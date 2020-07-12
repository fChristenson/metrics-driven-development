import { makeCounter } from "../../makeMetricStore";

export const registrationEmailDelivered = makeCounter(
  "registration email delivered",
  []
);
