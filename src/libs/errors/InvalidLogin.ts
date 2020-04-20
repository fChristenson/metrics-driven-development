import { UnauthorizedError } from "./UnauthorizedError";
import { ErrorType } from "./ErrorType";

export class InvalidLogin extends UnauthorizedError {
  constructor() {
    super("Invalid login");
    this.errorType = ErrorType.INVALID_LOGIN_ERROR;
  }
}
