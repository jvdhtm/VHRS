import { operations, definitions } from "../Schemas";
import {
  expertiseprofile_list,
  expertiseprofile_create,
  expertiseprofile_read,
  expertiseprofile_update,
  expertiseprofile_partial_update,
  expertiseprofile_delete,
} from "../api";

import React, { createContext, useState, FC } from "react";

interface Iexpertiseprofile {
  ExpertiseProfileData?: definitions["ExpertiseProfile"][];

  expertiseprofileListFuncProp?: (
    data: operations["expertiseprofile_list"]["parameters"]
  ) => Promise<void>;

  expertiseprofileCreateFuncProp?: (
    data: definitions["ExpertiseProfile"][]
  ) => Promise<void>;

  expertiseprofileReadFuncProp?: (id: number) => Promise<void>;

  expertiseprofileUpdateFuncProp?: (
    id: number,
    data: definitions["ExpertiseProfile"][]
  ) => Promise<void>;

  expertiseprofilePartialFuncProp?: (
    id: number,
    data: definitions["ExpertiseProfile"][]
  ) => Promise<void>;

  expertiseprofileDeleteFuncProp?: (id: number) => Promise<void>;
}
interface Icontext {
  children: React.ReactNode;
  headers: any;
}

const defaultState = {};
/* prettier-ignore */
const ExpertiseprofileContext = React.createContext<Iexpertiseprofile>(defaultState);
const ExpertiseprofileProvider: React.FC<Icontext> = ({
  children,
  headers,
}) => {
  /* prettier-ignore */
  const [ExpertiseProfileDataList, setExpertiseProfileDataList] = React.useState<Array<definitions["ExpertiseProfile"]>> ([]);
  const expertiseprofileList = async (
    data: operations["expertiseprofile_list"]["parameters"]
  ) => {
    const result = await expertiseprofile_list(data, headers);

    if (result) {
    }
  };

  const expertiseprofileCreate = async (
    data: definitions["ExpertiseProfile"][]
  ) => {
    const result = await expertiseprofile_create(data, headers);

    if (result) {
    }
  };

  const expertiseprofileRead = async (id: number) => {
    const result = await expertiseprofile_read(id, headers);

    if (result) {
    }
  };

  const expertiseprofileUpdate = async (
    id: number,
    data: definitions["ExpertiseProfile"][]
  ) => {
    const result = await expertiseprofile_update(id, data, headers);

    if (result) {
    }
  };

  const expertiseprofilePartial = async (
    id: number,
    data: definitions["ExpertiseProfile"][]
  ) => {
    const result = await expertiseprofile_partial_update(id, data, headers);

    if (result) {
    }
  };

  const expertiseprofileDelete = async (id: number) => {
    const result = await expertiseprofile_delete(id, headers);

    if (result) {
    }
  };

  return (
    <ExpertiseprofileContext.Provider
      value={{
        ExpertiseProfileData: ExpertiseProfileDataList,

        expertiseprofileListFuncProp: expertiseprofileList,

        expertiseprofileCreateFuncProp: expertiseprofileCreate,

        expertiseprofileReadFuncProp: expertiseprofileRead,

        expertiseprofileUpdateFuncProp: expertiseprofileUpdate,

        expertiseprofilePartialFuncProp: expertiseprofilePartial,

        expertiseprofileDeleteFuncProp: expertiseprofileDelete,
      }}
    >
      {children}
    </ExpertiseprofileContext.Provider>
  );
};
