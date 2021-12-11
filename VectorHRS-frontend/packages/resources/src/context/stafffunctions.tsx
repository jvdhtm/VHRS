import { operations, definitions } from "../Schemas";
import {
  stafffunctions_list,
  stafffunctions_create,
  stafffunctions_read,
  stafffunctions_update,
  stafffunctions_partial_update,
  stafffunctions_delete,
} from "../api";

import React, { createContext, useState, FC } from "react";

interface Istafffunctions {
  StaffFunctionsData?: definitions["StaffFunctions"][];

  stafffunctionsListFuncProp?: (
    data: operations["stafffunctions_list"]["parameters"]
  ) => Promise<void>;

  stafffunctionsCreateFuncProp?: (
    data: definitions["StaffFunctions"][]
  ) => Promise<void>;

  stafffunctionsReadFuncProp?: (id: number) => Promise<void>;

  stafffunctionsUpdateFuncProp?: (
    id: number,
    data: definitions["StaffFunctions"][]
  ) => Promise<void>;

  stafffunctionsPartialFuncProp?: (
    id: number,
    data: definitions["StaffFunctions"][]
  ) => Promise<void>;

  stafffunctionsDeleteFuncProp?: (id: number) => Promise<void>;
}
interface Icontext {
  children: React.ReactNode;
  headers: any;
}

const defaultState = {};
/* prettier-ignore */
const StafffunctionsContext = React.createContext<Istafffunctions>(defaultState);
const StafffunctionsProvider: React.FC<Icontext> = ({ children, headers }) => {
  /* prettier-ignore */
  const [StaffFunctionsDataList, setStaffFunctionsDataList] = React.useState<Array<definitions["StaffFunctions"]>> ([]);
  const stafffunctionsList = async (
    data: operations["stafffunctions_list"]["parameters"]
  ) => {
    const result = await stafffunctions_list(data, headers);

    if (result) {
    }
  };

  const stafffunctionsCreate = async (
    data: definitions["StaffFunctions"][]
  ) => {
    const result = await stafffunctions_create(data, headers);

    if (result) {
    }
  };

  const stafffunctionsRead = async (id: number) => {
    const result = await stafffunctions_read(id, headers);

    if (result) {
    }
  };

  const stafffunctionsUpdate = async (
    id: number,
    data: definitions["StaffFunctions"][]
  ) => {
    const result = await stafffunctions_update(id, data, headers);

    if (result) {
    }
  };

  const stafffunctionsPartial = async (
    id: number,
    data: definitions["StaffFunctions"][]
  ) => {
    const result = await stafffunctions_partial_update(id, data, headers);

    if (result) {
    }
  };

  const stafffunctionsDelete = async (id: number) => {
    const result = await stafffunctions_delete(id, headers);

    if (result) {
    }
  };

  return (
    <StafffunctionsContext.Provider
      value={{
        StaffFunctionsData: StaffFunctionsDataList,

        stafffunctionsListFuncProp: stafffunctionsList,

        stafffunctionsCreateFuncProp: stafffunctionsCreate,

        stafffunctionsReadFuncProp: stafffunctionsRead,

        stafffunctionsUpdateFuncProp: stafffunctionsUpdate,

        stafffunctionsPartialFuncProp: stafffunctionsPartial,

        stafffunctionsDeleteFuncProp: stafffunctionsDelete,
      }}
    >
      {children}
    </StafffunctionsContext.Provider>
  );
};
