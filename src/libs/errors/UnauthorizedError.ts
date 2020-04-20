import { StatusError } from "./StatusError";

export class UnauthorizedError extends StatusError {
  constructor(message: string) {
    super(401, message);
  }
}
