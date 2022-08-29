import { operations, definitions } from "@vhrs/models";
import { FC } from "react";
import { IcontextProvider } from "../types";
interface IAction {
    verb: string;
    results: number | definitions["StaffComment"] | definitions["StaffComment"][];
}
export interface Istaffcomment {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    staffcommentData?: definitions["StaffComment"][];
    staffcommentListFuncProp: (data: operations["staffcomment_list"]["parameters"]) => Promise<void>;
    staffcommentCreateFuncProp: (data: definitions["StaffComment"] | definitions["StaffComment"][]) => Promise<void>;
    staffcommentReadFuncProp: (id: number) => Promise<void>;
    staffcommentUpdateFuncProp: (id: number, data: definitions["StaffComment"] | definitions["StaffComment"][]) => Promise<void>;
    staffcommentPartialFuncProp: (id: number, data: definitions["StaffComment"] | definitions["StaffComment"][]) => Promise<void>;
    staffcommentDeleteFuncProp: (id: number) => Promise<void>;
}
export declare const StaffcommentContext: import("react").Context<Istaffcomment>;
export declare const StaffcommentProvider: FC<IcontextProvider>;
export {};
