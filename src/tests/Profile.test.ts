import { editedAccount, testProfile, testingKeys } from "./testingUtils";
import { expect } from "chai";
import apiTester from "../utils/apiTester";

// Token placeholder
let token;

describe("Profile controller", () => {
  describe("Create profile", () =>
    it("should return the profile object", async () => {
      const login = await apiTester("post", "/api/auth/login", editedAccount);
      expect(login.data).to.include.all.keys("loggedIn", "token");
      token = login.data.token;
      const res = await apiTester(
        "post",
        "/api/profile/create",
        testProfile,
        token
      );
      expect(res.data).to.include.all.keys(...testingKeys.profile);
    }));
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

describe("Authentication Controller Continutation: Flow Break", () =>
  describe("Delete account", () =>
    it("should return an object with the deleted and timestamp props", async () => {
      const res = await apiTester("delete", "/api/auth/delete", null, token);
      expect(res.data).to.include.all.keys("deleted", "timestamp");
    })));