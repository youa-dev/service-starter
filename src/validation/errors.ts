export enum authErrors {
  // First and last names
  FIRST_NAME_EMPTY = "Your first name is required.",
  LAST_NAME_EMPTY = "Your last name is required.",
  // Email
  EMAIL_EMPTY = "Your email address is required.",
  EMAIL_INVALID = "Your email address is not valid.",
  // Password
  PASSWORD_EMPTY = "A password is required.",
  CONFIRM_PASSWORD_EMPTY = "The confirmation password is required.",
  PASSWORD_NOT_LONG_ENOUGH = "Your password must be more than 8 characters long.",
  PASSWORDS_NOT_MATCHING = "Your passwords must be matching."
}
