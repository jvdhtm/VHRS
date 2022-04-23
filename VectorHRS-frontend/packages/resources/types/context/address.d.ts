import { operations, definitions } from "@vhrs/models";
import { FC } from "react";
import { IcontextProvider } from "../types";
interface IAction {
    verb: string;
    results: number | definitions["Address"] | definitions["Address"][];
}
export interface Iaddress {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    addressData?: definitions["Address"][];
    addressListFuncProp: (data: operations["address_list"]["parameters"]) => Promise<void>;
    addressCreateFuncProp: (data: definitions["Address"] | definitions["Address"][]) => Promise<void>;
    addressReadFuncProp: (id: number) => Promise<void>;
    addressUpdateFuncProp: (id: number, data: definitions["Address"] | definitions["Address"][]) => Promise<void>;
    addressPartialFuncProp: (id: number, data: definitions["Address"] | definitions["Address"][]) => Promise<void>;
    addressDeleteFuncProp: (id: number) => Promise<void>;
}
export declare const AddressContext: import("react").Context<Iaddress>;
export declare const AddressProvider: FC<IcontextProvider>;
export {};
