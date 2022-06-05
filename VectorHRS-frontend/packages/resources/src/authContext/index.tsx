import { createContext, useState, FC } from "react";
import { IcontextProvider } from "../types";
import {  definitions } from "@vhrs/models";
import axios, { AxiosResponse } from "axios";
import Cookies from 'universal-cookie';
import { v4 as uuidv4 } from 'uuid';

interface Iuser {
  username: string;
  password: string;
}
export const auth = async (
  data: Iuser,
  headers: any
): Promise<AxiosResponse<definitions["User"]>> => {
  let endpoint = "/auth";
  return await axios({
    method: "post",
    url: endpoint,
    data,
    headers,
  });
};

interface IAction {
  verb: string;
  user: definitions["User"];
}

export interface IAuth {
  loading: boolean;
  logActions: IAction[];
  isAuth: boolean;
  userData?: definitions["User"];
  AuthUser: (data: Iuser) => Promise<void>;
}

interface Istate {
  logActions: IAction[];
  user?: definitions["User"];
}

const initialState: Istate = {
  logActions: [],
};

const defaultContextState = {
  loading: false,
  logActions: [],
  isAuth: false,
  AuthUser: async (data: Iuser) => {},
};
/* prettier-ignore */
export const AuthContext = createContext<IAuth>(defaultContextState);
export const AuthProvider: FC<IcontextProvider> = ({ children, headers }) => {
  /* prettier-ignore */





  const [UserData, setUserData] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);
  const cookies = new Cookies();
  const AuthUser = async (data: Iuser): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await auth(data, headers);
      let logActions = UserData.logActions;
      logActions.push({ verb: "get", user: result.data });
      if(result.data && !cookies.get('session')){
        cookies.set("session", uuidv4());
      }

      setUserData({
        logActions: logActions,
        user: result.data,
      });

      setLoading(false);
    }
  };

  

  return (
    <AuthContext.Provider
      value={{
        logActions: UserData.logActions,
        loading: loading,
        userData: UserData.user,
        isAuth: UserData.user || cookies.get('session') ,
        AuthUser: AuthUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
