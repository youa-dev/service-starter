import { IValidatorGenerator } from "../interfaces";
import registrationValidation from "./register.validation";
import loginValidation from "./login.validation";

const validatorFunctions: IValidatorGenerator = {
  auth: {
    register: registrationValidation,
    login: loginValidation,
    edit: registrationValidation
  }
};

export default (type: string) => validatorFunctions[type];
