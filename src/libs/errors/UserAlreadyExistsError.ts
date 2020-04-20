import { UnauthorizedError } from "./UnauthorizedError";

export class UserAlreadyExists extends UnauthorizedError {
  constructor(username: string) {
    super(`${username} already exists`);
  }
}
