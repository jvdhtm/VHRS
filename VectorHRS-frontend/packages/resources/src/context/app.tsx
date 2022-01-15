import { Api, operations, definitions } from "@vhrs/models";
const {
  app_list,
  app_create,
  app_read,
  app_update,
  app_partial_update,
  app_delete,
} = Api;

import { createContext, useState, FC, ReactNode } from "react";

interface IAction {
  verb: string;
  results: number | definitions["App"] | definitions["App"][];
}

interface Iapp {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  appData?: definitions["App"][];

  appListFuncProp?: (
    data: operations["app_list"]["parameters"]
  ) => Promise<void>;

  appCreateFuncProp?: (
    data: definitions["App"] | definitions["App"][]
  ) => Promise<void>;

  appReadFuncProp?: (id: number) => Promise<void>;

  appUpdateFuncProp?: (
    id: number,
    data: definitions["App"] | definitions["App"][]
  ) => Promise<void>;

  appPartialFuncProp?: (
    id: number,
    data: definitions["App"] | definitions["App"][]
  ) => Promise<void>;

  appDeleteFuncProp?: (id: number) => Promise<void>;
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
  results: definitions["App"][];
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
export const AppContext = createContext<Iapp>(defaultContextState);
export const AppProvider: FC<IcontextProvider> = ({ children, headers }) => {
  /* prettier-ignore */
  const [AppDataList, setAppDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const appList = async (
    data: operations["app_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await app_list(data, headers);
      let prevStateResults = AppDataList.results;
      let logActions = AppDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = AppDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newApp = prevStateResults.map((el: definitions["App"]) => {
        const preEl = prevStateResults.filter(
          (resultEl: definitions["App"]) => {
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
        newApp = prevStateResults.concat(result.data.results);
      }

      setAppDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newApp,
      });

      setLoading(false);
    }
  };

  const appCreate = async (
    data: definitions["App"] | definitions["App"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await app_create(data, headers);
      let prevStateResults = AppDataList.results;
      let logActions = AppDataList.logActions;

      //Create

      let newCount = AppDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setAppDataList({
        ...AppDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const appRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await app_read(id.toString(), headers);
      let prevStateResults = AppDataList.results;
      let logActions = AppDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newApp = prevStateResults.map((el: definitions["App"]) => {
        if (el.id === result.data.id) {
          found = true;
          return { ...el, ...result.data };
        } else {
          return el;
        }
      });
      if (!found) {
        newApp = prevStateResults.concat(result.data);
      }

      setAppDataList({
        ...AppDataList,
        results: newApp,
      });

      setLoading(false);
    }
  };

  const appUpdate = async (
    id: number,
    data: definitions["App"] | definitions["App"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await app_update(id.toString(), data, headers);
      let prevStateResults = AppDataList.results;
      let logActions = AppDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newApp;
      if (!Array.isArray(result.data))
        newApp = prevStateResults.map((el: definitions["App"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newApp = prevStateResults.map((el: definitions["App"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setAppDataList({
        ...AppDataList,
        results: newApp,
      });

      setLoading(false);
    }
  };

  const appPartial = async (
    id: number,
    data: definitions["App"] | definitions["App"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await app_partial_update(id.toString(), data, headers);
      let prevStateResults = AppDataList.results;
      let logActions = AppDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newApp;
      if (!Array.isArray(result.data))
        newApp = prevStateResults.map((el: definitions["App"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newApp = prevStateResults.map((el: definitions["App"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setAppDataList({
        ...AppDataList,
        results: newApp,
      });

      setLoading(false);
    }
  };

  const appDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await app_delete(id.toString(), headers);
      let prevStateResults = AppDataList.results;
      let logActions = AppDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newApp = prevStateResults.filter(
        (el: definitions["App"]) => el.id !== id
      );

      setAppDataList({
        ...AppDataList,
        results: newApp,
      });

      setLoading(false);
    }
  };

  return (
    <AppContext.Provider
      value={{
        count: AppDataList.count,
        next: AppDataList.next,
        previous: AppDataList.previous,
        logActions: AppDataList.logActions,
        loading: loading,
        appData: AppDataList.results,

        appListFuncProp: appList,

        appCreateFuncProp: appCreate,

        appReadFuncProp: appRead,

        appUpdateFuncProp: appUpdate,

        appPartialFuncProp: appPartial,

        appDeleteFuncProp: appDelete,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
