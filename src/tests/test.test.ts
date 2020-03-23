import server from "../Server";
import { expect } from "chai";

let error = false;

before(done => {
  server.start();
  done();
});

afterEach(function() {
  if (this.currentTest.state === "failed") error = true;
});

after(() => server.stop(error));

describe("Example test", () => {
  it("should return 2", () => {
    expect(1 + 1).to.eq(2);
  });
});
