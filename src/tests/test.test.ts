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

describe("Sample Test:", () => {
  it("2 + 2 should equal 4", () => {
    expect(2 + 2).to.eq(4);
  });
});
