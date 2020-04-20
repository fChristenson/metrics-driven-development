import { ErrorType } from "./ErrorType";

export class StatusError extends Error {
  status?: number;
  errorType?: ErrorType;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}
