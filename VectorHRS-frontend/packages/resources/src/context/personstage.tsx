import { operations, definitions } from "../Schemas";
import {
  personstage_list,
  personstage_create,
  personstage_read,
  personstage_update,
  personstage_partial_update,
  personstage_delete,
} from "../api";

import React, { createContext, useState, FC } from "react";

interface Ipersonstage {
  PersonStageData?: definitions["PersonStage"][];

  personstageListFuncProp?: (
    data: operations["personstage_list"]["parameters"]
  ) => Promise<void>;

  personstageCreateFuncProp?: (
    data: definitions["PersonStage"][]
  ) => Promise<void>;

  personstageReadFuncProp?: (id: number) => Promise<void>;

  personstageUpdateFuncProp?: (
    id: number,
    data: definitions["PersonStage"][]
  ) => Promise<void>;

  personstagePartialFuncProp?: (
    id: number,
    data: definitions["PersonStage"][]
  ) => Promise<void>;

  personstageDeleteFuncProp?: (id: number) => Promise<void>;
}
interface Icontext {
  children: React.ReactNode;
  headers: any;
}

const defaultState = {};
/* prettier-ignore */
const PersonstageContext = React.createContext<Ipersonstage>(defaultState);
const PersonstageProvider: React.FC<Icontext> = ({ children, headers }) => {
  /* prettier-ignore */
  const [PersonStageDataList, setPersonStageDataList] = React.useState<Array<definitions["PersonStage"]>> ([]);
  const personstageList = async (
    data: operations["personstage_list"]["parameters"]
  ) => {
    const result = await personstage_list(data, headers);

    if (result) {
    }
  };

  const personstageCreate = async (data: definitions["PersonStage"][]) => {
    const result = await personstage_create(data, headers);

    if (result) {
    }
  };

  const personstageRead = async (id: number) => {
    const result = await personstage_read(id, headers);

    if (result) {
    }
  };

  const personstageUpdate = async (
    id: number,
    data: definitions["PersonStage"][]
  ) => {
    const result = await personstage_update(id, data, headers);

    if (result) {
    }
  };

  const personstagePartial = async (
    id: number,
    data: definitions["PersonStage"][]
  ) => {
    const result = await personstage_partial_update(id, data, headers);

    if (result) {
    }
  };

  const personstageDelete = async (id: number) => {
    const result = await personstage_delete(id, headers);

    if (result) {
    }
  };

  return (
    <PersonstageContext.Provider
      value={{
        PersonStageData: PersonStageDataList,

        personstageListFuncProp: personstageList,

        personstageCreateFuncProp: personstageCreate,

        personstageReadFuncProp: personstageRead,

        personstageUpdateFuncProp: personstageUpdate,

        personstagePartialFuncProp: personstagePartial,

        personstageDeleteFuncProp: personstageDelete,
      }}
    >
      {children}
    </PersonstageContext.Provider>
  );
};
