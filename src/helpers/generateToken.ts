import jwt from "jsonwebtoken";
import { server } from "../config";

export default ({ _id: id, email, firstName, lastName, createdAt }: any) => {
  const payload = {
    id,
    email,
    firstName,
    lastName,
    createdAt
  };
  const token = jwt.sign(payload, server.secret, {
    expiresIn: "1h"
  });
  return `Bearer ${token}`;
};
