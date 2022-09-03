import { operations, definitions } from "@vhrs/models";
import { FC } from "react";
import { IcontextProvider } from "../types";
interface IAction {
    verb: string;
    results: number | definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][];
}
export interface Inewsrelatedlink {
    loading: boolean;
    count: number;
    next?: string;
    previous?: string;
    logActions: IAction[];
    newsrelatedlinkData?: definitions["NewsRelatedLink"][];
    newsrelatedlinkListFuncProp: (data: operations["newsrelatedlink_list"]["parameters"]) => Promise<void>;
    newsrelatedlinkCreateFuncProp: (data: definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][]) => Promise<void>;
    newsrelatedlinkReadFuncProp: (id: number) => Promise<void>;
    newsrelatedlinkUpdateFuncProp: (id: number, data: definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][]) => Promise<void>;
    newsrelatedlinkPartialFuncProp: (id: number, data: definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][]) => Promise<void>;
    newsrelatedlinkDeleteFuncProp: (id: number) => Promise<void>;
}
export declare const NewsrelatedlinkContext: import("react").Context<Inewsrelatedlink>;
export declare const NewsrelatedlinkProvider: FC<IcontextProvider>;
export {};
