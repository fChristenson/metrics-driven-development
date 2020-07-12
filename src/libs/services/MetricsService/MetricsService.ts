import { loginAttemptCounter, loginSuccessCounter } from "./slo/login/counters";
import { createProductTime } from "./slo/create_product/histograms";
import { registrationEmailDelivered } from "./slo/registration_emails/counters";

export class MetricsService {
  loginAttempt() {
    loginAttemptCounter.inc(1);
  }

  loginSucceeded() {
    loginSuccessCounter.inc(1);
  }

  createProduct(timeInSeconds: number) {
    createProductTime.observe(timeInSeconds);
  }

  registrationEmailDelivered() {
    registrationEmailDelivered.inc(1);
  }
}
