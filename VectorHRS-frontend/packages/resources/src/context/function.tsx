import { Api, operations, definitions } from "@vhrs/models";
const {
  function_list,
  function_create,
  function_read,
  function_update,
  function_partial_update,
  function_delete,
} = Api;

import { createContext, useState, FC } from "react";
import { IcontextProvider } from "../types";

interface IAction {
  verb: string;
  results: number | definitions["Function"] | definitions["Function"][];
}

export interface Ifunction {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  functionData?: definitions["Function"][];

  functionListFuncProp: (
    data: operations["function_list"]["parameters"]
  ) => Promise<void>;

  functionCreateFuncProp: (
    data: definitions["Function"] | definitions["Function"][]
  ) => Promise<void>;

  functionReadFuncProp: (id: number) => Promise<void>;

  functionUpdateFuncProp: (
    id: number,
    data: definitions["Function"] | definitions["Function"][]
  ) => Promise<void>;

  functionPartialFuncProp: (
    id: number,
    data: definitions["Function"] | definitions["Function"][]
  ) => Promise<void>;

  functionDeleteFuncProp: (id: number) => Promise<void>;
}

interface Istate {
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];
  results: definitions["Function"][];
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

  functionListFuncProp: async (
    data: operations["function_list"]["parameters"]
  ): Promise<void> => {},

  functionCreateFuncProp: async (
    data: definitions["Function"] | definitions["Function"][]
  ): Promise<void> => {},

  functionReadFuncProp: async (id: number): Promise<void> => {},

  functionUpdateFuncProp: async (
    id: number,
    data: definitions["Function"] | definitions["Function"][]
  ): Promise<void> => {},

  functionPartialFuncProp: async (
    id: number,
    data: definitions["Function"] | definitions["Function"][]
  ): Promise<void> => {},

  functionDeleteFuncProp: async (id: number): Promise<void> => {},
};
/* prettier-ignore */
export const FunctionContext = createContext<Ifunction>(defaultContextState);
export const FunctionProvider: FC<IcontextProvider> = ({
  children,
  headers,
}) => {
  /* prettier-ignore */
  const [FunctionDataList, setFunctionDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const functionList = async (
    data: operations["function_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await function_list(data, headers);
      let prevStateResults = FunctionDataList.results;
      let logActions = FunctionDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = FunctionDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newFunction = prevStateResults.map((el: definitions["Function"]) => {
        const preEl = prevStateResults.filter(
          (resultEl: definitions["Function"]) => {
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
        newFunction = prevStateResults.concat(result.data.results);
      }

      const newFunctionserializedById: definitions["Function"][] = [];
      newFunction.map((el: definitions["Function"]) => {
        if (el.id) {
          newFunctionserializedById[el.id] = el;
        }
      });

      setFunctionDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newFunctionserializedById,
      });

      setLoading(false);
    }
  };

  const functionCreate = async (
    data: definitions["Function"] | definitions["Function"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await function_create(data, headers);
      let prevStateResults = FunctionDataList.results;
      let logActions = FunctionDataList.logActions;

      //Create

      let newCount = FunctionDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setFunctionDataList({
        ...FunctionDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const functionRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await function_read(id.toString(), headers);
      let prevStateResults = FunctionDataList.results;
      let logActions = FunctionDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newFunction = prevStateResults.map((el: definitions["Function"]) => {
        if (el.id === result.data.id) {
          found = true;
          return { ...el, ...result.data };
        } else {
          return el;
        }
      });
      if (!found) {
        newFunction.push(result.data);
      }

      const newFunctionserializedById: definitions["Function"][] = [];
      newFunction.map((el: definitions["Function"]) => {
        if (el.id) {
          newFunctionserializedById[el.id] = el;
        }
      });

      setFunctionDataList({
        ...FunctionDataList,
        results: newFunctionserializedById,
      });

      setLoading(false);
    }
  };

  const functionUpdate = async (
    id: number,
    data: definitions["Function"] | definitions["Function"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await function_update(id.toString(), data, headers);
      let prevStateResults = FunctionDataList.results;
      let logActions = FunctionDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newFunction;
      if (!Array.isArray(result.data))
        newFunction = prevStateResults.map((el: definitions["Function"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newFunction = prevStateResults.map((el: definitions["Function"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      const newFunctionserializedById: definitions["Function"][] = [];
      newFunction.map((el: definitions["Function"]) => {
        if (el.id) {
          newFunctionserializedById[el.id] = el;
        }
      });

      setFunctionDataList({
        ...FunctionDataList,
        results: newFunctionserializedById,
      });

      setLoading(false);
    }
  };

  const functionPartial = async (
    id: number,
    data: definitions["Function"] | definitions["Function"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await function_partial_update(
        id.toString(),
        data,
        headers
      );
      let prevStateResults = FunctionDataList.results;
      let logActions = FunctionDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newFunction;
      if (!Array.isArray(result.data))
        newFunction = prevStateResults.map((el: definitions["Function"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newFunction = prevStateResults.map((el: definitions["Function"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      const newFunctionserializedById: definitions["Function"][] = [];
      newFunction.map((el: definitions["Function"]) => {
        if (el.id) {
          newFunctionserializedById[el.id] = el;
        }
      });

      setFunctionDataList({
        ...FunctionDataList,
        results: newFunctionserializedById,
      });

      setLoading(false);
    }
  };

  const functionDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await function_delete(id.toString(), headers);
      let prevStateResults = FunctionDataList.results;
      let logActions = FunctionDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newFunction = prevStateResults.filter(
        (el: definitions["Function"]) => el.id !== id
      );

      const newFunctionserializedById: definitions["Function"][] = [];
      newFunction.map((el: definitions["Function"]) => {
        if (el.id) {
          newFunctionserializedById[el.id] = el;
        }
      });

      setFunctionDataList({
        ...FunctionDataList,
        results: newFunctionserializedById,
      });

      setLoading(false);
    }
  };

  return (
    <FunctionContext.Provider
      value={{
        count: FunctionDataList.count,
        next: FunctionDataList.next,
        previous: FunctionDataList.previous,
        logActions: FunctionDataList.logActions,
        loading: loading,
        functionData: FunctionDataList.results,

        functionListFuncProp: functionList,

        functionCreateFuncProp: functionCreate,

        functionReadFuncProp: functionRead,

        functionUpdateFuncProp: functionUpdate,

        functionPartialFuncProp: functionPartial,

        functionDeleteFuncProp: functionDelete,
      }}
    >
      {children}
    </FunctionContext.Provider>
  );
};
