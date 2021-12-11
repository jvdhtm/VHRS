import { operations, definitions } from "../Schemas";
import {
  personlog_list,
  personlog_create,
  personlog_read,
  personlog_update,
  personlog_partial_update,
  personlog_delete,
} from "../api";

import React, { createContext, useState, FC } from "react";

interface Ipersonlog {
  PersonLogData?: definitions["PersonLog"][];

  personlogListFuncProp?: (
    data: operations["personlog_list"]["parameters"]
  ) => Promise<void>;

  personlogCreateFuncProp?: (data: definitions["PersonLog"][]) => Promise<void>;

  personlogReadFuncProp?: (id: number) => Promise<void>;

  personlogUpdateFuncProp?: (
    id: number,
    data: definitions["PersonLog"][]
  ) => Promise<void>;

  personlogPartialFuncProp?: (
    id: number,
    data: definitions["PersonLog"][]
  ) => Promise<void>;

  personlogDeleteFuncProp?: (id: number) => Promise<void>;
}
interface Icontext {
  children: React.ReactNode;
  headers: any;
}

const defaultState = {};
/* prettier-ignore */
const PersonlogContext = React.createContext<Ipersonlog>(defaultState);
const PersonlogProvider: React.FC<Icontext> = ({ children, headers }) => {
  /* prettier-ignore */
  const [PersonLogDataList, setPersonLogDataList] = React.useState<Array<definitions["PersonLog"]>> ([]);
  const personlogList = async (
    data: operations["personlog_list"]["parameters"]
  ) => {
    const result = await personlog_list(data, headers);

    if (result) {
    }
  };

  const personlogCreate = async (data: definitions["PersonLog"][]) => {
    const result = await personlog_create(data, headers);

    if (result) {
    }
  };

  const personlogRead = async (id: number) => {
    const result = await personlog_read(id, headers);

    if (result) {
    }
  };

  const personlogUpdate = async (
    id: number,
    data: definitions["PersonLog"][]
  ) => {
    const result = await personlog_update(id, data, headers);

    if (result) {
    }
  };

  const personlogPartial = async (
    id: number,
    data: definitions["PersonLog"][]
  ) => {
    const result = await personlog_partial_update(id, data, headers);

    if (result) {
    }
  };

  const personlogDelete = async (id: number) => {
    const result = await personlog_delete(id, headers);

    if (result) {
    }
  };

  return (
    <PersonlogContext.Provider
      value={{
        PersonLogData: PersonLogDataList,

        personlogListFuncProp: personlogList,

        personlogCreateFuncProp: personlogCreate,

        personlogReadFuncProp: personlogRead,

        personlogUpdateFuncProp: personlogUpdate,

        personlogPartialFuncProp: personlogPartial,

        personlogDeleteFuncProp: personlogDelete,
      }}
    >
      {children}
    </PersonlogContext.Provider>
  );
};
