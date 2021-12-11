import { operations, definitions } from "../Schemas";
import {
  phone_list,
  phone_create,
  phone_read,
  phone_update,
  phone_partial_update,
  phone_delete,
} from "../api";

import React, { createContext, useState, FC } from "react";

interface Iphone {
  PhoneData?: definitions["Phone"][];

  phoneListFuncProp?: (
    data: operations["phone_list"]["parameters"]
  ) => Promise<void>;

  phoneCreateFuncProp?: (data: definitions["Phone"][]) => Promise<void>;

  phoneReadFuncProp?: (id: number) => Promise<void>;

  phoneUpdateFuncProp?: (
    id: number,
    data: definitions["Phone"][]
  ) => Promise<void>;

  phonePartialFuncProp?: (
    id: number,
    data: definitions["Phone"][]
  ) => Promise<void>;

  phoneDeleteFuncProp?: (id: number) => Promise<void>;
}
interface Icontext {
  children: React.ReactNode;
  headers: any;
}

const defaultState = {};
/* prettier-ignore */
const PhoneContext = React.createContext<Iphone>(defaultState);
const PhoneProvider: React.FC<Icontext> = ({ children, headers }) => {
  /* prettier-ignore */
  const [PhoneDataList, setPhoneDataList] = React.useState<Array<definitions["Phone"]>> ([]);
  const phoneList = async (data: operations["phone_list"]["parameters"]) => {
    const result = await phone_list(data, headers);

    if (result) {
    }
  };

  const phoneCreate = async (data: definitions["Phone"][]) => {
    const result = await phone_create(data, headers);

    if (result) {
    }
  };

  const phoneRead = async (id: number) => {
    const result = await phone_read(id, headers);

    if (result) {
    }
  };

  const phoneUpdate = async (id: number, data: definitions["Phone"][]) => {
    const result = await phone_update(id, data, headers);

    if (result) {
    }
  };

  const phonePartial = async (id: number, data: definitions["Phone"][]) => {
    const result = await phone_partial_update(id, data, headers);

    if (result) {
    }
  };

  const phoneDelete = async (id: number) => {
    const result = await phone_delete(id, headers);

    if (result) {
    }
  };

  return (
    <PhoneContext.Provider
      value={{
        PhoneData: PhoneDataList,

        phoneListFuncProp: phoneList,

        phoneCreateFuncProp: phoneCreate,

        phoneReadFuncProp: phoneRead,

        phoneUpdateFuncProp: phoneUpdate,

        phonePartialFuncProp: phonePartial,

        phoneDeleteFuncProp: phoneDelete,
      }}
    >
      {children}
    </PhoneContext.Provider>
  );
};
