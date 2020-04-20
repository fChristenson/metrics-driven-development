import { User } from "./UserModel";

export class UserService {
  getUserByUsernameAndPassword(username: string, password: string) {
    return User.find({ username, password });
  }

  getUserByUsername(username: string) {
    return User.find({ username });
  }

  createUser(username: string, password: string) {
    return new User({ username, password }).save();
  }
}
