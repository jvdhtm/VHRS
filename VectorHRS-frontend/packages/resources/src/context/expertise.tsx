import { operations, definitions } from "../Schemas";
import {
  expertise_list,
  expertise_create,
  expertise_read,
  expertise_update,
  expertise_partial_update,
  expertise_delete,
} from "../api";

import React, { createContext, useState, FC } from "react";

interface Iexpertise {
  ExpertiseData?: definitions["Expertise"][];

  expertiseListFuncProp?: (
    data: operations["expertise_list"]["parameters"]
  ) => Promise<void>;

  expertiseCreateFuncProp?: (data: definitions["Expertise"][]) => Promise<void>;

  expertiseReadFuncProp?: (id: number) => Promise<void>;

  expertiseUpdateFuncProp?: (
    id: number,
    data: definitions["Expertise"][]
  ) => Promise<void>;

  expertisePartialFuncProp?: (
    id: number,
    data: definitions["Expertise"][]
  ) => Promise<void>;

  expertiseDeleteFuncProp?: (id: number) => Promise<void>;
}
interface Icontext {
  children: React.ReactNode;
  headers: any;
}

const defaultState = {};
/* prettier-ignore */
const ExpertiseContext = React.createContext<Iexpertise>(defaultState);
const ExpertiseProvider: React.FC<Icontext> = ({ children, headers }) => {
  /* prettier-ignore */
  const [ExpertiseDataList, setExpertiseDataList] = React.useState<Array<definitions["Expertise"]>> ([]);
  const expertiseList = async (
    data: operations["expertise_list"]["parameters"]
  ) => {
    const result = await expertise_list(data, headers);

    if (result) {
    }
  };

  const expertiseCreate = async (data: definitions["Expertise"][]) => {
    const result = await expertise_create(data, headers);

    if (result) {
    }
  };

  const expertiseRead = async (id: number) => {
    const result = await expertise_read(id, headers);

    if (result) {
    }
  };

  const expertiseUpdate = async (
    id: number,
    data: definitions["Expertise"][]
  ) => {
    const result = await expertise_update(id, data, headers);

    if (result) {
    }
  };

  const expertisePartial = async (
    id: number,
    data: definitions["Expertise"][]
  ) => {
    const result = await expertise_partial_update(id, data, headers);

    if (result) {
    }
  };

  const expertiseDelete = async (id: number) => {
    const result = await expertise_delete(id, headers);

    if (result) {
    }
  };

  return (
    <ExpertiseContext.Provider
      value={{
        ExpertiseData: ExpertiseDataList,

        expertiseListFuncProp: expertiseList,

        expertiseCreateFuncProp: expertiseCreate,

        expertiseReadFuncProp: expertiseRead,

        expertiseUpdateFuncProp: expertiseUpdate,

        expertisePartialFuncProp: expertisePartial,

        expertiseDeleteFuncProp: expertiseDelete,
      }}
    >
      {children}
    </ExpertiseContext.Provider>
  );
};
