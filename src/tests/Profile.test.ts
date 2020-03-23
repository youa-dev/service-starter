import {
  editedAccount,
  testProfile,
  editedProfile,
  testingKeys
} from "./testingUtils";
import { expect } from "chai";
import apiTester from "../utils/apiTester";

// Placeholder variables
let token;
let handle;

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
      handle = res.data.handle;
    }));
  describe("Get profile using handle", () =>
    it("should return the profile object", async () => {
      const res = await apiTester("get", `/api/profile/${handle}`, null, token);
      expect(res.data).to.include.all.keys(...testingKeys.profile);
    }));
  describe("Edit profile", () =>
    it("should return the edited profile object", async () => {
      const res = await apiTester(
        "put",
        "/api/profile/edit",
        editedProfile,
        token
      );
      expect(res.data).to.include.all.keys(...testingKeys.profile);
    }));
  describe("Follow/Unfollow profile", () =>
    it("should return the profile that is being followed/unfollowed", async () => {}));
  describe("Delete profile", () =>
    it("should return an object with the deleted and timestamp props", async () => {
      const res = await apiTester(
        "patch",
        `/api/profile/follow/${handle}`,
        null,
        token
      );
      expect(res.data).to.include.all.keys("deleted", "timestamp");
    }));
});

describe("Authentication Controller Continutation: Flow Break", () =>
  describe("Delete account", () =>
    it("should return an object with the deleted and timestamp props", async () => {
      const res = await apiTester("delete", "/api/auth/delete", null, token);
      expect(res.data).to.include.all.keys("deleted", "timestamp");
    })));
