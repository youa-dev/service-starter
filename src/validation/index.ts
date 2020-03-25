import { IValidatorGenerator } from "../interfaces";
import registrationValidation from "./register.validation";
import loginValidation from "./login.validation";
import profileCreationValidation from "./profileCreation.validation";

const validatorFunctions: IValidatorGenerator = {
  auth: {
    register: registrationValidation,
    login: loginValidation,
    edit: registrationValidation
  },
  profile: {
    create: profileCreationValidation,
    edit: profileCreationValidation
  }
};

export default (type: string) => validatorFunctions[type];
