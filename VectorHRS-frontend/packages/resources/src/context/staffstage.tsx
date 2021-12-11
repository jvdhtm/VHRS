import { operations, definitions } from "../Schemas";
import {
  staffstage_list,
  staffstage_create,
  staffstage_read,
  staffstage_update,
  staffstage_partial_update,
  staffstage_delete,
} from "../api";

import React, { createContext, useState, FC } from "react";

interface Istaffstage {
  StaffStageData?: definitions["StaffStage"][];

  staffstageListFuncProp?: (
    data: operations["staffstage_list"]["parameters"]
  ) => Promise<void>;

  staffstageCreateFuncProp?: (
    data: definitions["StaffStage"][]
  ) => Promise<void>;

  staffstageReadFuncProp?: (id: number) => Promise<void>;

  staffstageUpdateFuncProp?: (
    id: number,
    data: definitions["StaffStage"][]
  ) => Promise<void>;

  staffstagePartialFuncProp?: (
    id: number,
    data: definitions["StaffStage"][]
  ) => Promise<void>;

  staffstageDeleteFuncProp?: (id: number) => Promise<void>;
}
interface Icontext {
  children: React.ReactNode;
  headers: any;
}

const defaultState = {};
/* prettier-ignore */
const StaffstageContext = React.createContext<Istaffstage>(defaultState);
const StaffstageProvider: React.FC<Icontext> = ({ children, headers }) => {
  /* prettier-ignore */
  const [StaffStageDataList, setStaffStageDataList] = React.useState<Array<definitions["StaffStage"]>> ([]);
  const staffstageList = async (
    data: operations["staffstage_list"]["parameters"]
  ) => {
    const result = await staffstage_list(data, headers);

    if (result) {
    }
  };

  const staffstageCreate = async (data: definitions["StaffStage"][]) => {
    const result = await staffstage_create(data, headers);

    if (result) {
    }
  };

  const staffstageRead = async (id: number) => {
    const result = await staffstage_read(id, headers);

    if (result) {
    }
  };

  const staffstageUpdate = async (
    id: number,
    data: definitions["StaffStage"][]
  ) => {
    const result = await staffstage_update(id, data, headers);

    if (result) {
    }
  };

  const staffstagePartial = async (
    id: number,
    data: definitions["StaffStage"][]
  ) => {
    const result = await staffstage_partial_update(id, data, headers);

    if (result) {
    }
  };

  const staffstageDelete = async (id: number) => {
    const result = await staffstage_delete(id, headers);

    if (result) {
    }
  };

  return (
    <StaffstageContext.Provider
      value={{
        StaffStageData: StaffStageDataList,

        staffstageListFuncProp: staffstageList,

        staffstageCreateFuncProp: staffstageCreate,

        staffstageReadFuncProp: staffstageRead,

        staffstageUpdateFuncProp: staffstageUpdate,

        staffstagePartialFuncProp: staffstagePartial,

        staffstageDeleteFuncProp: staffstageDelete,
      }}
    >
      {children}
    </StaffstageContext.Provider>
  );
};
