import { operations, definitions } from "../Schemas";
import {
  department_list,
  department_create,
  department_read,
  department_update,
  department_partial_update,
  department_delete,
} from "../api";

import React, { createContext, useState, FC } from "react";

interface Idepartment {
  DepartmentData?: definitions["Department"][];

  departmentListFuncProp?: (
    data: operations["department_list"]["parameters"]
  ) => Promise<void>;

  departmentCreateFuncProp?: (
    data: definitions["Department"][]
  ) => Promise<void>;

  departmentReadFuncProp?: (id: number) => Promise<void>;

  departmentUpdateFuncProp?: (
    id: number,
    data: definitions["Department"][]
  ) => Promise<void>;

  departmentPartialFuncProp?: (
    id: number,
    data: definitions["Department"][]
  ) => Promise<void>;

  departmentDeleteFuncProp?: (id: number) => Promise<void>;
}
interface Icontext {
  children: React.ReactNode;
  headers: any;
}

const defaultState = {};
/* prettier-ignore */
const DepartmentContext = React.createContext<Idepartment>(defaultState);
const DepartmentProvider: React.FC<Icontext> = ({ children, headers }) => {
  /* prettier-ignore */
  const [DepartmentDataList, setDepartmentDataList] = React.useState<Array<definitions["Department"]>> ([]);
  const departmentList = async (
    data: operations["department_list"]["parameters"]
  ) => {
    const result = await department_list(data, headers);

    if (result) {
    }
  };

  const departmentCreate = async (data: definitions["Department"][]) => {
    const result = await department_create(data, headers);

    if (result) {
    }
  };

  const departmentRead = async (id: number) => {
    const result = await department_read(id, headers);

    if (result) {
    }
  };

  const departmentUpdate = async (
    id: number,
    data: definitions["Department"][]
  ) => {
    const result = await department_update(id, data, headers);

    if (result) {
    }
  };

  const departmentPartial = async (
    id: number,
    data: definitions["Department"][]
  ) => {
    const result = await department_partial_update(id, data, headers);

    if (result) {
    }
  };

  const departmentDelete = async (id: number) => {
    const result = await department_delete(id, headers);

    if (result) {
    }
  };

  return (
    <DepartmentContext.Provider
      value={{
        DepartmentData: DepartmentDataList,

        departmentListFuncProp: departmentList,

        departmentCreateFuncProp: departmentCreate,

        departmentReadFuncProp: departmentRead,

        departmentUpdateFuncProp: departmentUpdate,

        departmentPartialFuncProp: departmentPartial,

        departmentDeleteFuncProp: departmentDelete,
      }}
    >
      {children}
    </DepartmentContext.Provider>
  );
};
