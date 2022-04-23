import { operations, definitions } from "@vhrs/models";
import { FC } from "react";
import { IcontextProvider } from "../types";
interface IAction {
    verb: string;
    results: number | definitions["Expertise"] | definitions["Expertise"][];
}
export interface Iexpertise {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    expertiseData?: definitions["Expertise"][];
    expertiseListFuncProp: (data: operations["expertise_list"]["parameters"]) => Promise<void>;
    expertiseCreateFuncProp: (data: definitions["Expertise"] | definitions["Expertise"][]) => Promise<void>;
    expertiseReadFuncProp: (id: number) => Promise<void>;
    expertiseUpdateFuncProp: (id: number, data: definitions["Expertise"] | definitions["Expertise"][]) => Promise<void>;
    expertisePartialFuncProp: (id: number, data: definitions["Expertise"] | definitions["Expertise"][]) => Promise<void>;
    expertiseDeleteFuncProp: (id: number) => Promise<void>;
}
export declare const ExpertiseContext: import("react").Context<Iexpertise>;
export declare const ExpertiseProvider: FC<IcontextProvider>;
export {};
