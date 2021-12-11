import { operations, definitions } from "../Schemas";
import {
  address_list,
  address_create,
  address_read,
  address_update,
  address_partial_update,
  address_delete,
} from "../api";

import React, { createContext, useState, FC } from "react";

interface Iaddress {
  AddressData?: definitions["Address"][];

  addressListFuncProp?: (
    data: operations["address_list"]["parameters"]
  ) => Promise<void>;

  addressCreateFuncProp?: (data: definitions["Address"][]) => Promise<void>;

  addressReadFuncProp?: (id: number) => Promise<void>;

  addressUpdateFuncProp?: (
    id: number,
    data: definitions["Address"][]
  ) => Promise<void>;

  addressPartialFuncProp?: (
    id: number,
    data: definitions["Address"][]
  ) => Promise<void>;

  addressDeleteFuncProp?: (id: number) => Promise<void>;
}
interface Icontext {
  children: React.ReactNode;
  headers: any;
}

const defaultState = {};
/* prettier-ignore */
const AddressContext = React.createContext<Iaddress>(defaultState);
const AddressProvider: React.FC<Icontext> = ({ children, headers }) => {
  /* prettier-ignore */
  const [AddressDataList, setAddressDataList] = React.useState<Array<definitions["Address"]>> ([]);
  const addressList = async (
    data: operations["address_list"]["parameters"]
  ) => {
    const result = await address_list(data, headers);

    if (result) {
    }
  };

  const addressCreate = async (data: definitions["Address"][]) => {
    const result = await address_create(data, headers);

    if (result) {
    }
  };

  const addressRead = async (id: number) => {
    const result = await address_read(id, headers);

    if (result) {
    }
  };

  const addressUpdate = async (id: number, data: definitions["Address"][]) => {
    const result = await address_update(id, data, headers);

    if (result) {
    }
  };

  const addressPartial = async (id: number, data: definitions["Address"][]) => {
    const result = await address_partial_update(id, data, headers);

    if (result) {
    }
  };

  const addressDelete = async (id: number) => {
    const result = await address_delete(id, headers);

    if (result) {
    }
  };

  return (
    <AddressContext.Provider
      value={{
        AddressData: AddressDataList,

        addressListFuncProp: addressList,

        addressCreateFuncProp: addressCreate,

        addressReadFuncProp: addressRead,

        addressUpdateFuncProp: addressUpdate,

        addressPartialFuncProp: addressPartial,

        addressDeleteFuncProp: addressDelete,
      }}
    >
      {children}
    </AddressContext.Provider>
  );
};
