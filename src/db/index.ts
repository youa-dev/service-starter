import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { db } from "../config";
import { IConnectionArguments } from "../interfaces";

async function connect(
  args: IConnectionArguments = { uris: db.connection, options: db.config }
) {
  try {
    if (this.env === "test") args.uris = await new MongoMemoryServer().getUri();
    await mongoose.connect(args.uris, args.options ? args.options : null);
    console.log("Connected to the database!");
  } catch (error) {
    this.stop(error);
  }
}

export { connect };
