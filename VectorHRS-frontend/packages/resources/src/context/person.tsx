import { operations, definitions } from "../Schemas";
import {
  person_list,
  person_create,
  person_read,
  person_update,
  person_partial_update,
  person_delete,
} from "../api";

import React, { createContext, useState, FC } from "react";

interface Iperson {
  PersonData?: definitions["Person"][];

  personListFuncProp?: (
    data: operations["person_list"]["parameters"]
  ) => Promise<void>;

  personCreateFuncProp?: (data: definitions["Person"][]) => Promise<void>;

  personReadFuncProp?: (id: number) => Promise<void>;

  personUpdateFuncProp?: (
    id: number,
    data: definitions["Person"][]
  ) => Promise<void>;

  personPartialFuncProp?: (
    id: number,
    data: definitions["Person"][]
  ) => Promise<void>;

  personDeleteFuncProp?: (id: number) => Promise<void>;
}
interface Icontext {
  children: React.ReactNode;
  headers: any;
}

const defaultState = {};
/* prettier-ignore */
const PersonContext = React.createContext<Iperson>(defaultState);
const PersonProvider: React.FC<Icontext> = ({ children, headers }) => {
  /* prettier-ignore */
  const [PersonDataList, setPersonDataList] = React.useState<Array<definitions["Person"]>> ([]);
  const personList = async (data: operations["person_list"]["parameters"]) => {
    const result = await person_list(data, headers);

    if (result) {
    }
  };

  const personCreate = async (data: definitions["Person"][]) => {
    const result = await person_create(data, headers);

    if (result) {
    }
  };

  const personRead = async (id: number) => {
    const result = await person_read(id, headers);

    if (result) {
    }
  };

  const personUpdate = async (id: number, data: definitions["Person"][]) => {
    const result = await person_update(id, data, headers);

    if (result) {
    }
  };

  const personPartial = async (id: number, data: definitions["Person"][]) => {
    const result = await person_partial_update(id, data, headers);

    if (result) {
    }
  };

  const personDelete = async (id: number) => {
    const result = await person_delete(id, headers);

    if (result) {
    }
  };

  return (
    <PersonContext.Provider
      value={{
        PersonData: PersonDataList,

        personListFuncProp: personList,

        personCreateFuncProp: personCreate,

        personReadFuncProp: personRead,

        personUpdateFuncProp: personUpdate,

        personPartialFuncProp: personPartial,

        personDeleteFuncProp: personDelete,
      }}
    >
      {children}
    </PersonContext.Provider>
  );
};
