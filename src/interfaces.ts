import { Request } from "express";
import { Document } from "mongoose";

export interface ILoginValidationError {
  emailEmpty?: String;
  emailNotValid?: String;
  passwordEmpty?: String;
}

export interface IRegistrationValidationError extends ILoginValidationError {
  firstNameEmpty?: String;
  lastNameEmpty?: String;
  confirmPasswordEmpty?: String;
  passwordLength?: String;
  passwordsNotMatching?: String;
}

export interface IUser extends Document {
  id?: string;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  createdAt?: string;
}

export interface IRequest extends Request {
  user?: IUser;
}

export interface IConnectionArguments {
  uris?: string;
  options?: object;
}

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
  userID?: string;
  handle?: string;
}
