import passport from "passport";
import passportLocal from "passport-local";
import passportFacebook from "passport-facebook";
/**
 * Sign in using Email and Password.
 */


 const LocalStrategy = passportLocal.Strategy;
 const FacebookStrategy = passportFacebook.Strategy;


 passport.use(new LocalStrategy({ usernameField: "email" }, (email: any, password: any, done: any) => {

}));
