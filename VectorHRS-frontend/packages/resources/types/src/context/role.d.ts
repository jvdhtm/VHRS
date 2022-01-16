import { operations, definitions } from "@vhrs/models";
import { FC, ReactNode } from "react";
interface IAction {
    verb: string;
    results: number | definitions["Role"] | definitions["Role"][];
}
interface Irole {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    roleData?: definitions["Role"][];
    roleListFuncProp: (data: operations["role_list"]["parameters"]) => Promise<void>;
    roleCreateFuncProp: (data: definitions["Role"] | definitions["Role"][]) => Promise<void>;
    roleReadFuncProp: (id: number) => Promise<void>;
    roleUpdateFuncProp: (id: number, data: definitions["Role"] | definitions["Role"][]) => Promise<void>;
    rolePartialFuncProp: (id: number, data: definitions["Role"] | definitions["Role"][]) => Promise<void>;
    roleDeleteFuncProp: (id: number) => Promise<void>;
}
interface IcontextProvider {
    children: ReactNode;
    headers: any;
}
export declare const RoleContext: import("react").Context<Irole>;
export declare const RoleProvider: FC<IcontextProvider>;
export {};
