import { operations, definitions } from "../Schemas";
import {
  function_list,
  function_create,
  function_read,
  function_update,
  function_partial_update,
  function_delete,
} from "../api";

import React, { createContext, useState, FC } from "react";

interface Ifunction {
  FunctionData?: definitions["Function"][];

  functionListFuncProp?: (
    data: operations["function_list"]["parameters"]
  ) => Promise<void>;

  functionCreateFuncProp?: (data: definitions["Function"][]) => Promise<void>;

  functionReadFuncProp?: (id: number) => Promise<void>;

  functionUpdateFuncProp?: (
    id: number,
    data: definitions["Function"][]
  ) => Promise<void>;

  functionPartialFuncProp?: (
    id: number,
    data: definitions["Function"][]
  ) => Promise<void>;

  functionDeleteFuncProp?: (id: number) => Promise<void>;
}
interface Icontext {
  children: React.ReactNode;
  headers: any;
}

const defaultState = {};
/* prettier-ignore */
const FunctionContext = React.createContext<Ifunction>(defaultState);
const FunctionProvider: React.FC<Icontext> = ({ children, headers }) => {
  /* prettier-ignore */
  const [FunctionDataList, setFunctionDataList] = React.useState<Array<definitions["Function"]>> ([]);
  const functionList = async (
    data: operations["function_list"]["parameters"]
  ) => {
    const result = await function_list(data, headers);

    if (result) {
    }
  };

  const functionCreate = async (data: definitions["Function"][]) => {
    const result = await function_create(data, headers);

    if (result) {
    }
  };

  const functionRead = async (id: number) => {
    const result = await function_read(id, headers);

    if (result) {
    }
  };

  const functionUpdate = async (
    id: number,
    data: definitions["Function"][]
  ) => {
    const result = await function_update(id, data, headers);

    if (result) {
    }
  };

  const functionPartial = async (
    id: number,
    data: definitions["Function"][]
  ) => {
    const result = await function_partial_update(id, data, headers);

    if (result) {
    }
  };

  const functionDelete = async (id: number) => {
    const result = await function_delete(id, headers);

    if (result) {
    }
  };

  return (
    <FunctionContext.Provider
      value={{
        FunctionData: FunctionDataList,

        functionListFuncProp: functionList,

        functionCreateFuncProp: functionCreate,

        functionReadFuncProp: functionRead,

        functionUpdateFuncProp: functionUpdate,

        functionPartialFuncProp: functionPartial,

        functionDeleteFuncProp: functionDelete,
      }}
    >
      {children}
    </FunctionContext.Provider>
  );
};
