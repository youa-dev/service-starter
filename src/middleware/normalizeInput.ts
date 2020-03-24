import { Request, NextFunction } from "express";
import normalize from "../helpers/normalize";

const setKeyValue = (str: string) => normalize(str);

export default (req: Request, _, next: NextFunction) => {
  Object.keys(req.body).forEach(
    key => (req.body[key] = setKeyValue(req.body[key]))
  );
  next();
};
