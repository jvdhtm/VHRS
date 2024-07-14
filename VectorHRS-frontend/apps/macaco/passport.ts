import passport from "passport";
import passportLocal from "passport-local";
import { dataLayerObj, resources, makeUrlForItems, RequestType, type definitions } from "@vhrs/resources";


/**
 * Sign in using Email and Password.
 */
export const initPassport = (app: any) => {
  const LocalStrategy = passportLocal.Strategy;

  // Passport local strategy for local-login, local refers to this app
  passport.use(
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password'
      },
      async (email, password, done) => {
        try {
          const token = app.get("api_token");
          const data = { query: { email, password } };
          const headers = { Authorization: `Token ${token}` };

          const request: RequestType = {
            endpoint: makeUrlForItems(resources.LoginResource),
            name: "Auth",
            method: "post",
            headers,
            data
          };

          const result = await dataLayerObj.requestApi(request);
          const user: definitions['User'] = result.data.result;

          if (user && user.email === email && user.password === password) {
            return done(null, user);
          } else {
            return done(null, false, { message: "Invalid email or password." });
          }
        } catch (err) {
          return done(err);
        }
      }
    )
  );

  passport.serializeUser((user: any, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id: number, done) => {
    try {
      const token = app.get("api_token");
      const headers = { Authorization: `Token ${token}` };
      const request: RequestType = {
        endpoint: `${resources.UserResource.baseUrl}/${id}`,
        name: "Auth",
        method: "get",
        headers
      };

      const result = await dataLayerObj.requestApi(request);
      const user: definitions['User'] = result.data;

      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  app.use(passport.initialize());
  app.use(passport.session());

  return passport;
};
