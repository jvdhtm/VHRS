import { Api, operations, definitions } from "@vhrs/models";
const {
  personstage_list,
  personstage_create,
  personstage_read,
  personstage_update,
  personstage_partial_update,
  personstage_delete,
} = Api;

import { createContext, useState, FC } from "react";
import { IcontextProvider } from "../types";

interface IAction {
  verb: string;
  results: number | definitions["PersonStage"] | definitions["PersonStage"][];
}

export interface Ipersonstage {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  personstageData?: definitions["PersonStage"][];

  personstageListFuncProp: (
    data: operations["personstage_list"]["parameters"]
  ) => Promise<void>;

  personstageCreateFuncProp: (
    data: definitions["PersonStage"] | definitions["PersonStage"][]
  ) => Promise<void>;

  personstageReadFuncProp: (id: number) => Promise<void>;

  personstageUpdateFuncProp: (
    id: number,
    data: definitions["PersonStage"] | definitions["PersonStage"][]
  ) => Promise<void>;

  personstagePartialFuncProp: (
    id: number,
    data: definitions["PersonStage"] | definitions["PersonStage"][]
  ) => Promise<void>;

  personstageDeleteFuncProp: (id: number) => Promise<void>;
}

interface Istate {
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];
  results: definitions["PersonStage"][];
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

  personstageListFuncProp: async (
    data: operations["personstage_list"]["parameters"]
  ): Promise<void> => {},

  personstageCreateFuncProp: async (
    data: definitions["PersonStage"] | definitions["PersonStage"][]
  ): Promise<void> => {},

  personstageReadFuncProp: async (id: number): Promise<void> => {},

  personstageUpdateFuncProp: async (
    id: number,
    data: definitions["PersonStage"] | definitions["PersonStage"][]
  ): Promise<void> => {},

  personstagePartialFuncProp: async (
    id: number,
    data: definitions["PersonStage"] | definitions["PersonStage"][]
  ): Promise<void> => {},

  personstageDeleteFuncProp: async (id: number): Promise<void> => {},
};
/* prettier-ignore */
export const PersonstageContext = createContext<Ipersonstage>(defaultContextState);
export const PersonstageProvider: FC<IcontextProvider> = ({
  children,
  headers,
}) => {
  /* prettier-ignore */
  const [PersonStageDataList, setPersonStageDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const personstageList = async (
    data: operations["personstage_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await personstage_list(data, headers);
      let prevStateResults = PersonStageDataList.results;
      let logActions = PersonStageDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = PersonStageDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newPersonStage = prevStateResults.map(
        (el: definitions["PersonStage"]) => {
          const preEl = prevStateResults.filter(
            (resultEl: definitions["PersonStage"]) => {
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
        newPersonStage = prevStateResults.concat(result.data.results);
      }

      setPersonStageDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newPersonStage,
      });

      setLoading(false);
    }
  };

  const personstageCreate = async (
    data: definitions["PersonStage"] | definitions["PersonStage"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await personstage_create(data, headers);
      let prevStateResults = PersonStageDataList.results;
      let logActions = PersonStageDataList.logActions;

      //Create

      let newCount = PersonStageDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setPersonStageDataList({
        ...PersonStageDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const personstageRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await personstage_read(id.toString(), headers);
      let prevStateResults = PersonStageDataList.results;
      let logActions = PersonStageDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newPersonStage = prevStateResults.map(
        (el: definitions["PersonStage"]) => {
          if (el.id === result.data.id) {
            found = true;
            return { ...el, ...result.data };
          } else {
            return el;
          }
        }
      );
      if (!found) {
        newPersonStage = prevStateResults.concat(result.data);
      }

      setPersonStageDataList({
        ...PersonStageDataList,
        results: newPersonStage,
      });

      setLoading(false);
    }
  };

  const personstageUpdate = async (
    id: number,
    data: definitions["PersonStage"] | definitions["PersonStage"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await personstage_update(id.toString(), data, headers);
      let prevStateResults = PersonStageDataList.results;
      let logActions = PersonStageDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newPersonStage;
      if (!Array.isArray(result.data))
        newPersonStage = prevStateResults.map(
          (el: definitions["PersonStage"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newPersonStage = prevStateResults.map(
          (el: definitions["PersonStage"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setPersonStageDataList({
        ...PersonStageDataList,
        results: newPersonStage,
      });

      setLoading(false);
    }
  };

  const personstagePartial = async (
    id: number,
    data: definitions["PersonStage"] | definitions["PersonStage"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await personstage_partial_update(
        id.toString(),
        data,
        headers
      );
      let prevStateResults = PersonStageDataList.results;
      let logActions = PersonStageDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newPersonStage;
      if (!Array.isArray(result.data))
        newPersonStage = prevStateResults.map(
          (el: definitions["PersonStage"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newPersonStage = prevStateResults.map(
          (el: definitions["PersonStage"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setPersonStageDataList({
        ...PersonStageDataList,
        results: newPersonStage,
      });

      setLoading(false);
    }
  };

  const personstageDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await personstage_delete(id.toString(), headers);
      let prevStateResults = PersonStageDataList.results;
      let logActions = PersonStageDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newPersonStage = prevStateResults.filter(
        (el: definitions["PersonStage"]) => el.id !== id
      );

      setPersonStageDataList({
        ...PersonStageDataList,
        results: newPersonStage,
      });

      setLoading(false);
    }
  };

  return (
    <PersonstageContext.Provider
      value={{
        count: PersonStageDataList.count,
        next: PersonStageDataList.next,
        previous: PersonStageDataList.previous,
        logActions: PersonStageDataList.logActions,
        loading: loading,
        personstageData: PersonStageDataList.results,

        personstageListFuncProp: personstageList,

        personstageCreateFuncProp: personstageCreate,

        personstageReadFuncProp: personstageRead,

        personstageUpdateFuncProp: personstageUpdate,

        personstagePartialFuncProp: personstagePartial,

        personstageDeleteFuncProp: personstageDelete,
      }}
    >
      {children}
    </PersonstageContext.Provider>
  );
};
