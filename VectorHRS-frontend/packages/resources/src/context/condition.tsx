import { operations, definitions } from "../Schemas";
import {
  condition_list,
  condition_create,
  condition_read,
  condition_update,
  condition_partial_update,
  condition_delete,
} from "../api";

import React, { createContext, useState, FC } from "react";

interface Icondition {
  ConditionData?: definitions["Condition"][];

  conditionListFuncProp?: (
    data: operations["condition_list"]["parameters"]
  ) => Promise<void>;

  conditionCreateFuncProp?: (data: definitions["Condition"][]) => Promise<void>;

  conditionReadFuncProp?: (id: number) => Promise<void>;

  conditionUpdateFuncProp?: (
    id: number,
    data: definitions["Condition"][]
  ) => Promise<void>;

  conditionPartialFuncProp?: (
    id: number,
    data: definitions["Condition"][]
  ) => Promise<void>;

  conditionDeleteFuncProp?: (id: number) => Promise<void>;
}
interface Icontext {
  children: React.ReactNode;
  headers: any;
}

const defaultState = {};
/* prettier-ignore */
const ConditionContext = React.createContext<Icondition>(defaultState);
const ConditionProvider: React.FC<Icontext> = ({ children, headers }) => {
  /* prettier-ignore */
  const [ConditionDataList, setConditionDataList] = React.useState<Array<definitions["Condition"]>> ([]);
  const conditionList = async (
    data: operations["condition_list"]["parameters"]
  ) => {
    const result = await condition_list(data, headers);

    if (result) {
    }
  };

  const conditionCreate = async (data: definitions["Condition"][]) => {
    const result = await condition_create(data, headers);

    if (result) {
    }
  };

  const conditionRead = async (id: number) => {
    const result = await condition_read(id, headers);

    if (result) {
    }
  };

  const conditionUpdate = async (
    id: number,
    data: definitions["Condition"][]
  ) => {
    const result = await condition_update(id, data, headers);

    if (result) {
    }
  };

  const conditionPartial = async (
    id: number,
    data: definitions["Condition"][]
  ) => {
    const result = await condition_partial_update(id, data, headers);

    if (result) {
    }
  };

  const conditionDelete = async (id: number) => {
    const result = await condition_delete(id, headers);

    if (result) {
    }
  };

  return (
    <ConditionContext.Provider
      value={{
        ConditionData: ConditionDataList,

        conditionListFuncProp: conditionList,

        conditionCreateFuncProp: conditionCreate,

        conditionReadFuncProp: conditionRead,

        conditionUpdateFuncProp: conditionUpdate,

        conditionPartialFuncProp: conditionPartial,

        conditionDeleteFuncProp: conditionDelete,
      }}
    >
      {children}
    </ConditionContext.Provider>
  );
};
