import server from "../Server";
import { expect } from "chai";

before(done => {
  server.start();
  done();
});

after(server.stop);

describe("Example test", () => {
  it("should return 2", () => {
    expect(1 + 1).to.eq(2);
  });
});
