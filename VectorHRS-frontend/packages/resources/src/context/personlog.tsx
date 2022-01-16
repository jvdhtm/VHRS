import { Api, operations, definitions } from "@vhrs/models";
const {
  personlog_list,
  personlog_create,
  personlog_read,
  personlog_update,
  personlog_partial_update,
  personlog_delete,
} = Api;

import { createContext, useState, FC, ReactNode } from "react";

interface IAction {
  verb: string;
  results: number | definitions["PersonLog"] | definitions["PersonLog"][];
}

interface Ipersonlog {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  personlogData?: definitions["PersonLog"][];

  personlogListFuncProp: (
    data: operations["personlog_list"]["parameters"]
  ) => Promise<void>;

  personlogCreateFuncProp: (
    data: definitions["PersonLog"] | definitions["PersonLog"][]
  ) => Promise<void>;

  personlogReadFuncProp: (id: number) => Promise<void>;

  personlogUpdateFuncProp: (
    id: number,
    data: definitions["PersonLog"] | definitions["PersonLog"][]
  ) => Promise<void>;

  personlogPartialFuncProp: (
    id: number,
    data: definitions["PersonLog"] | definitions["PersonLog"][]
  ) => Promise<void>;

  personlogDeleteFuncProp: (id: number) => Promise<void>;
}
interface IcontextProvider {
  children: ReactNode;
  headers: any;
}

interface Istate {
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];
  results: definitions["PersonLog"][];
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

  personlogListFuncProp: async (
    data: operations["personlog_list"]["parameters"]
  ): Promise<void> => {},

  personlogCreateFuncProp: async (
    data: definitions["PersonLog"] | definitions["PersonLog"][]
  ): Promise<void> => {},

  personlogReadFuncProp: async (id: number): Promise<void> => {},

  personlogUpdateFuncProp: async (
    id: number,
    data: definitions["PersonLog"] | definitions["PersonLog"][]
  ): Promise<void> => {},

  personlogPartialFuncProp: async (
    id: number,
    data: definitions["PersonLog"] | definitions["PersonLog"][]
  ): Promise<void> => {},

  personlogDeleteFuncProp: async (id: number): Promise<void> => {},
};
/* prettier-ignore */
export const PersonlogContext = createContext<Ipersonlog>(defaultContextState);
export const PersonlogProvider: FC<IcontextProvider> = ({
  children,
  headers,
}) => {
  /* prettier-ignore */
  const [PersonLogDataList, setPersonLogDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const personlogList = async (
    data: operations["personlog_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await personlog_list(data, headers);
      let prevStateResults = PersonLogDataList.results;
      let logActions = PersonLogDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = PersonLogDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newPersonLog = prevStateResults.map(
        (el: definitions["PersonLog"]) => {
          const preEl = prevStateResults.filter(
            (resultEl: definitions["PersonLog"]) => {
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
        newPersonLog = prevStateResults.concat(result.data.results);
      }

      setPersonLogDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newPersonLog,
      });

      setLoading(false);
    }
  };

  const personlogCreate = async (
    data: definitions["PersonLog"] | definitions["PersonLog"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await personlog_create(data, headers);
      let prevStateResults = PersonLogDataList.results;
      let logActions = PersonLogDataList.logActions;

      //Create

      let newCount = PersonLogDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setPersonLogDataList({
        ...PersonLogDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const personlogRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await personlog_read(id.toString(), headers);
      let prevStateResults = PersonLogDataList.results;
      let logActions = PersonLogDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newPersonLog = prevStateResults.map(
        (el: definitions["PersonLog"]) => {
          if (el.id === result.data.id) {
            found = true;
            return { ...el, ...result.data };
          } else {
            return el;
          }
        }
      );
      if (!found) {
        newPersonLog = prevStateResults.concat(result.data);
      }

      setPersonLogDataList({
        ...PersonLogDataList,
        results: newPersonLog,
      });

      setLoading(false);
    }
  };

  const personlogUpdate = async (
    id: number,
    data: definitions["PersonLog"] | definitions["PersonLog"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await personlog_update(id.toString(), data, headers);
      let prevStateResults = PersonLogDataList.results;
      let logActions = PersonLogDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newPersonLog;
      if (!Array.isArray(result.data))
        newPersonLog = prevStateResults.map((el: definitions["PersonLog"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newPersonLog = prevStateResults.map((el: definitions["PersonLog"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setPersonLogDataList({
        ...PersonLogDataList,
        results: newPersonLog,
      });

      setLoading(false);
    }
  };

  const personlogPartial = async (
    id: number,
    data: definitions["PersonLog"] | definitions["PersonLog"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await personlog_partial_update(
        id.toString(),
        data,
        headers
      );
      let prevStateResults = PersonLogDataList.results;
      let logActions = PersonLogDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newPersonLog;
      if (!Array.isArray(result.data))
        newPersonLog = prevStateResults.map((el: definitions["PersonLog"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newPersonLog = prevStateResults.map((el: definitions["PersonLog"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setPersonLogDataList({
        ...PersonLogDataList,
        results: newPersonLog,
      });

      setLoading(false);
    }
  };

  const personlogDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await personlog_delete(id.toString(), headers);
      let prevStateResults = PersonLogDataList.results;
      let logActions = PersonLogDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newPersonLog = prevStateResults.filter(
        (el: definitions["PersonLog"]) => el.id !== id
      );

      setPersonLogDataList({
        ...PersonLogDataList,
        results: newPersonLog,
      });

      setLoading(false);
    }
  };

  return (
    <PersonlogContext.Provider
      value={{
        count: PersonLogDataList.count,
        next: PersonLogDataList.next,
        previous: PersonLogDataList.previous,
        logActions: PersonLogDataList.logActions,
        loading: loading,
        personlogData: PersonLogDataList.results,

        personlogListFuncProp: personlogList,

        personlogCreateFuncProp: personlogCreate,

        personlogReadFuncProp: personlogRead,

        personlogUpdateFuncProp: personlogUpdate,

        personlogPartialFuncProp: personlogPartial,

        personlogDeleteFuncProp: personlogDelete,
      }}
    >
      {children}
    </PersonlogContext.Provider>
  );
};
