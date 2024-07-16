import passport from "passport";
import passportLocal from "passport-local";
import { dataLayerObj, resources, makeUrlForItems, RequestType, definitions } from "@vhrs/resources";

export const initPassport = (app: any) => {
  const LocalStrategy = passportLocal.Strategy;

  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      async (email, password, done) => {
        try {
          const token = app.get("api_token");
          const data = { email, password };
          const headers = { Authorization: `Token ${token}` };

          const request: RequestType = {
            endpoint: makeUrlForItems(resources.LoginResource),
            name: "Auth",
            method: "post",
            headers,
            data,
          };

          console.log("Request to API:", request);

          const result = await dataLayerObj.requestApi(request);

          console.log("Response from API:", result);
          const user: definitions["User"] = result.data.user;

          if (user && user.email === email && user.password === password) {
            console.log("User authenticated:", user);
            return done(null, user);
          } else {
            console.log("Authentication failed: invalid email or password.");
            return done(null, false, { message: "Invalid email or password." });
          }
        } catch (err) {
          console.error("Error during authentication:", err);
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
        headers,
      };

      const result = await dataLayerObj.requestApi(request);
      const user: definitions["User"] = result.data;

      done(null, user);
    } catch (err) {
      done(err);
    }
  });

  app.use(passport.initialize());
  app.use(passport.session());

  return passport;
};
