import { operations, definitions } from "../Schemas";
import {
  stafffunctions_list,
  stafffunctions_create,
  stafffunctions_read,
  stafffunctions_update,
  stafffunctions_partial_update,
  stafffunctions_delete,
} from "../api";

import { createContext, useState, FC, ReactNode } from "react";

interface IAction {
  verb: string;
  results:
    | number
    | definitions["StaffFunctions"]
    | definitions["StaffFunctions"][];
}

interface Istafffunctions {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  stafffunctionsData?: definitions["StaffFunctions"][];

  stafffunctionsListFuncProp?: (
    data: operations["stafffunctions_list"]["parameters"]
  ) => Promise<void>;

  stafffunctionsCreateFuncProp?: (
    data: definitions["StaffFunctions"] | definitions["StaffFunctions"][]
  ) => Promise<void>;

  stafffunctionsReadFuncProp?: (id: number) => Promise<void>;

  stafffunctionsUpdateFuncProp?: (
    id: number,
    data: definitions["StaffFunctions"] | definitions["StaffFunctions"][]
  ) => Promise<void>;

  stafffunctionsPartialFuncProp?: (
    id: number,
    data: definitions["StaffFunctions"] | definitions["StaffFunctions"][]
  ) => Promise<void>;

  stafffunctionsDeleteFuncProp?: (id: number) => Promise<void>;
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
  results: definitions["StaffFunctions"][];
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
const StafffunctionsContext = createContext<Istafffunctions>(defaultContextState);
export const StafffunctionsProvider: FC<IcontextProvider> = ({
  children,
  headers,
}) => {
  /* prettier-ignore */
  const [StaffFunctionsDataList, setStaffFunctionsDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const stafffunctionsList = async (
    data: operations["stafffunctions_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await stafffunctions_list(data, headers);
      let prevStateResults = StaffFunctionsDataList.results;
      let logActions = StaffFunctionsDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = StaffFunctionsDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newStaffFunctions = prevStateResults.map(
        (el: definitions["StaffFunctions"]) => {
          const preEl = prevStateResults.filter(
            (resultEl: definitions["StaffFunctions"]) => {
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
        newStaffFunctions = prevStateResults.concat(result.data.results);
      }

      setStaffFunctionsDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newStaffFunctions,
      });

      setLoading(false);
    }
  };

  const stafffunctionsCreate = async (
    data: definitions["StaffFunctions"] | definitions["StaffFunctions"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await stafffunctions_create(data, headers);
      let prevStateResults = StaffFunctionsDataList.results;
      let logActions = StaffFunctionsDataList.logActions;

      //Create

      let newCount = StaffFunctionsDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setStaffFunctionsDataList({
        ...StaffFunctionsDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const stafffunctionsRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await stafffunctions_read(id.toString(), headers);
      let prevStateResults = StaffFunctionsDataList.results;
      let logActions = StaffFunctionsDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newStaffFunctions = prevStateResults.map(
        (el: definitions["StaffFunctions"]) => {
          if (el.id === result.data.id) {
            found = true;
            return { ...el, ...result.data };
          } else {
            return el;
          }
        }
      );
      if (!found) {
        newStaffFunctions = prevStateResults.concat(result.data);
      }

      setStaffFunctionsDataList({
        ...StaffFunctionsDataList,
        results: newStaffFunctions,
      });

      setLoading(false);
    }
  };

  const stafffunctionsUpdate = async (
    id: number,
    data: definitions["StaffFunctions"] | definitions["StaffFunctions"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await stafffunctions_update(id.toString(), data, headers);
      let prevStateResults = StaffFunctionsDataList.results;
      let logActions = StaffFunctionsDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newStaffFunctions;
      if (!Array.isArray(result.data))
        newStaffFunctions = prevStateResults.map(
          (el: definitions["StaffFunctions"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newStaffFunctions = prevStateResults.map(
          (el: definitions["StaffFunctions"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setStaffFunctionsDataList({
        ...StaffFunctionsDataList,
        results: newStaffFunctions,
      });

      setLoading(false);
    }
  };

  const stafffunctionsPartial = async (
    id: number,
    data: definitions["StaffFunctions"] | definitions["StaffFunctions"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await stafffunctions_partial_update(
        id.toString(),
        data,
        headers
      );
      let prevStateResults = StaffFunctionsDataList.results;
      let logActions = StaffFunctionsDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newStaffFunctions;
      if (!Array.isArray(result.data))
        newStaffFunctions = prevStateResults.map(
          (el: definitions["StaffFunctions"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newStaffFunctions = prevStateResults.map(
          (el: definitions["StaffFunctions"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setStaffFunctionsDataList({
        ...StaffFunctionsDataList,
        results: newStaffFunctions,
      });

      setLoading(false);
    }
  };

  const stafffunctionsDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await stafffunctions_delete(id.toString(), headers);
      let prevStateResults = StaffFunctionsDataList.results;
      let logActions = StaffFunctionsDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newStaffFunctions = prevStateResults.filter(
        (el: definitions["StaffFunctions"]) => el.id !== id
      );

      setStaffFunctionsDataList({
        ...StaffFunctionsDataList,
        results: newStaffFunctions,
      });

      setLoading(false);
    }
  };

  return (
    <StafffunctionsContext.Provider
      value={{
        count: StaffFunctionsDataList.count,
        next: StaffFunctionsDataList.next,
        previous: StaffFunctionsDataList.previous,
        logActions: StaffFunctionsDataList.logActions,
        loading: loading,
        stafffunctionsData: StaffFunctionsDataList.results,

        stafffunctionsListFuncProp: stafffunctionsList,

        stafffunctionsCreateFuncProp: stafffunctionsCreate,

        stafffunctionsReadFuncProp: stafffunctionsRead,

        stafffunctionsUpdateFuncProp: stafffunctionsUpdate,

        stafffunctionsPartialFuncProp: stafffunctionsPartial,

        stafffunctionsDeleteFuncProp: stafffunctionsDelete,
      }}
    >
      {children}
    </StafffunctionsContext.Provider>
  );
};
