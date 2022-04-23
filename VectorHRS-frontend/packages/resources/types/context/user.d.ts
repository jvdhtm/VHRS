import { operations, definitions } from "@vhrs/models";
import { FC } from "react";
import { IcontextProvider } from "../types";
interface IAction {
    verb: string;
    results: number | definitions["User"] | definitions["User"][];
}
export interface Iuser {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    userData?: definitions["User"][];
    userListFuncProp: (data: operations["user_list"]["parameters"]) => Promise<void>;
    userCreateFuncProp: (data: definitions["User"] | definitions["User"][]) => Promise<void>;
    userReadFuncProp: (id: number) => Promise<void>;
    userUpdateFuncProp: (id: number, data: definitions["User"] | definitions["User"][]) => Promise<void>;
    userPartialFuncProp: (id: number, data: definitions["User"] | definitions["User"][]) => Promise<void>;
    userDeleteFuncProp: (id: number) => Promise<void>;
}
export declare const UserContext: import("react").Context<Iuser>;
export declare const UserProvider: FC<IcontextProvider>;
export {};
