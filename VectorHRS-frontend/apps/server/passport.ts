import passport from "passport";
import passportLocal from "passport-local";
import passportFacebook from "passport-facebook";
import { Api, definitions } from "@vhrs/models";
import { NextFunction, Request, Response } from "express";
/**
 * Sign in using Email and Password.
 */


 export interface IGetUserAuthInfoRequest extends Request {
    isAuthenticated: () => boolean // or any other type
  }


export const  isLoggedIn = (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
    if(req.url == res.app.get("login_url"))
        next();
    else if (req.isAuthenticated())
        next();
    else
        res.redirect(res.app.get("login_url"));

}

 export const  initPassport = (app:any) =>{

    const LocalStrategy = passportLocal.Strategy;
    const FacebookStrategy = passportFacebook.Strategy;
    
    // passport local strategy for local-login, local refers to this app
    passport.use('local-login', new LocalStrategy(
         async (username, password, done) => {
            const token = app.get("api_token");
            const email = username;
            const passcode = username;
            const data = { query: { email, passcode } };
            const headers = { Authorization: `Token ${token}` };
            const result = await Api.user_list(data, headers);
            const users = result.data.results;
            if (username === users[0].email && password === users[0].passcode) {
                return done(null, users[0]);
            } else {
                return done(null, false, {"message": "User not found."});
            }
        })
    );

    app.use(passport.initialize());
    app.use(passport.session());

    return passport;
 }