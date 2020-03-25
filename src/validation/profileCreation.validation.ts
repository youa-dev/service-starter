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
  const keys = Object.keys(body).filter(key => {
    if (!avoidValidating.includes(key)) return key;
  });
  keys.forEach(key => {
    const url: string = body[key];
    /**
     * If the user provides an empty string,
     * just break out of the loop.
     * Otherwise, validate the input.
     */
    if (
      !isEmpty(url) &&
      !(
        urlRegex.test(url) &&
        url.includes(`${url}.${url === "dev" ? "to" : "com"}`)
      )
    )
      errors[`${url}Invalid`] = profileErrors[`${url.toUpperCase()}_INVALID`];
  });
  return Object.keys(errors).length > 0 ? errors : false;
};
