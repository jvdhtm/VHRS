import express from "express";
import { NextFunction,  Response } from "express";
import * as dotenv from "dotenv";
import * as path from "path";
import * as bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import { errorMiddleware } from "./errorHandeling";
import url from "url";
import { IGetUserAuthInfoRequest, initPassport } from "./passport";
import { instance } from "@vhrs/models";

dotenv.config({ path: path.resolve(__dirname, "./.env") });


const app: express.Express = express();

app.get("/api/health-check", (req, res) => {
  res.json({ status: "ok" });
});

app.use(cookieParser("v9PCX6ApqZsf6f7"));

app.use(
  session({
    secret: "WH<eN74<3Vz=#tF[",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
  })
);

app.set("port", process.env.PORT || 4000);
app.set(
  "client_app_path",
  path.resolve(
    __dirname,
    process.env.CLIENT_APP_PATH ? process.env.CLIENT_APP_PATH : ""
  )
);
app.set("login_url", "/login");
app.set("login_auth", "/auth");

app.set(
  "client_index_path",
  path.resolve(
    __dirname,
    process.env.CLIENT_INDEX_PATH ? process.env.CLIENT_INDEX_PATH : ""
  )
);

function setToken(){
  app.set(
    "api_token",
    process.env.API_TOKEN ? process.env.API_TOKEN : ""
  );
}


export const  isLoggedIn = (req: IGetUserAuthInfoRequest, res: Response, next: NextFunction) => {
  if (req.isAuthenticated())
      setToken();
  else if(req.url == res.app.get("login_url") || req.url == res.app.get("login_auth") )
      setToken();
      next();
}

app.set(
  "api_url",
  process.env.API_URL ? process.env.API_URL : ""
);


instance.defaults.baseURL =  app.get("api_url")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(errorMiddleware);
app.get('/static/*', express.static(app.get("client_app_path")));

const passport = initPassport(app);
app.use(isLoggedIn);
app.post(app.get("login_auth"), function(req, res, next) {
  // generate the authenticate method and pass the req/res
  passport.authenticate("local", function(err, user, info){

    if (err) { return next(err); }
    if (!user) { return res.redirect('/'); }
    // req / res held in closure
    //TODO:if req8uest doesnt have the cookie also try again
    if (req.isAuthenticated()) {
      res.send(req.user);
    } else {
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.send(user);
      });
    }

  })(req,res,next); 

});


const apiProxy = async ( req: any,
  res: any, next:NextFunction) =>{

  const path = url.parse(req.baseUrl).path?.replace('/api','');
  const data = req.body;
  const headers = { Authorization: `Token ${app.get("api_token")}` };
  const method = req.method;
  if(path)
  {
    const result = await instance({
      method: method,
      url: path,
      params: data,
      headers,
    });

    return res.send(JSON.stringify(result.data));
  }
  return

}

app.use("/api/*", apiProxy);
app.get("*", (_req: any, res: any, next) => {
  res.sendFile(app.get("client_index_path"));
});



app.listen(app.get("port"), function () {
  console.log(`Express server start at port ${app.get("port")}`);
  console.log(`Static application path ${app.get("client_app_path")}`);
});
