import { operations, definitions } from "@vhrs/models";
import { FC } from "react";
import { IcontextProvider } from "../types";
interface IAction {
    verb: string;
    results: number | definitions["answers"] | definitions["answers"][];
}
export interface Ianswers {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    answersData?: definitions["answers"][];
    answersListFuncProp: (data: operations["answers_list"]["parameters"]) => Promise<void>;
    answersCreateFuncProp: (data: definitions["answers"] | definitions["answers"][]) => Promise<void>;
    answersReadFuncProp: (id: number) => Promise<void>;
    answersUpdateFuncProp: (id: number, data: definitions["answers"] | definitions["answers"][]) => Promise<void>;
    answersPartialFuncProp: (id: number, data: definitions["answers"] | definitions["answers"][]) => Promise<void>;
    answersDeleteFuncProp: (id: number) => Promise<void>;
}
export declare const AnswersContext: import("react").Context<Ianswers>;
export declare const AnswersProvider: FC<IcontextProvider>;
export {};
