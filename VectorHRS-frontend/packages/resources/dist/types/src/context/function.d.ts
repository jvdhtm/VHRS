import { operations, definitions } from "@vhrs/models";
import { FC, ReactNode } from "react";
interface IAction {
    verb: string;
    results: number | definitions["Function"] | definitions["Function"][];
}
interface Ifunction {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    functionData?: definitions["Function"][];
    functionListFuncProp?: (data: operations["function_list"]["parameters"]) => Promise<void>;
    functionCreateFuncProp?: (data: definitions["Function"] | definitions["Function"][]) => Promise<void>;
    functionReadFuncProp?: (id: number) => Promise<void>;
    functionUpdateFuncProp?: (id: number, data: definitions["Function"] | definitions["Function"][]) => Promise<void>;
    functionPartialFuncProp?: (id: number, data: definitions["Function"] | definitions["Function"][]) => Promise<void>;
    functionDeleteFuncProp?: (id: number) => Promise<void>;
}
interface IcontextProvider {
    children: ReactNode;
    headers: any;
}
export declare const FunctionContext: import("react").Context<Ifunction>;
export declare const FunctionProvider: FC<IcontextProvider>;
export {};
