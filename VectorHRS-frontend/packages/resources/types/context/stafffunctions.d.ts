import { operations, definitions } from "@vhrs/models";
import { FC } from "react";
import { IcontextProvider } from "../types";
interface IAction {
    verb: string;
    results: number | definitions["StaffFunctions"] | definitions["StaffFunctions"][];
}
export interface Istafffunctions {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    stafffunctionsData?: definitions["StaffFunctions"][];
    stafffunctionsListFuncProp: (data: operations["stafffunctions_list"]["parameters"]) => Promise<void>;
    stafffunctionsCreateFuncProp: (data: definitions["StaffFunctions"] | definitions["StaffFunctions"][]) => Promise<void>;
    stafffunctionsReadFuncProp: (id: number) => Promise<void>;
    stafffunctionsUpdateFuncProp: (id: number, data: definitions["StaffFunctions"] | definitions["StaffFunctions"][]) => Promise<void>;
    stafffunctionsPartialFuncProp: (id: number, data: definitions["StaffFunctions"] | definitions["StaffFunctions"][]) => Promise<void>;
    stafffunctionsDeleteFuncProp: (id: number) => Promise<void>;
}
export declare const StafffunctionsContext: import("react").Context<Istafffunctions>;
export declare const StafffunctionsProvider: FC<IcontextProvider>;
export {};
