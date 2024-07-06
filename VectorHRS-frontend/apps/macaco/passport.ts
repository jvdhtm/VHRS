import passport from "passport";
import passportLocal from "passport-local";
import { dataLayerObj, resources, makeUrlForItems, RequestType, type definitions } from "@vhrs/resources";
/**
 * Sign in using Email and Password.
 */

 export const  initPassport = (app:any) =>{

    const LocalStrategy = passportLocal.Strategy;
    
    // passport local strategy for local-login, local refers to this app
    passport.use('local', new LocalStrategy(
         async (email, password, done) => {
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
            const user = result.data.result;
            if (user === user.email && password === user.password) {
                return done(null, user);
            } else {
                return done(null, false, {"message": "User not found."});
            }
        })
    );

    passport.serializeUser((user, done) =>{
        done(null, user);
    });
    
    passport.deserializeUser(async (user: definitions['User'], done) => {
        const token = app.get("api_token");
        const headers = { Authorization: `Token ${token}` };
        const request: RequestType = {
            endpoint: `${resources.UserResource.baseUrl}/${user.id}`,
            name: "Auth",
            method: "get",
            headers
          };

        const result = await dataLayerObj.requestApi(request);
        done(null, result.data.user);
    });

    app.use(passport.initialize());
    app.use(passport.session());

    return passport;
 }