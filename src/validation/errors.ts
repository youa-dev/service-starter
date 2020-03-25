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

export enum profileErrors {
  WEBSITE_INVALID = "Your personal website URL is not valid.",
  GITHUB_INVALID = "Your GitHub URL is not valid.",
  LINKEDIN_INVALID = "Your LinkedIn URL is not valid.",
  STACKOVERFLOW_INVALID = "Your StackOverflow URL is not valid.",
  DEV_INVALID = "Your dev.to URL is not valid."
}
