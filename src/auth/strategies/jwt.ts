import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import { server } from "../../config";

const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: server.secret
};

export default new Strategy(opts, async ({ id }, done) => {
  try {
    /**
     * Depending on if the template has direct access
     * to the user model or not, the method of fetching
     * the user will be different.
     * For the case of this template, the value is just set
     * to true, but make sure to implement a search for the user
     * which suits your needs.
     */
    const user = true;
    if (!user) return done(null, false);
    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
});
