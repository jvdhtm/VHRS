import { operations, definitions } from "@vhrs/models";
import { FC } from "react";
import { IcontextProvider } from "../types";
interface IAction {
    verb: string;
    results: number | definitions["QuestionsRelatedLink"] | definitions["QuestionsRelatedLink"][];
}
export interface Iquestionsrelatedlink {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    questionsrelatedlinkData?: definitions["QuestionsRelatedLink"][];
    questionsrelatedlinkListFuncProp: (data: operations["questionsrelatedlink_list"]["parameters"]) => Promise<void>;
    questionsrelatedlinkCreateFuncProp: (data: definitions["QuestionsRelatedLink"] | definitions["QuestionsRelatedLink"][]) => Promise<void>;
    questionsrelatedlinkReadFuncProp: (id: number) => Promise<void>;
    questionsrelatedlinkUpdateFuncProp: (id: number, data: definitions["QuestionsRelatedLink"] | definitions["QuestionsRelatedLink"][]) => Promise<void>;
    questionsrelatedlinkPartialFuncProp: (id: number, data: definitions["QuestionsRelatedLink"] | definitions["QuestionsRelatedLink"][]) => Promise<void>;
    questionsrelatedlinkDeleteFuncProp: (id: number) => Promise<void>;
}
export declare const QuestionsrelatedlinkContext: import("react").Context<Iquestionsrelatedlink>;
export declare const QuestionsrelatedlinkProvider: FC<IcontextProvider>;
export {};
