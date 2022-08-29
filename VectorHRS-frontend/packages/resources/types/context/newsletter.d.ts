import { operations, definitions } from "@vhrs/models";
import { FC } from "react";
import { IcontextProvider } from "../types";
interface IAction {
    verb: string;
    results: number | definitions["NewsLetter"] | definitions["NewsLetter"][];
}
export interface Inewsletter {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    newsletterData?: definitions["NewsLetter"][];
    newsletterListFuncProp: (data: operations["newsletter_list"]["parameters"]) => Promise<void>;
    newsletterCreateFuncProp: (data: definitions["NewsLetter"] | definitions["NewsLetter"][]) => Promise<void>;
    newsletterReadFuncProp: (id: number) => Promise<void>;
    newsletterUpdateFuncProp: (id: number, data: definitions["NewsLetter"] | definitions["NewsLetter"][]) => Promise<void>;
    newsletterPartialFuncProp: (id: number, data: definitions["NewsLetter"] | definitions["NewsLetter"][]) => Promise<void>;
    newsletterDeleteFuncProp: (id: number) => Promise<void>;
}
export declare const NewsletterContext: import("react").Context<Inewsletter>;
export declare const NewsletterProvider: FC<IcontextProvider>;
export {};
