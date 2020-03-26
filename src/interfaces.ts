import { Request } from "express";
import { Document, ConnectionOptions } from "mongoose";

export interface IProfile extends Document {
  profilePicture?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  dev?: string;
  stackoverflow?: string;
  biography?: string;
  followers?: string[];
  id?: string;
  handle?: string;
}

export interface IUser extends Document {
  id?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  createdAt?: string;
  profile?: IProfile;
}

export interface IRequest extends Request {
  user?: IUser;
}

export interface IConnectionArguments {
  uris?: string;
  options?: ConnectionOptions;
}

export interface IValidatorGenerator {}
