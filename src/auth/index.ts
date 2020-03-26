import { Application } from "express";
import passport from "passport";
import jwt from "./strategies/jwt";

export default (app: Application): void => {
  app.use(passport.initialize());
  passport.use(jwt);
};
