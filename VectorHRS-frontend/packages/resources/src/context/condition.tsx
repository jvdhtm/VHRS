import { Api, operations, definitions } from "@vhrs/models";
const {
  condition_list,
  condition_create,
  condition_read,
  condition_update,
  condition_partial_update,
  condition_delete,
} = Api;

import { createContext, useState, FC, ReactNode } from "react";

interface IAction {
  verb: string;
  results: number | definitions["Condition"] | definitions["Condition"][];
}

interface Icondition {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  conditionData?: definitions["Condition"][];

  conditionListFuncProp: (
    data: operations["condition_list"]["parameters"]
  ) => Promise<void>;

  conditionCreateFuncProp: (
    data: definitions["Condition"] | definitions["Condition"][]
  ) => Promise<void>;

  conditionReadFuncProp: (id: number) => Promise<void>;

  conditionUpdateFuncProp: (
    id: number,
    data: definitions["Condition"] | definitions["Condition"][]
  ) => Promise<void>;

  conditionPartialFuncProp: (
    id: number,
    data: definitions["Condition"] | definitions["Condition"][]
  ) => Promise<void>;

  conditionDeleteFuncProp: (id: number) => Promise<void>;
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
  results: definitions["Condition"][];
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

  conditionListFuncProp: async (
    data: operations["condition_list"]["parameters"]
  ): Promise<void> => {},

  conditionCreateFuncProp: async (
    data: definitions["Condition"] | definitions["Condition"][]
  ): Promise<void> => {},

  conditionReadFuncProp: async (id: number): Promise<void> => {},

  conditionUpdateFuncProp: async (
    id: number,
    data: definitions["Condition"] | definitions["Condition"][]
  ): Promise<void> => {},

  conditionPartialFuncProp: async (
    id: number,
    data: definitions["Condition"] | definitions["Condition"][]
  ): Promise<void> => {},

  conditionDeleteFuncProp: async (id: number): Promise<void> => {},
};
/* prettier-ignore */
export const ConditionContext = createContext<Icondition>(defaultContextState);
export const ConditionProvider: FC<IcontextProvider> = ({
  children,
  headers,
}) => {
  /* prettier-ignore */
  const [ConditionDataList, setConditionDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const conditionList = async (
    data: operations["condition_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await condition_list(data, headers);
      let prevStateResults = ConditionDataList.results;
      let logActions = ConditionDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = ConditionDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newCondition = prevStateResults.map(
        (el: definitions["Condition"]) => {
          const preEl = prevStateResults.filter(
            (resultEl: definitions["Condition"]) => {
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
        newCondition = prevStateResults.concat(result.data.results);
      }

      setConditionDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newCondition,
      });

      setLoading(false);
    }
  };

  const conditionCreate = async (
    data: definitions["Condition"] | definitions["Condition"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await condition_create(data, headers);
      let prevStateResults = ConditionDataList.results;
      let logActions = ConditionDataList.logActions;

      //Create

      let newCount = ConditionDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setConditionDataList({
        ...ConditionDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const conditionRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await condition_read(id.toString(), headers);
      let prevStateResults = ConditionDataList.results;
      let logActions = ConditionDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newCondition = prevStateResults.map(
        (el: definitions["Condition"]) => {
          if (el.id === result.data.id) {
            found = true;
            return { ...el, ...result.data };
          } else {
            return el;
          }
        }
      );
      if (!found) {
        newCondition = prevStateResults.concat(result.data);
      }

      setConditionDataList({
        ...ConditionDataList,
        results: newCondition,
      });

      setLoading(false);
    }
  };

  const conditionUpdate = async (
    id: number,
    data: definitions["Condition"] | definitions["Condition"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await condition_update(id.toString(), data, headers);
      let prevStateResults = ConditionDataList.results;
      let logActions = ConditionDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newCondition;
      if (!Array.isArray(result.data))
        newCondition = prevStateResults.map((el: definitions["Condition"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newCondition = prevStateResults.map((el: definitions["Condition"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setConditionDataList({
        ...ConditionDataList,
        results: newCondition,
      });

      setLoading(false);
    }
  };

  const conditionPartial = async (
    id: number,
    data: definitions["Condition"] | definitions["Condition"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await condition_partial_update(
        id.toString(),
        data,
        headers
      );
      let prevStateResults = ConditionDataList.results;
      let logActions = ConditionDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newCondition;
      if (!Array.isArray(result.data))
        newCondition = prevStateResults.map((el: definitions["Condition"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newCondition = prevStateResults.map((el: definitions["Condition"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setConditionDataList({
        ...ConditionDataList,
        results: newCondition,
      });

      setLoading(false);
    }
  };

  const conditionDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await condition_delete(id.toString(), headers);
      let prevStateResults = ConditionDataList.results;
      let logActions = ConditionDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newCondition = prevStateResults.filter(
        (el: definitions["Condition"]) => el.id !== id
      );

      setConditionDataList({
        ...ConditionDataList,
        results: newCondition,
      });

      setLoading(false);
    }
  };

  return (
    <ConditionContext.Provider
      value={{
        count: ConditionDataList.count,
        next: ConditionDataList.next,
        previous: ConditionDataList.previous,
        logActions: ConditionDataList.logActions,
        loading: loading,
        conditionData: ConditionDataList.results,

        conditionListFuncProp: conditionList,

        conditionCreateFuncProp: conditionCreate,

        conditionReadFuncProp: conditionRead,

        conditionUpdateFuncProp: conditionUpdate,

        conditionPartialFuncProp: conditionPartial,

        conditionDeleteFuncProp: conditionDelete,
      }}
    >
      {children}
    </ConditionContext.Provider>
  );
};
