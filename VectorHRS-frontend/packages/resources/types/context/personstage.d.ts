import { operations, definitions } from "@vhrs/models";
import { FC } from "react";
import { IcontextProvider } from "../types";
interface IAction {
    verb: string;
    results: number | definitions["PersonStage"] | definitions["PersonStage"][];
}
export interface Ipersonstage {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    personstageData?: definitions["PersonStage"][];
    personstageListFuncProp: (data: operations["personstage_list"]["parameters"]) => Promise<void>;
    personstageCreateFuncProp: (data: definitions["PersonStage"] | definitions["PersonStage"][]) => Promise<void>;
    personstageReadFuncProp: (id: number) => Promise<void>;
    personstageUpdateFuncProp: (id: number, data: definitions["PersonStage"] | definitions["PersonStage"][]) => Promise<void>;
    personstagePartialFuncProp: (id: number, data: definitions["PersonStage"] | definitions["PersonStage"][]) => Promise<void>;
    personstageDeleteFuncProp: (id: number) => Promise<void>;
}
export declare const PersonstageContext: import("react").Context<Ipersonstage>;
export declare const PersonstageProvider: FC<IcontextProvider>;
export {};
