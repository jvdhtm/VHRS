import passport from "passport";
import passportLocal from "passport-local";
import {
  dataLayerObj,
  resources,
  makeUrlForItems,
  RequestType,
  definitions,
} from "@vhrs/resources";

export const initPassport = (app: any) => {
  const LocalStrategy = passportLocal.Strategy;

  // Initialize Passport and session middleware
  app.use(passport.initialize());
  app.use(passport.session());

  // Configure Passport Local Strategy
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true, // Explicitly pass req to the callback function
      },
      async function (req: any, email: string, password: string, done: any) {
        try {
          // Access req object directly
          const data = { email, password };
          const request: RequestType = {
            endpoint: makeUrlForItems(resources.LoginResource),
            name: "Auth",
            method: "post",
            data,
          };

          console.log("Request to API:", request);

          const result = await dataLayerObj.requestApi(request);

          console.log("Response from API:", result);
          const user: definitions["User"] = result.data.user;

          const { message, token } = result.data;

          if (message === "Login successful" && token && user) {
            // Store token in session
            req.session.user = result.data;

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

  // Serialize and deserialize user for session management
  passport.serializeUser((user: any, done: any) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (req:any, id: number, done: any) => {
    try {
      const token = req.session.user.token; // Retrieve token from session
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

  return passport;
};
