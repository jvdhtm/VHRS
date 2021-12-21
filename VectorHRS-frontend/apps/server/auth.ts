import { NextFunction, Request, Response } from "express";
import crypto from "crypto";
import { HttpException } from "./errorHandeling";
import { Api, definitions } from "@vhrs/models";

export const logout = (req: Request, res: Response) => {
  if (req.session) {
    req.session.destroy(() => {});
  }
  res.cookie("authstate", "", { maxAge: 0 });
  res.cookie("sessionid", "", { maxAge: 0 });
  const Loggout = "/login";
  res.redirect(Loggout);
};

export const createSession = (
  req: Request,
  res: Response,
  result: definitions["User"]
) => {
  crypto.randomBytes(48, function (ex, buf) {
    let sessionid = buf
      .toString("base64")
      .replace(/\//g, "_")
      .replace(/\+/g, "-");
    const user = { email: result.email, id: result.id };
    let session: any = req.session;
    if (session) session[sessionid] = user;
    res.cookie("sessionid", sessionid);
    res.redirect("/");
  });
};

export const getToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.cookies.sessionid) {
    res.cookie("authstate", "", { maxAge: 0 });
  } else {
    const token = res.app.get("api_token");
    const email = req.body.email;
    const passcode = req.body.password;
    const data = { query: { email, passcode } };
    const headers = { Authorization: `Token ${token}` };
    if (email) {
      try {
        const result = await Api.user_list(data, headers);
        if (result.data.results.length == 1)
          createSession(req, res, result.data.results[0]);
        else next(new HttpException(500, "Something has gone terribly wrong."));
      } catch (error: any) {
        if (
          error.request &&
          (error.request.status === 401 ||
            error.request.status === 403 ||
            error.request.status === 404)
        ) {
          res.status(error.request.status);
          res.send(error);
        } else {
          next(new HttpException(500, "Something has gone terribly wrong."));
        }
      }
    } else {
      res.status(403);
      res.send({"details":"Email is empty"});
    }
  }
};
