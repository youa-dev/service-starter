import normalize from "./normalize";

const randomHandleNumber = () =>
  `${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10
  )}${Math.floor(Math.random() * 10)}`;

export default (firstName: string, lastName: string) =>
  `${normalize(firstName).toLowerCase()}-${normalize(
    lastName
  ).toLowerCase()}-${randomHandleNumber()}`;
