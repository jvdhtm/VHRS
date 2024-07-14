import express, { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
import * as path from "path";
import * as bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import { errorMiddleware } from "./errorHandling";
import url from "url";
import { initPassport } from "./passport";
import { instance } from "@vhrs/resources";

dotenv.config({ path: path.resolve(__dirname, "./.env") });

const app: express.Express = express();

app.get("/api/health-check", (req: Request, res: Response) => {
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
app.set("login_auth", "/auth/login/");

app.set(
  "client_index_path",
  path.resolve(
    __dirname,
    process.env.CLIENT_INDEX_PATH ? process.env.CLIENT_INDEX_PATH : ""
  )
);

function setToken() {
  app.set("api_token", process.env.API_TOKEN ? process.env.API_TOKEN : "");
}

export const isLoggedIn = (
  req: Request & {
    isAuthenticated?: () => boolean;
    logout?: (options: any, callback: (err: Error) => void) => void;
  },
  res: Response,
  next: NextFunction
) => {
  if (req.isAuthenticated && req.isAuthenticated()) {
    setToken();
  } else if (req.url == res.app.get("login_auth")) {
    setToken();
  } else {
    if (req.logout) req.logout({}, (err: Error) => console.log(err));
  }
  next();
};

app.set("api_url", process.env.API_URL ? process.env.API_URL : "");

instance.defaults.baseURL = app.get("api_url");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(errorMiddleware);
app.get("/static/*", express.static(app.get("client_app_path")));

const passport = initPassport(app);
app.use(isLoggedIn);
app.post(
  app.get("login_auth"),
  function (req: Request, res: Response, next: NextFunction) {
    passport.authenticate("local", function (err: Error, user: any, info: any) {
      if (err) {
        console.log(err);
        return next(err);
      }
      if (!user) {
        return res.redirect("/");
      }
      if (req.isAuthenticated && req.isAuthenticated()) {
        res.send(req.user);
      } else {
        req.logIn(user, function (err: Error) {
          if (err) {
            return next(err);
          }
          return res.send(user);
        });
      }
    })(req, res, next);
  }
);

const apiProxy = async (req: Request, res: Response, next: NextFunction) => {
  const path = url.parse(req.baseUrl).path?.replace("/api", "");
  const data = req.body;
  const headers = { Authorization: `Token ${app.get("api_token")}` };
  const method = req.method as "GET" | "POST" | "PUT" | "DELETE"; // or any other methods you expect
  if (path) {
    try {
      const result = await instance({
        method: method,
        url: path,
        data: data,
        headers,
      });
      return res.send(JSON.stringify(result.data));
    } catch (error) {
      console.error(error);
      return res.status(500).send({ error: "Proxy error" });
    }
  }
};

app.use("/api/*", apiProxy);
app.get("*", (_req: Request, res: Response) => {
  res.sendFile(app.get("client_index_path"));
});

app.listen(app.get("port"), function () {
  console.log(`Express server start at port ${app.get("port")}`);
  console.log(`Static application path ${app.get("client_app_path")}`);
});
