import { operations, definitions } from "@vhrs/models";
import { FC } from "react";
import { IcontextProvider } from "../types";
interface IAction {
    verb: string;
    results: number | definitions["StaffStage"] | definitions["StaffStage"][];
}
export interface Istaffstage {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    staffstageData?: definitions["StaffStage"][];
    staffstageListFuncProp: (data: operations["staffstage_list"]["parameters"]) => Promise<void>;
    staffstageCreateFuncProp: (data: definitions["StaffStage"] | definitions["StaffStage"][]) => Promise<void>;
    staffstageReadFuncProp: (id: number) => Promise<void>;
    staffstageUpdateFuncProp: (id: number, data: definitions["StaffStage"] | definitions["StaffStage"][]) => Promise<void>;
    staffstagePartialFuncProp: (id: number, data: definitions["StaffStage"] | definitions["StaffStage"][]) => Promise<void>;
    staffstageDeleteFuncProp: (id: number) => Promise<void>;
}
export declare const StaffstageContext: import("react").Context<Istaffstage>;
export declare const StaffstageProvider: FC<IcontextProvider>;
export {};
