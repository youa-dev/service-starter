import isEmpty from "../helpers/isEmpty";
import urlRegex from "./urlRegex";
import { IProfileCreationValidationErrors } from "../interfaces";
import { profileErrors } from "./errors";

const avoidValidating = [
  "profilePicture",
  "followers",
  "_id",
  "handle",
  "__v",
  "biography"
];

export default body => {
  let errors: IProfileCreationValidationErrors = {};
  // Filter out the keys that require no validation
  const keys = Object.keys(body).filter(k => !avoidValidating.includes(k));
  keys.forEach(key => {
    const val: string = body[key];
    if (!isEmpty(val) && !urlRegex.test(val))
      errors[`${key}Invalid`] = profileErrors[`${key.toUpperCase()}_INVALID`];
  });
  return Object.keys(errors).length > 0 ? errors : false;
};
