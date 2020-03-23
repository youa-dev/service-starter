import { IProfile } from "./../interfaces";
import { Request, Response } from "express";
import { IRequest } from "../interfaces";
import Profile from "../db/models/Profile.model";
import CustomException from "../helpers/CustomException";

const randomHandleNumber = () =>
  `${Math.floor(Math.random() * 10)}${Math.floor(
    Math.random() * 10
  )}${Math.floor(Math.random() * 10)}`;

const generateHandle = name => `${name}-${randomHandleNumber()}`;

class ProfileController {
  public async createProfile(req: IRequest, res: Response) {
    // TODO: Input validation
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
  public async getProfile(req: Request, res: Response) {
    const profile = await Profile.findOne({
      handle: req.params.handle
    });
    if (!profile) return res.status(404).json(profile);
    return res.status(200).json(profile);
  }
  public async editProfile(req: IRequest, res: Response) {
    // TODO: Input validation
    try {
      const profile = await Profile.findOne({
        userID: req.user.id
      });
      if (!profile)
        throw new CustomException(404, "You do not have a profile.");
      const handle = generateHandle(
        `${req.user.firstName
          .toLowerCase()
          .replace(" ", "")}-${req.user.lastName
          .toLowerCase()
          .replace(" ", "")}`
      );
      profile
        .update({
          handle,
          firstName: req.user.firstName,
          lastName: req.user.lastName,
          profilePicture: req.body.profilePicture,
          website: req.body.website,
          github: req.body.github,
          linkedin: req.body.linkedin,
          dev: req.body.dev,
          stackoverflow: req.body.stackoverflow,
          biography: req.body.biography
        })
        .then(updated => res.status(200).json(updated));
    } catch (error) {
      return res
        .status(error.status || 500)
        .json(error.message || "An error has occured.");
    }
  }
  public async followProfile(req: IRequest, res: Response) {
    try {
      const profile: IProfile = await Profile.findOne({
        handle: req.params.handle
      });
      if (!profile) throw new CustomException(404, "Profile not found.");
      // Check if the user is trying to follow it's own account.
      if (profile.userID === req.user.id)
        throw new CustomException(400, "You cannot follow your own profile.");
      // Iterate over followers, then handle the request
      const { followers } = profile;
      followers.includes(req.user.id)
        ? followers.splice(followers.indexOf(req.user.id), 1)
        : followers.push(req.user.id);
      profile
        .update({ followers })
        .then(profile => res.status(200).json(profile));
    } catch (error) {
      return res
        .status(error.status || 500)
        .json(error.message || "An error has occured.");
    }
  }
  public deleteProfile(req: IRequest, res: Response) {
    Profile.findOne({
      userID: req.user.id
    }).then(profile => {
      profile.remove();
      return res.status(200).json({ deleted: true, timestamp: Date.now() });
    });
  }
}

export default new ProfileController();
