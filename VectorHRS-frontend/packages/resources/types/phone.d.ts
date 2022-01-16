import { operations, definitions } from "@vhrs/models";
import { FC, ReactNode } from "react";
interface IAction {
    verb: string;
    results: number | definitions["Phone"] | definitions["Phone"][];
}
interface Iphone {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    phoneData?: definitions["Phone"][];
    phoneListFuncProp: (data: operations["phone_list"]["parameters"]) => Promise<void>;
    phoneCreateFuncProp: (data: definitions["Phone"] | definitions["Phone"][]) => Promise<void>;
    phoneReadFuncProp: (id: number) => Promise<void>;
    phoneUpdateFuncProp: (id: number, data: definitions["Phone"] | definitions["Phone"][]) => Promise<void>;
    phonePartialFuncProp: (id: number, data: definitions["Phone"] | definitions["Phone"][]) => Promise<void>;
    phoneDeleteFuncProp: (id: number) => Promise<void>;
}
interface IcontextProvider {
    children: ReactNode;
    headers: any;
}
export declare const PhoneContext: import("react").Context<Iphone>;
export declare const PhoneProvider: FC<IcontextProvider>;
export {};
