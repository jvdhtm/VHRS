import express, { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
import * as path from "path";
import * as bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import { errorMiddleware } from "./errorHandling";
import url from "url";
import { initPassport } from "./passport";
import { instance } from "@vhrs/resources"; // Adjust this import as per your project setup

dotenv.config({ path: path.resolve(__dirname, "./.env") });

const app: express.Express = express();

// Health check endpoint
app.get("/api/health-check", (req: Request, res: Response) => {
  res.json({ status: "ok" });
});

// Cookie and session middleware
app.use(cookieParser("v9PCX6ApqZsf6f7"));
app.use(
  session({
    secret: "WH<eN74<3Vz=#tF[",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 100, // Cookie expiration time in milliseconds
    },
  })
);

// Configuration settings
app.set("port", process.env.PORT || 4000);
app.set("client_app_path", path.resolve(__dirname, process.env.CLIENT_APP_PATH || ""));
app.set("login_auth", "/auth/login/");
app.set("client_index_path", path.resolve(__dirname, process.env.CLIENT_INDEX_PATH || ""));

// Function to set API token in app settings


// Set API base URL
app.set("api_url", process.env.API_URL || "");
instance.defaults.baseURL = app.get("api_url");

// Middleware to parse JSON and handle errors
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(errorMiddleware);

// Serve static files
app.get("/static/*", express.static(app.get("client_app_path")));

// Initialize Passport authentication middleware
const passport = initPassport(app);

// Handle login POST request using Passport
app.post(app.get("login_auth"), passport.authenticate("local"), (req, res) => {
  // This function will only be called if authentication succeeds
  res.send(req.user);
});

// Proxy API requests to the backend
const apiProxy = async (req: any, res: Response, next: NextFunction) => {
  const path = url.parse(req.baseUrl).path?.replace("/api", "");
  const data = req.body;
  const token = req.session.user.token; // Retrieve token from session
  const headers = { Authorization: `Token ${token}` };
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

// API endpoint for proxying requests
app.use("/api/*", apiProxy);

// Serve client application index.html
app.get("*", (_req: Request, res: Response) => {
  res.sendFile(app.get("client_index_path"));
});

// Start the server
app.listen(app.get("port"), function () {
  console.log(`Express server started at port ${app.get("port")}`);
  console.log(`Static application path ${app.get("client_app_path")}`);
});
