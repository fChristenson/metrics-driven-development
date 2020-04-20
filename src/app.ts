import express, { Request, Response, NextFunction } from "express";
import * as path from "path";
import { userService } from "./libs/services";
import { UserAlreadyExists } from "./libs/errors/UserAlreadyExistsError";
import { InvalidLogin } from "./libs/errors/InvalidLogin";
import { StatusError } from "./libs/errors/StatusError";
import { ErrorType } from "./libs/errors/ErrorType";

export const app = express();

app.use(express.json());

const distDir = path.resolve(__dirname, "..", "dist");

app.use(express.static(distDir));

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const user = await userService.getUserByUsernameAndPassword(
    username,
    password
  );

  if (!user) throw new InvalidLogin();

  res.json(user);
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const maybeUser = await userService.getUserByUsername(username);

  if (maybeUser) throw new UserAlreadyExists(username);

  const user = await userService.createUser(username, password);

  res.json(user);
});

app.all("*", (req: express.Request, res: express.Response) => {
  res.sendFile(path.resolve(distDir, "view.html"));
});

app.use(
  (error: StatusError, req: Request, res: Response, next: NextFunction) => {
    switch (error.errorType) {
      case ErrorType.INVALID_LOGIN_ERROR:
        //TODO: measure
        break;

      default:
        console.error(error.message);
        break;
    }
    res.status(error.status || 500).json({ error: error.message });
  }
);
