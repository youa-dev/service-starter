import { Schema } from "mongoose";
import generator from "./model.generator";

const schema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  clientID: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  profile: {
    type: Schema.Types.ObjectId,
    ref: "profile"
  }
});

export default generator("user", schema);
