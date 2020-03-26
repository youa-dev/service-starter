import { IValidatorGenerator } from "../interfaces";

const validatorFunctions: IValidatorGenerator = {};

export default (type: string) => validatorFunctions[type];
