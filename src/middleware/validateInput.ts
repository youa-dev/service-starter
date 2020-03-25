import validatorGenerator from "../validation";
import { Request, Response, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  const [router, method]: string[] = req.originalUrl
    .replace("/api/", "")
    .split("/");
  const validator = validatorGenerator(router);
  const inputErrors = validator[method](req.body);
  console.log(inputErrors);
  inputErrors ? res.status(500).json(inputErrors) : next();
};
