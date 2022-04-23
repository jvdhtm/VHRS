import { operations, definitions } from "@vhrs/models";
import { FC } from "react";
import { IcontextProvider } from "../types";
interface IAction {
    verb: string;
    results: number | definitions["StaffLog"] | definitions["StaffLog"][];
}
export interface Istafflog {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    stafflogData?: definitions["StaffLog"][];
    stafflogListFuncProp: (data: operations["stafflog_list"]["parameters"]) => Promise<void>;
    stafflogCreateFuncProp: (data: definitions["StaffLog"] | definitions["StaffLog"][]) => Promise<void>;
    stafflogReadFuncProp: (id: number) => Promise<void>;
    stafflogUpdateFuncProp: (id: number, data: definitions["StaffLog"] | definitions["StaffLog"][]) => Promise<void>;
    stafflogPartialFuncProp: (id: number, data: definitions["StaffLog"] | definitions["StaffLog"][]) => Promise<void>;
    stafflogDeleteFuncProp: (id: number) => Promise<void>;
}
export declare const StafflogContext: import("react").Context<Istafflog>;
export declare const StafflogProvider: FC<IcontextProvider>;
export {};
