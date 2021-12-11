import { operations, definitions } from "../Schemas";
import {
  stafflog_list,
  stafflog_create,
  stafflog_read,
  stafflog_update,
  stafflog_partial_update,
  stafflog_delete,
} from "../api";

import React, { createContext, useState, FC } from "react";

interface Istafflog {
  StaffLogData?: definitions["StaffLog"][];

  stafflogListFuncProp?: (
    data: operations["stafflog_list"]["parameters"]
  ) => Promise<void>;

  stafflogCreateFuncProp?: (data: definitions["StaffLog"][]) => Promise<void>;

  stafflogReadFuncProp?: (id: number) => Promise<void>;

  stafflogUpdateFuncProp?: (
    id: number,
    data: definitions["StaffLog"][]
  ) => Promise<void>;

  stafflogPartialFuncProp?: (
    id: number,
    data: definitions["StaffLog"][]
  ) => Promise<void>;

  stafflogDeleteFuncProp?: (id: number) => Promise<void>;
}
interface Icontext {
  children: React.ReactNode;
  headers: any;
}

const defaultState = {};
/* prettier-ignore */
const StafflogContext = React.createContext<Istafflog>(defaultState);
const StafflogProvider: React.FC<Icontext> = ({ children, headers }) => {
  /* prettier-ignore */
  const [StaffLogDataList, setStaffLogDataList] = React.useState<Array<definitions["StaffLog"]>> ([]);
  const stafflogList = async (
    data: operations["stafflog_list"]["parameters"]
  ) => {
    const result = await stafflog_list(data, headers);

    if (result) {
    }
  };

  const stafflogCreate = async (data: definitions["StaffLog"][]) => {
    const result = await stafflog_create(data, headers);

    if (result) {
    }
  };

  const stafflogRead = async (id: number) => {
    const result = await stafflog_read(id, headers);

    if (result) {
    }
  };

  const stafflogUpdate = async (
    id: number,
    data: definitions["StaffLog"][]
  ) => {
    const result = await stafflog_update(id, data, headers);

    if (result) {
    }
  };

  const stafflogPartial = async (
    id: number,
    data: definitions["StaffLog"][]
  ) => {
    const result = await stafflog_partial_update(id, data, headers);

    if (result) {
    }
  };

  const stafflogDelete = async (id: number) => {
    const result = await stafflog_delete(id, headers);

    if (result) {
    }
  };

  return (
    <StafflogContext.Provider
      value={{
        StaffLogData: StaffLogDataList,

        stafflogListFuncProp: stafflogList,

        stafflogCreateFuncProp: stafflogCreate,

        stafflogReadFuncProp: stafflogRead,

        stafflogUpdateFuncProp: stafflogUpdate,

        stafflogPartialFuncProp: stafflogPartial,

        stafflogDeleteFuncProp: stafflogDelete,
      }}
    >
      {children}
    </StafflogContext.Provider>
  );
};
