import isEmpty from "../helpers/isEmpty";
import emailRegex from "./emailRegex";
import { IRegistrationValidationError } from "../interfaces";
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

export default ({ firstName, lastName, email, password, confirmPassword }) => {
  // Define an error object
  let errors: IRegistrationValidationError = {};
  // First and last names
  if (isEmpty(firstName)) errors.firstNameEmpty = FIRST_NAME_EMPTY;
  if (isEmpty(lastName)) errors.lastNameEmpty = LAST_NAME_EMPTY;
  // Email
  if (isEmpty(email)) errors.emailEmpty = EMAIL_EMPTY;
  if (!emailRegex.test(email)) errors.emailNotValid = EMAIL_INVALID;
  // Password
  if (isEmpty(password)) errors.passwordEmpty = PASSWORD_EMPTY;
  if (isEmpty(confirmPassword))
    errors.confirmPasswordEmpty = CONFIRM_PASSWORD_EMPTY;
  if (password.length < 8) errors.passwordLength = PASSWORD_NOT_LONG_ENOUGH;
  if (password !== confirmPassword)
    errors.passwordsNotMatching = PASSWORDS_NOT_MATCHING;
  // Return errors if any, else return false.
  if (Object.keys(errors).length > 0) {
    return errors;
  } else {
    return false;
  }
};
