import { operations, definitions } from "../Schemas";
import {
  role_list,
  role_create,
  role_read,
  role_update,
  role_partial_update,
  role_delete,
} from "../api";

import React, { createContext, useState, FC } from "react";

interface Irole {
  RoleData?: definitions["Role"][];

  roleListFuncProp?: (
    data: operations["role_list"]["parameters"]
  ) => Promise<void>;

  roleCreateFuncProp?: (data: definitions["Role"][]) => Promise<void>;

  roleReadFuncProp?: (id: number) => Promise<void>;

  roleUpdateFuncProp?: (
    id: number,
    data: definitions["Role"][]
  ) => Promise<void>;

  rolePartialFuncProp?: (
    id: number,
    data: definitions["Role"][]
  ) => Promise<void>;

  roleDeleteFuncProp?: (id: number) => Promise<void>;
}
interface Icontext {
  children: React.ReactNode;
  headers: any;
}

const defaultState = {};
/* prettier-ignore */
const RoleContext = React.createContext<Irole>(defaultState);
const RoleProvider: React.FC<Icontext> = ({ children, headers }) => {
  /* prettier-ignore */
  const [RoleDataList, setRoleDataList] = React.useState<Array<definitions["Role"]>> ([]);
  const roleList = async (data: operations["role_list"]["parameters"]) => {
    const result = await role_list(data, headers);

    if (result) {
    }
  };

  const roleCreate = async (data: definitions["Role"][]) => {
    const result = await role_create(data, headers);

    if (result) {
    }
  };

  const roleRead = async (id: number) => {
    const result = await role_read(id, headers);

    if (result) {
    }
  };

  const roleUpdate = async (id: number, data: definitions["Role"][]) => {
    const result = await role_update(id, data, headers);

    if (result) {
    }
  };

  const rolePartial = async (id: number, data: definitions["Role"][]) => {
    const result = await role_partial_update(id, data, headers);

    if (result) {
    }
  };

  const roleDelete = async (id: number) => {
    const result = await role_delete(id, headers);

    if (result) {
    }
  };

  return (
    <RoleContext.Provider
      value={{
        RoleData: RoleDataList,

        roleListFuncProp: roleList,

        roleCreateFuncProp: roleCreate,

        roleReadFuncProp: roleRead,

        roleUpdateFuncProp: roleUpdate,

        rolePartialFuncProp: rolePartial,

        roleDeleteFuncProp: roleDelete,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};
