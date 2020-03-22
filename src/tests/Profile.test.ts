import { expect } from "chai";
import apiTester from "../utils/apiTester";

// Token placeholder
let token;

const testingAccount = {
  first_name: "Test",
  last_name: "Account",
  email: "test_account@example.com",
  password: "test12345",
  confirm_password: "test12345"
};

const editedAccount = {
  first_name: "Edited",
  last_name: "Account",
  email: "edited_account@example.com",
  password: "12345test",
  confirm_password: "12345test"
};

describe("Profile controller", () => {
  describe("Create profile", () => {
    it("should return the profile object", async () => {});
  });
  describe("Get profile using handle", () => {
    it("should return the profile object", async () => {});
  });
  describe("Edit profile", () => {
    it("should return the edited profile object", async () => {});
  });
  describe("Follow/Unfollow profile", () => {
    it("should return the profile that is being followed/unfollowed", async () => {});
  });
  describe("Delete", () => {
    it("should return an object with the deleted and timestamp props", async () => {});
  });
});
