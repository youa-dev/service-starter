import dotenv from "dotenv";

// Load environmental variables located in the .env file
dotenv.config();

const { server, db } = {
  server: {
    port: parseInt(process.env.PORT) || 9000,
    env: process.env.NODE_ENV || "development",
    secret: process.env.SECRET
  },
  db: {
    connection: process.env.DB_CONNECTION,
    config: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  }
};

export { server, db };
