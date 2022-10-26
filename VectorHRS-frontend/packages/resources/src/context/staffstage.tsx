import { Api, operations, definitions } from "@vhrs/models";
const {
  staffstage_list,
  staffstage_create,
  staffstage_read,
  staffstage_update,
  staffstage_partial_update,
  staffstage_delete,
} = Api;

import { createContext, useState, FC } from "react";
import { IcontextProvider } from "../types";

interface IAction {
  verb: string;
  results: number | definitions["StaffStage"] | definitions["StaffStage"][];
}

export interface Istaffstage {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  staffstageData?: definitions["StaffStage"][];

  staffstageListFuncProp: (
    data: operations["staffstage_list"]["parameters"]
  ) => Promise<void>;

  staffstageCreateFuncProp: (
    data: definitions["StaffStage"] | definitions["StaffStage"][]
  ) => Promise<void>;

  staffstageReadFuncProp: (id: number) => Promise<void>;

  staffstageUpdateFuncProp: (
    id: number,
    data: definitions["StaffStage"] | definitions["StaffStage"][]
  ) => Promise<void>;

  staffstagePartialFuncProp: (
    id: number,
    data: definitions["StaffStage"] | definitions["StaffStage"][]
  ) => Promise<void>;

  staffstageDeleteFuncProp: (id: number) => Promise<void>;
}

interface Istate {
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];
  results: definitions["StaffStage"][];
}

const initialState: Istate = {
  count: 0,
  logActions: [],
  results: [],
};

const defaultContextState = {
  count: 0,
  loading: false,
  logActions: [],

  staffstageListFuncProp: async (
    data: operations["staffstage_list"]["parameters"]
  ): Promise<void> => {},

  staffstageCreateFuncProp: async (
    data: definitions["StaffStage"] | definitions["StaffStage"][]
  ): Promise<void> => {},

  staffstageReadFuncProp: async (id: number): Promise<void> => {},

  staffstageUpdateFuncProp: async (
    id: number,
    data: definitions["StaffStage"] | definitions["StaffStage"][]
  ): Promise<void> => {},

  staffstagePartialFuncProp: async (
    id: number,
    data: definitions["StaffStage"] | definitions["StaffStage"][]
  ): Promise<void> => {},

  staffstageDeleteFuncProp: async (id: number): Promise<void> => {},
};
/* prettier-ignore */
export const StaffstageContext = createContext<Istaffstage>(defaultContextState);
export const StaffstageProvider: FC<IcontextProvider> = ({
  children,
  headers,
}) => {
  /* prettier-ignore */
  const [StaffStageDataList, setStaffStageDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const staffstageList = async (
    data: operations["staffstage_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await staffstage_list(data, headers);
      let prevStateResults = StaffStageDataList.results;
      let logActions = StaffStageDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = StaffStageDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newStaffStage = prevStateResults.map(
        (el: definitions["StaffStage"]) => {
          const preEl = prevStateResults.filter(
            (resultEl: definitions["StaffStage"]) => {
              return el.id === resultEl.id;
            }
          );

          if (preEl.length > 0) {
            found = true;
            return { ...el, ...preEl[0] };
          } else {
            return el;
          }
        }
      );

      if (!found) {
        newStaffStage = prevStateResults.concat(result.data.results);
      }

      const newStaffStageserializedById: definitions["StaffStage"][] = [];
      newStaffStage.map((el: definitions["StaffStage"]) => {
        if (el.id) {
          newStaffStageserializedById[el.id] = el;
        }
      });

      setStaffStageDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newStaffStageserializedById,
      });

      setLoading(false);
    }
  };

  const staffstageCreate = async (
    data: definitions["StaffStage"] | definitions["StaffStage"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await staffstage_create(data, headers);
      let prevStateResults = StaffStageDataList.results;
      let logActions = StaffStageDataList.logActions;

      //Create

      let newCount = StaffStageDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setStaffStageDataList({
        ...StaffStageDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const staffstageRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await staffstage_read(id.toString(), headers);
      let prevStateResults = StaffStageDataList.results;
      let logActions = StaffStageDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newStaffStage = prevStateResults.map(
        (el: definitions["StaffStage"]) => {
          if (el.id === result.data.id) {
            found = true;
            return { ...el, ...result.data };
          } else {
            return el;
          }
        }
      );
      if (!found) {
        newStaffStage.push(result.data);
      }

      const newStaffStageserializedById: definitions["StaffStage"][] = [];
      newStaffStage.map((el: definitions["StaffStage"]) => {
        if (el.id) {
          newStaffStageserializedById[el.id] = el;
        }
      });

      setStaffStageDataList({
        ...StaffStageDataList,
        results: newStaffStageserializedById,
      });

      setLoading(false);
    }
  };

  const staffstageUpdate = async (
    id: number,
    data: definitions["StaffStage"] | definitions["StaffStage"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await staffstage_update(id.toString(), data, headers);
      let prevStateResults = StaffStageDataList.results;
      let logActions = StaffStageDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newStaffStage;
      if (!Array.isArray(result.data))
        newStaffStage = prevStateResults.map((el: definitions["StaffStage"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newStaffStage = prevStateResults.map((el: definitions["StaffStage"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      const newStaffStageserializedById: definitions["StaffStage"][] = [];
      newStaffStage.map((el: definitions["StaffStage"]) => {
        if (el.id) {
          newStaffStageserializedById[el.id] = el;
        }
      });

      setStaffStageDataList({
        ...StaffStageDataList,
        results: newStaffStageserializedById,
      });

      setLoading(false);
    }
  };

  const staffstagePartial = async (
    id: number,
    data: definitions["StaffStage"] | definitions["StaffStage"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await staffstage_partial_update(
        id.toString(),
        data,
        headers
      );
      let prevStateResults = StaffStageDataList.results;
      let logActions = StaffStageDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newStaffStage;
      if (!Array.isArray(result.data))
        newStaffStage = prevStateResults.map((el: definitions["StaffStage"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newStaffStage = prevStateResults.map((el: definitions["StaffStage"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      const newStaffStageserializedById: definitions["StaffStage"][] = [];
      newStaffStage.map((el: definitions["StaffStage"]) => {
        if (el.id) {
          newStaffStageserializedById[el.id] = el;
        }
      });

      setStaffStageDataList({
        ...StaffStageDataList,
        results: newStaffStageserializedById,
      });

      setLoading(false);
    }
  };

  const staffstageDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await staffstage_delete(id.toString(), headers);
      let prevStateResults = StaffStageDataList.results;
      let logActions = StaffStageDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newStaffStage = prevStateResults.filter(
        (el: definitions["StaffStage"]) => el.id !== id
      );

      const newStaffStageserializedById: definitions["StaffStage"][] = [];
      newStaffStage.map((el: definitions["StaffStage"]) => {
        if (el.id) {
          newStaffStageserializedById[el.id] = el;
        }
      });

      setStaffStageDataList({
        ...StaffStageDataList,
        results: newStaffStageserializedById,
      });

      setLoading(false);
    }
  };

  return (
    <StaffstageContext.Provider
      value={{
        count: StaffStageDataList.count,
        next: StaffStageDataList.next,
        previous: StaffStageDataList.previous,
        logActions: StaffStageDataList.logActions,
        loading: loading,
        staffstageData: StaffStageDataList.results,

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
