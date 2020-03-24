const randomHandleNumber = () =>
  `${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10
  )}${Math.floor(Math.random() * 10)}`;

const removeSpacesAndLower = (str: string) =>
  str
    .split(" ")
    .join("")
    .toLowerCase();

export default (firstName: string, lastName: string) =>
  `${removeSpacesAndLower(firstName)}-${removeSpacesAndLower(
    lastName
  )}-${randomHandleNumber()}`;
