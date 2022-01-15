import { Api, operations, definitions } from "@vhrs/models";
const {
  stafflog_list,
  stafflog_create,
  stafflog_read,
  stafflog_update,
  stafflog_partial_update,
  stafflog_delete,
} = Api;

import { createContext, useState, FC, ReactNode } from "react";

interface IAction {
  verb: string;
  results: number | definitions["StaffLog"] | definitions["StaffLog"][];
}

interface Istafflog {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  stafflogData?: definitions["StaffLog"][];

  stafflogListFuncProp?: (
    data: operations["stafflog_list"]["parameters"]
  ) => Promise<void>;

  stafflogCreateFuncProp?: (
    data: definitions["StaffLog"] | definitions["StaffLog"][]
  ) => Promise<void>;

  stafflogReadFuncProp?: (id: number) => Promise<void>;

  stafflogUpdateFuncProp?: (
    id: number,
    data: definitions["StaffLog"] | definitions["StaffLog"][]
  ) => Promise<void>;

  stafflogPartialFuncProp?: (
    id: number,
    data: definitions["StaffLog"] | definitions["StaffLog"][]
  ) => Promise<void>;

  stafflogDeleteFuncProp?: (id: number) => Promise<void>;
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
  results: definitions["StaffLog"][];
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
};
/* prettier-ignore */
export const StafflogContext = createContext<Istafflog>(defaultContextState);
export const StafflogProvider: FC<IcontextProvider> = ({
  children,
  headers,
}) => {
  /* prettier-ignore */
  const [StaffLogDataList, setStaffLogDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const stafflogList = async (
    data: operations["stafflog_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await stafflog_list(data, headers);
      let prevStateResults = StaffLogDataList.results;
      let logActions = StaffLogDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = StaffLogDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newStaffLog = prevStateResults.map((el: definitions["StaffLog"]) => {
        const preEl = prevStateResults.filter(
          (resultEl: definitions["StaffLog"]) => {
            return el.id === resultEl.id;
          }
        );

        if (preEl.length > 0) {
          found = true;
          return { ...el, ...preEl[0] };
        } else {
          return el;
        }
      });

      if (!found) {
        newStaffLog = prevStateResults.concat(result.data.results);
      }

      setStaffLogDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newStaffLog,
      });

      setLoading(false);
    }
  };

  const stafflogCreate = async (
    data: definitions["StaffLog"] | definitions["StaffLog"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await stafflog_create(data, headers);
      let prevStateResults = StaffLogDataList.results;
      let logActions = StaffLogDataList.logActions;

      //Create

      let newCount = StaffLogDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setStaffLogDataList({
        ...StaffLogDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const stafflogRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await stafflog_read(id.toString(), headers);
      let prevStateResults = StaffLogDataList.results;
      let logActions = StaffLogDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newStaffLog = prevStateResults.map((el: definitions["StaffLog"]) => {
        if (el.id === result.data.id) {
          found = true;
          return { ...el, ...result.data };
        } else {
          return el;
        }
      });
      if (!found) {
        newStaffLog = prevStateResults.concat(result.data);
      }

      setStaffLogDataList({
        ...StaffLogDataList,
        results: newStaffLog,
      });

      setLoading(false);
    }
  };

  const stafflogUpdate = async (
    id: number,
    data: definitions["StaffLog"] | definitions["StaffLog"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await stafflog_update(id.toString(), data, headers);
      let prevStateResults = StaffLogDataList.results;
      let logActions = StaffLogDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newStaffLog;
      if (!Array.isArray(result.data))
        newStaffLog = prevStateResults.map((el: definitions["StaffLog"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newStaffLog = prevStateResults.map((el: definitions["StaffLog"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setStaffLogDataList({
        ...StaffLogDataList,
        results: newStaffLog,
      });

      setLoading(false);
    }
  };

  const stafflogPartial = async (
    id: number,
    data: definitions["StaffLog"] | definitions["StaffLog"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await stafflog_partial_update(
        id.toString(),
        data,
        headers
      );
      let prevStateResults = StaffLogDataList.results;
      let logActions = StaffLogDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newStaffLog;
      if (!Array.isArray(result.data))
        newStaffLog = prevStateResults.map((el: definitions["StaffLog"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newStaffLog = prevStateResults.map((el: definitions["StaffLog"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setStaffLogDataList({
        ...StaffLogDataList,
        results: newStaffLog,
      });

      setLoading(false);
    }
  };

  const stafflogDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await stafflog_delete(id.toString(), headers);
      let prevStateResults = StaffLogDataList.results;
      let logActions = StaffLogDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newStaffLog = prevStateResults.filter(
        (el: definitions["StaffLog"]) => el.id !== id
      );

      setStaffLogDataList({
        ...StaffLogDataList,
        results: newStaffLog,
      });

      setLoading(false);
    }
  };

  return (
    <StafflogContext.Provider
      value={{
        count: StaffLogDataList.count,
        next: StaffLogDataList.next,
        previous: StaffLogDataList.previous,
        logActions: StaffLogDataList.logActions,
        loading: loading,
        stafflogData: StaffLogDataList.results,

        stafflogListFuncProp: stafflogList,

        stafflogCreateFuncProp: stafflogCreate,

        stafflogReadFuncProp: stafflogRead,

        stafflogUpdateFuncProp: stafflogUpdate,

        stafflogPartialFuncProp: stafflogPartial,

        stafflogDeleteFuncProp: stafflogDelete,
      }}
    >
      {children}
    </StafflogContext.Provider>
  );
};
