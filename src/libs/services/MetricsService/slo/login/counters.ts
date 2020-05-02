import { makeCounter } from "../../makeMetricStore";

export const loginAttemptCounter = makeCounter("login attempt", [
  "username",
  "ip",
]);
export const loginSuccessCounter = makeCounter("login success", [
  "username",
  "ip",
]);
