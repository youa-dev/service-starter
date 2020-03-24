import isEmpty from "../helpers/isEmpty";
import urlRegex from "./urlRegex";
import { IProfileCreationValidationErrors } from "../interfaces";
import { authErrors } from "./errors";

const {
  CONFIRM_PASSWORD_EMPTY,
  EMAIL_EMPTY,
  EMAIL_INVALID,
  FIRST_NAME_EMPTY,
  LAST_NAME_EMPTY,
  PASSWORDS_NOT_MATCHING,
  PASSWORD_EMPTY,
  PASSWORD_NOT_LONG_ENOUGH
} = authErrors;

export default body => {
  let errors: IProfileCreationValidationErrors = {};
  return Object.keys(errors).length > 0 ? errors : false;
};
