import { operations, definitions } from "../Schemas";
import {
  app_list,
  app_create,
  app_read,
  app_update,
  app_partial_update,
  app_delete,
} from "../api";

import React, { createContext, useState, FC } from "react";

interface Iapp {
  AppData?: definitions["App"][];

  appListFuncProp?: (
    data: operations["app_list"]["parameters"]
  ) => Promise<void>;

  appCreateFuncProp?: (data: definitions["App"][]) => Promise<void>;

  appReadFuncProp?: (id: number) => Promise<void>;

  appUpdateFuncProp?: (id: number, data: definitions["App"][]) => Promise<void>;

  appPartialFuncProp?: (
    id: number,
    data: definitions["App"][]
  ) => Promise<void>;

  appDeleteFuncProp?: (id: number) => Promise<void>;
}
interface Icontext {
  children: React.ReactNode;
  headers: any;
}

const defaultState = {};
/* prettier-ignore */
const AppContext = React.createContext<Iapp>(defaultState);
const AppProvider: React.FC<Icontext> = ({ children, headers }) => {
  /* prettier-ignore */
  const [AppDataList, setAppDataList] = React.useState<Array<definitions["App"]>> ([]);
  const appList = async (data: operations["app_list"]["parameters"]) => {
    const result = await app_list(data, headers);

    if (result) {
    }
  };

  const appCreate = async (data: definitions["App"][]) => {
    const result = await app_create(data, headers);

    if (result) {
    }
  };

  const appRead = async (id: number) => {
    const result = await app_read(id, headers);

    if (result) {
    }
  };

  const appUpdate = async (id: number, data: definitions["App"][]) => {
    const result = await app_update(id, data, headers);

    if (result) {
    }
  };

  const appPartial = async (id: number, data: definitions["App"][]) => {
    const result = await app_partial_update(id, data, headers);

    if (result) {
    }
  };

  const appDelete = async (id: number) => {
    const result = await app_delete(id, headers);

    if (result) {
    }
  };

  return (
    <AppContext.Provider
      value={{
        AppData: AppDataList,

        appListFuncProp: appList,

        appCreateFuncProp: appCreate,

        appReadFuncProp: appRead,

        appUpdateFuncProp: appUpdate,

        appPartialFuncProp: appPartial,

        appDeleteFuncProp: appDelete,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
