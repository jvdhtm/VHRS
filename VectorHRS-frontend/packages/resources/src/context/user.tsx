import { operations, definitions } from "../Schemas";
import {
  user_list,
  user_create,
  user_read,
  user_update,
  user_partial_update,
  user_delete,
} from "../api";

import React, { createContext, useState, FC } from "react";

interface Iuser {
  UserData?: definitions["User"][];

  userListFuncProp?: (
    data: operations["user_list"]["parameters"]
  ) => Promise<void>;

  userCreateFuncProp?: (data: definitions["User"][]) => Promise<void>;

  userReadFuncProp?: (id: number) => Promise<void>;

  userUpdateFuncProp?: (
    id: number,
    data: definitions["User"][]
  ) => Promise<void>;

  userPartialFuncProp?: (
    id: number,
    data: definitions["User"][]
  ) => Promise<void>;

  userDeleteFuncProp?: (id: number) => Promise<void>;
}
interface Icontext {
  children: React.ReactNode;
  headers: any;
}

const defaultState = {};
/* prettier-ignore */
const UserContext = React.createContext<Iuser>(defaultState);
const UserProvider: React.FC<Icontext> = ({ children, headers }) => {
  /* prettier-ignore */
  const [UserDataList, setUserDataList] = React.useState<Array<definitions["User"]>> ([]);
  const userList = async (data: operations["user_list"]["parameters"]) => {
    const result = await user_list(data, headers);

    if (result) {
    }
  };

  const userCreate = async (data: definitions["User"][]) => {
    const result = await user_create(data, headers);

    if (result) {
    }
  };

  const userRead = async (id: number) => {
    const result = await user_read(id, headers);

    if (result) {
    }
  };

  const userUpdate = async (id: number, data: definitions["User"][]) => {
    const result = await user_update(id, data, headers);

    if (result) {
    }
  };

  const userPartial = async (id: number, data: definitions["User"][]) => {
    const result = await user_partial_update(id, data, headers);

    if (result) {
    }
  };

  const userDelete = async (id: number) => {
    const result = await user_delete(id, headers);

    if (result) {
    }
  };

  return (
    <UserContext.Provider
      value={{
        UserData: UserDataList,

        userListFuncProp: userList,

        userCreateFuncProp: userCreate,

        userReadFuncProp: userRead,

        userUpdateFuncProp: userUpdate,

        userPartialFuncProp: userPartial,

        userDeleteFuncProp: userDelete,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
