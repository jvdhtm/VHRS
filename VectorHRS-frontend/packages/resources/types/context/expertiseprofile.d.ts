import { operations, definitions } from "@vhrs/models";
import { FC } from "react";
import { IcontextProvider } from "../types";
interface IAction {
    verb: string;
    results: number | definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][];
}
export interface Iexpertiseprofile {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    expertiseprofileData?: definitions["ExpertiseProfile"][];
    expertiseprofileListFuncProp: (data: operations["expertiseprofile_list"]["parameters"]) => Promise<void>;
    expertiseprofileCreateFuncProp: (data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][]) => Promise<void>;
    expertiseprofileReadFuncProp: (id: number) => Promise<void>;
    expertiseprofileUpdateFuncProp: (id: number, data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][]) => Promise<void>;
    expertiseprofilePartialFuncProp: (id: number, data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][]) => Promise<void>;
    expertiseprofileDeleteFuncProp: (id: number) => Promise<void>;
}
export declare const ExpertiseprofileContext: import("react").Context<Iexpertiseprofile>;
export declare const ExpertiseprofileProvider: FC<IcontextProvider>;
export {};
