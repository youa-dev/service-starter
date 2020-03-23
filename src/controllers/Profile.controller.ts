import { Response } from "express";
import { IRequest } from "../interfaces";
import Profile from "../db/models/Profile.model";
import CustomException from "../helpers/CustomException";

const randomHandleNumber = () =>
  `${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10
  )}${Math.floor(Math.random() * 10)}`;

const generateHandle = name => `${name}-${randomHandleNumber()}`;

class ProfileController {
  public async create(req: IRequest, res: Response) {
    try {
      const profile = await Profile.findOne({ userID: req.user.id });
      if (profile)
        throw new CustomException(403, "You already have a profile.");
      const handle = generateHandle(
        `${req.user.firstName
          .toLowerCase()
          .replace(" ", "")}-${req.user.lastName
          .toLowerCase()
          .replace(" ", "")}`
      );
      const newProfile = await Profile.create({
        userID: req.user.id,
        handle,
        profilePicture: req.body.profilePicture,
        website: req.body.website,
        github: req.body.github,
        linkedin: req.body.linkedin,
        dev: req.body.dev,
        stackoverflow: req.body.stackoverflow,
        biography: req.body.biography
      });
      return res.status(200).json(newProfile);
    } catch (err) {
      return res.status(err.status || 500).json(err.message || err);
    }
  }
}

export default new ProfileController();
