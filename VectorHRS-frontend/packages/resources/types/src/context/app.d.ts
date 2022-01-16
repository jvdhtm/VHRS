import { operations, definitions } from "@vhrs/models";
import { FC, ReactNode } from "react";
interface IAction {
    verb: string;
    results: number | definitions["App"] | definitions["App"][];
}
interface Iapp {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    appData?: definitions["App"][];
    appListFuncProp: (data: operations["app_list"]["parameters"]) => Promise<void>;
    appCreateFuncProp: (data: definitions["App"] | definitions["App"][]) => Promise<void>;
    appReadFuncProp: (id: number) => Promise<void>;
    appUpdateFuncProp: (id: number, data: definitions["App"] | definitions["App"][]) => Promise<void>;
    appPartialFuncProp: (id: number, data: definitions["App"] | definitions["App"][]) => Promise<void>;
    appDeleteFuncProp: (id: number) => Promise<void>;
}
interface IcontextProvider {
    children: ReactNode;
    headers: any;
}
export declare const AppContext: import("react").Context<Iapp>;
export declare const AppProvider: FC<IcontextProvider>;
export {};
