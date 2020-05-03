import express, { Request, Response, NextFunction } from "express";
import * as path from "path";
import { metricsService, productService } from "./libs/services";
import { InvalidLogin } from "./libs/errors/InvalidLogin";
import { StatusError } from "./libs/errors/StatusError";
import { ErrorType } from "./libs/errors/ErrorType";
import prombundle from "express-prom-bundle";
import { register, collectDefaultMetrics } from "prom-client";

collectDefaultMetrics({ register });

export const app = express();

app.use(prombundle({ includeMethod: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const distDir = path.resolve(__dirname, "..", "dist");

app.use(express.static(distDir));

app.post("/api/v1/products", async (req, res) => {
  const { name, price, time } = req.body;
  await productService.createProduct(name, parseFloat(price));
  const start = new Date(time).getTime();
  const end = new Date().getTime();
  const timeInSeconds = Math.floor((end - start) / 1000);
  metricsService.createProduct(timeInSeconds);
  res.redirect("/list");
});

app.get("/api/v1/products", async (req, res) => {
  const products = await productService.getAllProducts();
  res.json(products);
});

app.get("/error", async (req, res) => {
  res.status(500).end();
});

app.post("/login", async (req, res, next) => {
  const { username, password } = req.body;

  try {
    if (username !== "foo" || password !== "bar") throw new InvalidLogin();
  } catch (e) {
    return next(e);
  }

  metricsService.loginSucceeded();
  res.redirect("/create");
});

app.get("/metrics", (req, res) => {
  res.end(register.metrics());
});

app.all("*", (req: express.Request, res: express.Response) => {
  res.sendFile(path.resolve(distDir, "view.html"));
});

app.use(
  (error: StatusError, req: Request, res: Response, next: NextFunction) => {
    switch (error.errorType) {
      case ErrorType.INVALID_LOGIN_ERROR:
        const e = error as InvalidLogin;
        metricsService.loginAttempt();
        break;
    }
    console.error(error.message);
    res.status(error.status || 500).json({ error: error.message });
  }
);
