import { FC } from "react";
import { IcontextProvider } from "../types";
import { definitions } from "@vhrs/models";
import { AxiosResponse } from "axios";
interface Iuser {
    username: string;
    password: string;
}
export declare const auth: (data: Iuser, headers: any) => Promise<AxiosResponse<definitions["User"]>>;
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
export declare const AuthContext: import("react").Context<IAuth>;
export declare const AuthProvider: FC<IcontextProvider>;
export {};
