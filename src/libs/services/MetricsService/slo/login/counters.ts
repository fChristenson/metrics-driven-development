import { makeCounter } from "../../makeMetricStore";

export const loginAttemptCounter = makeCounter("login attempt", []);
export const loginSuccessCounter = makeCounter("login success", []);
