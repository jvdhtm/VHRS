import { operations, definitions } from "@vhrs/models";
import { FC, ReactNode } from "react";
interface IAction {
    verb: string;
    results: number | definitions["Department"] | definitions["Department"][];
}
interface Idepartment {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    departmentData?: definitions["Department"][];
    departmentListFuncProp: (data: operations["department_list"]["parameters"]) => Promise<void>;
    departmentCreateFuncProp: (data: definitions["Department"] | definitions["Department"][]) => Promise<void>;
    departmentReadFuncProp: (id: number) => Promise<void>;
    departmentUpdateFuncProp: (id: number, data: definitions["Department"] | definitions["Department"][]) => Promise<void>;
    departmentPartialFuncProp: (id: number, data: definitions["Department"] | definitions["Department"][]) => Promise<void>;
    departmentDeleteFuncProp: (id: number) => Promise<void>;
}
interface IcontextProvider {
    children: ReactNode;
    headers: any;
}
export declare const DepartmentContext: import("react").Context<Idepartment>;
export declare const DepartmentProvider: FC<IcontextProvider>;
export {};
