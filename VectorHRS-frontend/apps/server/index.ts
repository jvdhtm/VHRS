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

app.set("port", process.env.PORT || 9000);
app.set(
  "client_app_path",
  path.resolve(
    __dirname,
    process.env.CLIENT_APP_PATH ? process.env.CLIENT_APP_PATH : ""
  )
);

app.set("login_url", "/login");

app.set(
  "client_index_path",
  path.resolve(
    __dirname,
    process.env.CLIENT_INDEX_PATH ? process.env.CLIENT_INDEX_PATH : ""
  )
);

app.set(
  "api_token",
  path.resolve(__dirname, process.env.API_TOKEN ? process.env.API_TOKEN : "")
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

router.get("/login", function (req, res) {
  res.sendFile(app.get("client_index_path"));
});
router.post(
  "/auth",
  passport.authenticate("local-login", { failureRedirect: "/login" }),
  function (req, res) {
    res.redirect("/");
  }
);

app.use(isLoggedIn);

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

router.use("/api/*", apiProxy);

app.get("*", (req: any, res: any, next) => {
  res.sendFile(app.get("client_index_path"));
});

app.listen(app.get("port"), function () {
  console.log(`Express server start at port ${app.get("port")}`);
  console.log(`Static application path ${app.get("client_app_path")}`);
});
