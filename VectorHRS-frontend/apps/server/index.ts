import express from "express";
import * as dotenv from "dotenv";
import * as path from "path";
import * as bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import proxy from "express-http-proxy";
import { errorMiddleware } from "./errorHandeling";
import url from "url";
import { initPassport, isLoggedIn } from "./passport";

dotenv.config({ path: path.resolve(__dirname, "./.env") });

const app: express.Express = express();
const router: express.Router = express.Router();

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
app.set(
  "api_token",
  process.env.API_TOKEN ? process.env.API_TOKEN : ""
);

app.set(
  "api_url",
  path.resolve(__dirname, process.env.API_URL ? process.env.API_URL : "")
);

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

const apiProxy = proxy(app.get("api_url"), {
  proxyReqOptDecorator: function (proxyReqOpts) {
    const token = app.get("api_token");
    proxyReqOpts.headers = { Authorization: `Token ${token}` };
    return proxyReqOpts;
  },
  proxyReqPathResolver: (req) => {
    const path = url.parse(req.baseUrl).path;
    return path ? path : "";
  },
});

app.use("/api/*", apiProxy);
app.get("*", (req: any, res: any, next) => {
  res.sendFile(app.get("client_index_path"));
});


app.listen(app.get("port"), function () {
  console.log(`Express server start at port ${app.get("port")}`);
  console.log(`Static application path ${app.get("client_app_path")}`);
});
