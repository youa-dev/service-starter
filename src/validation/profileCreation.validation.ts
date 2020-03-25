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

const avoidValidating = ["profilePicture", "followers", "_id", "handle", "__v"];

export default body => {
  let errors: IProfileCreationValidationErrors = {};
  // Filter out the keys that require no validation
  const keys = Object.keys(body).filter(key => {
    if (!avoidValidating.includes(key)) return key;
  });
  // Just return the keys for the sake of testing
  return Object.keys(errors).length > 0 ? errors : false;
};
