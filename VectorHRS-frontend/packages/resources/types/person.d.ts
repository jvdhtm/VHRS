import { operations, definitions } from "@vhrs/models";
import { FC, ReactNode } from "react";
interface IAction {
    verb: string;
    results: number | definitions["Person"] | definitions["Person"][];
}
interface Iperson {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    personData?: definitions["Person"][];
    personListFuncProp: (data: operations["person_list"]["parameters"]) => Promise<void>;
    personCreateFuncProp: (data: definitions["Person"] | definitions["Person"][]) => Promise<void>;
    personReadFuncProp: (id: number) => Promise<void>;
    personUpdateFuncProp: (id: number, data: definitions["Person"] | definitions["Person"][]) => Promise<void>;
    personPartialFuncProp: (id: number, data: definitions["Person"] | definitions["Person"][]) => Promise<void>;
    personDeleteFuncProp: (id: number) => Promise<void>;
}
interface IcontextProvider {
    children: ReactNode;
    headers: any;
}
export declare const PersonContext: import("react").Context<Iperson>;
export declare const PersonProvider: FC<IcontextProvider>;
export {};
