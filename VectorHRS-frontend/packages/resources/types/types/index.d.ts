import { definitions, paths } from "../servers/types/Models";
import * as resources from "../servers/resources/index";
export type ResourceKeys = keyof typeof resources;
export type ModelTypes = definitions[keyof definitions];
export type EndPointType = keyof paths;
export type Models = definitions;
export type urlTypes = paths;
export interface ResourceParams {
    ordering?: string[];
    filters?: any;
    page?: number;
    limit?: number;
    term?: string;
}
import { ReactNode } from "react";
export interface IcontextProvider {
    children: ReactNode;
    headers: any;
}
export interface Stamp {
    resourceName: string;
}
export interface ResourceList<T> {
    next: null | number;
    results: T[];
    previous: null | number;
    count: number;
}
export interface ResourceOptions {
    url?: EndPointType;
    params?: {
        name: string;
        value: string;
    }[];
    force?: boolean;
    headers?: any;
    forceNoDedup?: boolean;
    fetchOnDeclare?: boolean;
    forceFetchOnNavigation?: boolean;
    forceFetchOnWinBlur?: boolean;
}
export type ItemsCachedType = {
    [key: string]: Map<number | string, any>;
};
export interface ResourceField {
    title?: string;
    type?: string;
    description?: string;
    readOnly?: boolean;
    maxLength?: number;
    minLength?: number;
    format?: string;
    'x-nullable'?: boolean;
    relatedResource?: string;
    maximum?: number;
    minimum?: number;
    items?: ResourceField;
    'x-vhrs-relatedResource'?: string;
    uniqueItems?: boolean;
    enum?: string[];
    pattern?: string;
    default?: boolean | string | any;
    $ref?: string;
    fieldType?: string;
}
export declare const enum ErrorFunctionsEnum {
    error404 = "error404",
    error403 = "error403",
    error400 = "error400",
    error402 = "error402",
    error401 = "error401",
    error500 = "error500"
}
export declare const enum successFunctionsEnum {
    created = "created",
    deleted = "deleted",
    updated = "updated",
    get = "get",
    getList = "getList"
}
export declare type ErrorFunctions = {
    [key in ErrorFunctionsEnum]?: (err?: any) => void;
};
export declare type SuccessFunctions = {
    [key in successFunctionsEnum]?: (arg?: any) => void;
};
export type EnumItem = {
    id: number | string;
    text: string;
};
export interface AnnotatedResourceField extends ResourceField {
    multiple?: boolean;
    chip?: boolean;
    itemValue?: string;
    enumItems?: EnumItem[] | string[];
    display?: Display;
    filterable?: boolean;
    sortable?: boolean;
    serializeFunc?: (value: any, field: AnnotatedResourceField) => any;
}
export interface ResourceMetaType {
    resourceNameSingular: string;
    resourceNamePlural: string;
    resourceNameSingularDefinite: string;
    resourceNamePluralDefinite: string;
}
export type Colors = 'primary' | 'secondary' | 'default' | 'info' | 'success' | 'error' | 'warning';
export interface ActionPropType {
    handler?: (ctx: any, item?: any | undefined) => void;
    route?: (item?: any) => string;
    name: string;
    title: string;
    icon?: string;
    color?: Colors | string;
    className?: string;
}
export interface Annotations<T> {
    actions?: ActionPropType[];
    fields?: AnnotatedResourceFields<T>;
    display?: Display;
}
type DisplayResource = (resourceData: any, ctx?: any) => any;
export interface Display {
    component?: DisplayResource;
    props?: DisplayResource;
}
export type AnnotatedResourceFields<T> = {
    [P in keyof T]?: AnnotatedResourceField;
};
export interface ResourceFields {
    [key: string]: ResourceField;
}
export interface ResourceObject {
    baseUrl: string;
    fields: ResourceFields | AnnotatedResourceFields<ModelTypes>;
    name: string;
    relatedurls?: EndPointType[] | string[];
    type?: ModelTypes | any;
    errors?: ErrorFunctions;
    required?: string[];
    actions?: ActionPropType[];
    baseFilter?: any;
    display?: Display;
    meta?: ResourceMetaType;
    bootstrap?: boolean;
}
export {};
