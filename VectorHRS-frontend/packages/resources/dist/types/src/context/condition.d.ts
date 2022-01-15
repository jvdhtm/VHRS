import { operations, definitions } from "@vhrs/models";
import { FC, ReactNode } from "react";
interface IAction {
    verb: string;
    results: number | definitions["Condition"] | definitions["Condition"][];
}
interface Icondition {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    conditionData?: definitions["Condition"][];
    conditionListFuncProp?: (data: operations["condition_list"]["parameters"]) => Promise<void>;
    conditionCreateFuncProp?: (data: definitions["Condition"] | definitions["Condition"][]) => Promise<void>;
    conditionReadFuncProp?: (id: number) => Promise<void>;
    conditionUpdateFuncProp?: (id: number, data: definitions["Condition"] | definitions["Condition"][]) => Promise<void>;
    conditionPartialFuncProp?: (id: number, data: definitions["Condition"] | definitions["Condition"][]) => Promise<void>;
    conditionDeleteFuncProp?: (id: number) => Promise<void>;
}
interface IcontextProvider {
    children: ReactNode;
    headers: any;
}
export declare const ConditionContext: import("react").Context<Icondition>;
export declare const ConditionProvider: FC<IcontextProvider>;
export {};
