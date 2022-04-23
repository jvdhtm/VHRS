import { operations, definitions } from "@vhrs/models";
import { FC } from "react";
import { IcontextProvider } from "../types";
interface IAction {
    verb: string;
    results: number | definitions["Comments"] | definitions["Comments"][];
}
export interface Icomments {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    commentsData?: definitions["Comments"][];
    commentsListFuncProp: (data: operations["comments_list"]["parameters"]) => Promise<void>;
    commentsCreateFuncProp: (data: definitions["Comments"] | definitions["Comments"][]) => Promise<void>;
    commentsReadFuncProp: (id: number) => Promise<void>;
    commentsUpdateFuncProp: (id: number, data: definitions["Comments"] | definitions["Comments"][]) => Promise<void>;
    commentsPartialFuncProp: (id: number, data: definitions["Comments"] | definitions["Comments"][]) => Promise<void>;
    commentsDeleteFuncProp: (id: number) => Promise<void>;
}
export declare const CommentsContext: import("react").Context<Icomments>;
export declare const CommentsProvider: FC<IcontextProvider>;
export {};
