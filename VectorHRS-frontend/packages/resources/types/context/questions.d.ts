import { operations, definitions } from "@vhrs/models";
import { FC } from "react";
import { IcontextProvider } from "../types";
interface IAction {
    verb: string;
    results: number | definitions["Questions"] | definitions["Questions"][];
}
export interface Iquestions {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    questionsData?: definitions["Questions"][];
    questionsListFuncProp: (data: operations["questions_list"]["parameters"]) => Promise<void>;
    questionsCreateFuncProp: (data: definitions["Questions"] | definitions["Questions"][]) => Promise<void>;
    questionsReadFuncProp: (id: number) => Promise<void>;
    questionsUpdateFuncProp: (id: number, data: definitions["Questions"] | definitions["Questions"][]) => Promise<void>;
    questionsPartialFuncProp: (id: number, data: definitions["Questions"] | definitions["Questions"][]) => Promise<void>;
    questionsDeleteFuncProp: (id: number) => Promise<void>;
}
export declare const QuestionsContext: import("react").Context<Iquestions>;
export declare const QuestionsProvider: FC<IcontextProvider>;
export {};
