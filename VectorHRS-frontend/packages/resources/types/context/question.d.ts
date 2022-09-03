import { operations, definitions } from "@vhrs/models";
import { FC } from "react";
import { IcontextProvider } from "../types";
interface IAction {
    verb: string;
    results: number | definitions["Question"] | definitions["Question"][];
}
export interface Iquestion {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    questionData?: definitions["Question"][];
    questionListFuncProp: (data: operations["question_list"]["parameters"]) => Promise<void>;
    questionCreateFuncProp: (data: definitions["Question"] | definitions["Question"][]) => Promise<void>;
    questionReadFuncProp: (id: number) => Promise<void>;
    questionUpdateFuncProp: (id: number, data: definitions["Question"] | definitions["Question"][]) => Promise<void>;
    questionPartialFuncProp: (id: number, data: definitions["Question"] | definitions["Question"][]) => Promise<void>;
    questionDeleteFuncProp: (id: number) => Promise<void>;
}
export declare const QuestionContext: import("react").Context<Iquestion>;
export declare const QuestionProvider: FC<IcontextProvider>;
export {};
