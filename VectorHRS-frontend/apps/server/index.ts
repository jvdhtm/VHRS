import express from "express";
import * as dotenv from "dotenv";
import * as path from "path";
import * as bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import { getToken, logout } from "./auth";
import proxy from "express-http-proxy";
import {errorMiddleware} from "./errorHandeling";
import url from "url";

dotenv.config({ path: path.resolve(__dirname, "./.env") });

const app: express.Express = express();
const router: express.Router = express.Router();

app.get("/api/health-check", (req, res) => {
  res.json({ status: "ok" });
});

app.use(cookieParser("v9PCX6ApqZsf6f7"));

app.use(session({
  secret: 'WH<eN74<3Vz=#tF[',
  resave: true,
  saveUninitialized: true
}));

app.set("port", process.env.PORT || 9000);
app.set(
  "client_app_path",
  path.resolve(
    __dirname,
    process.env.CLIENT_APP_PATH ? process.env.CLIENT_APP_PATH : ""
  )
);

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

router.post("/checklogin", getToken);
router.use("/loginout", logout);
router.use("/api/*", apiProxy);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(app.get("client_app_path")));
app.use(errorMiddleware);

app.get("*", (req, res) => {
  res.sendFile(app.get("client_index_path"));
});

app.listen(app.get("port"), function () {
  console.log(`Express server start at port ${app.get("port")}`);
  console.log(`Static application path ${app.get("client_app_path")}`);
});
