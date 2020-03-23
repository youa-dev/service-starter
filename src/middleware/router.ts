import { Application } from "express";
import { AUTH_ROUTER, PROFILE_ROUTER } from "../Router";

export default (app: Application): void => {
  app.use("/api/auth", AUTH_ROUTER);
  app.use("/api/profile", PROFILE_ROUTER);
};
