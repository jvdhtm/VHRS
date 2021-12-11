import { operations, definitions } from "../Schemas";
import {
  staff_list,
  staff_create,
  staff_read,
  staff_update,
  staff_partial_update,
  staff_delete,
} from "../api";

import React, { createContext, useState, FC } from "react";

interface Istaff {
  StaffData?: definitions["Staff"][];

  staffListFuncProp?: (
    data: operations["staff_list"]["parameters"]
  ) => Promise<void>;

  staffCreateFuncProp?: (data: definitions["Staff"][]) => Promise<void>;

  staffReadFuncProp?: (id: number) => Promise<void>;

  staffUpdateFuncProp?: (
    id: number,
    data: definitions["Staff"][]
  ) => Promise<void>;

  staffPartialFuncProp?: (
    id: number,
    data: definitions["Staff"][]
  ) => Promise<void>;

  staffDeleteFuncProp?: (id: number) => Promise<void>;
}
interface Icontext {
  children: React.ReactNode;
  headers: any;
}

const defaultState = {};
/* prettier-ignore */
const StaffContext = React.createContext<Istaff>(defaultState);
const StaffProvider: React.FC<Icontext> = ({ children, headers }) => {
  /* prettier-ignore */
  const [StaffDataList, setStaffDataList] = React.useState<Array<definitions["Staff"]>> ([]);
  const staffList = async (data: operations["staff_list"]["parameters"]) => {
    const result = await staff_list(data, headers);

    if (result) {
    }
  };

  const staffCreate = async (data: definitions["Staff"][]) => {
    const result = await staff_create(data, headers);

    if (result) {
    }
  };

  const staffRead = async (id: number) => {
    const result = await staff_read(id, headers);

    if (result) {
    }
  };

  const staffUpdate = async (id: number, data: definitions["Staff"][]) => {
    const result = await staff_update(id, data, headers);

    if (result) {
    }
  };

  const staffPartial = async (id: number, data: definitions["Staff"][]) => {
    const result = await staff_partial_update(id, data, headers);

    if (result) {
    }
  };

  const staffDelete = async (id: number) => {
    const result = await staff_delete(id, headers);

    if (result) {
    }
  };

  return (
    <StaffContext.Provider
      value={{
        StaffData: StaffDataList,

        staffListFuncProp: staffList,

        staffCreateFuncProp: staffCreate,

        staffReadFuncProp: staffRead,

        staffUpdateFuncProp: staffUpdate,

        staffPartialFuncProp: staffPartial,

        staffDeleteFuncProp: staffDelete,
      }}
    >
      {children}
    </StaffContext.Provider>
  );
};
