import { expect } from "chai";
import apiTester from "../utils/apiTester";

// Token placeholder
let token;

const testingAccount = {
  first_name: "Denis",
  last_name: "Onder",
  email: "test_user@example.com",
  password: "test12345",
  confirm_password: "test12345"
};

const testProfile = {
  website: "https://denisonder.xyz/",
  github: "https://github.com/denis-onder/",
  linkedin: "https://linkedin.com/denis-onder",
  dev: "https://dev.to/denisonder",
  stackoverflow: "https://stackoverflow.com/users/11813625/denis-onder",
  biography: "eternal coding noob"
};

const testingKeys = {
  profile: [
    "_id",
    "website",
    "github",
    "linkedin",
    "dev",
    "stackoverflow",
    "biography",
    "followers",
    "handle",
    "createdAt",
    "__v"
  ]
};

// Create a test-case user, then log the user in
before(async done => {
  await apiTester("post", "/api/auth/register", testingAccount);
  const { data } = await apiTester("post", "/api/auth/login", testingAccount);
  token = data.token;
  done();
});

// Delete the test user once done with testing
after(async () => await apiTester("delete", "/api/auth/delete", null, token));

describe("Profile controller", () => {
  describe("Create profile", () => {
    it("should return the profile object", async () => {
      const res = await apiTester(
        "post",
        "/api/profile/create",
        testProfile,
        token
      );
      expect(res.data).to.include.all.keys(...testingKeys.profile);
    });
  });
  // describe("Get profile using handle", () => {
  //   it("should return the profile object", async () => {});
  // });
  // describe("Edit profile", () => {
  //   it("should return the edited profile object", async () => {});
  // });
  // describe("Follow/Unfollow profile", () => {
  //   it("should return the profile that is being followed/unfollowed", async () => {});
  // });
  // describe("Delete profile", () => {
  //   it("should return an object with the deleted and timestamp props", async () => {});
  // });
});
