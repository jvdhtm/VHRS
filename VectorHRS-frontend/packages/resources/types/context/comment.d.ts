import { operations, definitions } from "@vhrs/models";
import { FC } from "react";
import { IcontextProvider } from "../types";
interface IAction {
    verb: string;
    results: number | definitions["Comment"] | definitions["Comment"][];
}
export interface Icomment {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    commentData?: definitions["Comment"][];
    commentListFuncProp: (data: operations["comment_list"]["parameters"]) => Promise<void>;
    commentCreateFuncProp: (data: definitions["Comment"] | definitions["Comment"][]) => Promise<void>;
    commentReadFuncProp: (id: number) => Promise<void>;
    commentUpdateFuncProp: (id: number, data: definitions["Comment"] | definitions["Comment"][]) => Promise<void>;
    commentPartialFuncProp: (id: number, data: definitions["Comment"] | definitions["Comment"][]) => Promise<void>;
    commentDeleteFuncProp: (id: number) => Promise<void>;
}
export declare const CommentContext: import("react").Context<Icomment>;
export declare const CommentProvider: FC<IcontextProvider>;
export {};
