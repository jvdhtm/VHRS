import { operations, definitions } from "@vhrs/models";
import { FC, ReactNode } from "react";
interface IAction {
    verb: string;
    results: number | definitions["Staff"] | definitions["Staff"][];
}
interface Istaff {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    staffData?: definitions["Staff"][];
    staffListFuncProp: (data: operations["staff_list"]["parameters"]) => Promise<void>;
    staffCreateFuncProp: (data: definitions["Staff"] | definitions["Staff"][]) => Promise<void>;
    staffReadFuncProp: (id: number) => Promise<void>;
    staffUpdateFuncProp: (id: number, data: definitions["Staff"] | definitions["Staff"][]) => Promise<void>;
    staffPartialFuncProp: (id: number, data: definitions["Staff"] | definitions["Staff"][]) => Promise<void>;
    staffDeleteFuncProp: (id: number) => Promise<void>;
}
interface IcontextProvider {
    children: ReactNode;
    headers: any;
}
export declare const StaffContext: import("react").Context<Istaff>;
export declare const StaffProvider: FC<IcontextProvider>;
export {};
