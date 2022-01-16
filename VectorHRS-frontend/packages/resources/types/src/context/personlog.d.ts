import { operations, definitions } from "@vhrs/models";
import { FC, ReactNode } from "react";
interface IAction {
    verb: string;
    results: number | definitions["PersonLog"] | definitions["PersonLog"][];
}
interface Ipersonlog {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    personlogData?: definitions["PersonLog"][];
    personlogListFuncProp: (data: operations["personlog_list"]["parameters"]) => Promise<void>;
    personlogCreateFuncProp: (data: definitions["PersonLog"] | definitions["PersonLog"][]) => Promise<void>;
    personlogReadFuncProp: (id: number) => Promise<void>;
    personlogUpdateFuncProp: (id: number, data: definitions["PersonLog"] | definitions["PersonLog"][]) => Promise<void>;
    personlogPartialFuncProp: (id: number, data: definitions["PersonLog"] | definitions["PersonLog"][]) => Promise<void>;
    personlogDeleteFuncProp: (id: number) => Promise<void>;
}
interface IcontextProvider {
    children: ReactNode;
    headers: any;
}
export declare const PersonlogContext: import("react").Context<Ipersonlog>;
export declare const PersonlogProvider: FC<IcontextProvider>;
export {};
