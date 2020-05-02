import { loginAttemptCounter, loginSuccessCounter } from "./slo/login/counters";

export class MetricsService {
  loginAttempt() {
    loginAttemptCounter.inc(1);
  }

  loginSucceeded() {
    loginSuccessCounter.inc(1);
  }
}
