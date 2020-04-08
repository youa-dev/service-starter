import { Application } from "express";
import ROUTER from "../Router";

export default (app: Application): void => {
  app.use("/api", ROUTER);
};
