import express from "express";

class Router {
  public ROUTER = express.Router();
  constructor() {
    this.setEndpoints();
  }
  private setEndpoints(): void {
    this.ROUTER.get("/", (_, res: express.Response) =>
      res.status(200).send("youa.dev\nService Starter Template")
    );
  }
}

const { ROUTER } = new Router();

export { ROUTER };
