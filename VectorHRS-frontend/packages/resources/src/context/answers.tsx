import { Api, operations, definitions } from "@vhrs/models";
const {
  answers_list,
  answers_create,
  answers_read,
  answers_update,
  answers_partial_update,
  answers_delete,
} = Api;

import { createContext, useState, FC } from "react";
import { IcontextProvider } from "../types";

interface IAction {
  verb: string;
  results: number | definitions["answers"] | definitions["answers"][];
}

export interface Ianswers {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  answersData?: definitions["answers"][];

  answersListFuncProp: (
    data: operations["answers_list"]["parameters"]
  ) => Promise<void>;

  answersCreateFuncProp: (
    data: definitions["answers"] | definitions["answers"][]
  ) => Promise<void>;

  answersReadFuncProp: (id: number) => Promise<void>;

  answersUpdateFuncProp: (
    id: number,
    data: definitions["answers"] | definitions["answers"][]
  ) => Promise<void>;

  answersPartialFuncProp: (
    id: number,
    data: definitions["answers"] | definitions["answers"][]
  ) => Promise<void>;

  answersDeleteFuncProp: (id: number) => Promise<void>;
}

interface Istate {
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];
  results: definitions["answers"][];
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

  answersListFuncProp: async (
    data: operations["answers_list"]["parameters"]
  ): Promise<void> => {},

  answersCreateFuncProp: async (
    data: definitions["answers"] | definitions["answers"][]
  ): Promise<void> => {},

  answersReadFuncProp: async (id: number): Promise<void> => {},

  answersUpdateFuncProp: async (
    id: number,
    data: definitions["answers"] | definitions["answers"][]
  ): Promise<void> => {},

  answersPartialFuncProp: async (
    id: number,
    data: definitions["answers"] | definitions["answers"][]
  ): Promise<void> => {},

  answersDeleteFuncProp: async (id: number): Promise<void> => {},
};
/* prettier-ignore */
export const AnswersContext = createContext<Ianswers>(defaultContextState);
export const AnswersProvider: FC<IcontextProvider> = ({
  children,
  headers,
}) => {
  /* prettier-ignore */
  const [answersDataList, setanswersDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const answersList = async (
    data: operations["answers_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await answers_list(data, headers);
      let prevStateResults = answersDataList.results;
      let logActions = answersDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = answersDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newanswers = prevStateResults.map((el: definitions["answers"]) => {
        const preEl = prevStateResults.filter(
          (resultEl: definitions["answers"]) => {
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
        newanswers = prevStateResults.concat(result.data.results);
      }

      setanswersDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newanswers,
      });

      setLoading(false);
    }
  };

  const answersCreate = async (
    data: definitions["answers"] | definitions["answers"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await answers_create(data, headers);
      let prevStateResults = answersDataList.results;
      let logActions = answersDataList.logActions;

      //Create

      let newCount = answersDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setanswersDataList({
        ...answersDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const answersRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await answers_read(id.toString(), headers);
      let prevStateResults = answersDataList.results;
      let logActions = answersDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newanswers = prevStateResults.map((el: definitions["answers"]) => {
        if (el.id === result.data.id) {
          found = true;
          return { ...el, ...result.data };
        } else {
          return el;
        }
      });
      if (!found) {
        newanswers = prevStateResults.concat(result.data);
      }

      setanswersDataList({
        ...answersDataList,
        results: newanswers,
      });

      setLoading(false);
    }
  };

  const answersUpdate = async (
    id: number,
    data: definitions["answers"] | definitions["answers"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await answers_update(id.toString(), data, headers);
      let prevStateResults = answersDataList.results;
      let logActions = answersDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newanswers;
      if (!Array.isArray(result.data))
        newanswers = prevStateResults.map((el: definitions["answers"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newanswers = prevStateResults.map((el: definitions["answers"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setanswersDataList({
        ...answersDataList,
        results: newanswers,
      });

      setLoading(false);
    }
  };

  const answersPartial = async (
    id: number,
    data: definitions["answers"] | definitions["answers"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await answers_partial_update(id.toString(), data, headers);
      let prevStateResults = answersDataList.results;
      let logActions = answersDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newanswers;
      if (!Array.isArray(result.data))
        newanswers = prevStateResults.map((el: definitions["answers"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newanswers = prevStateResults.map((el: definitions["answers"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setanswersDataList({
        ...answersDataList,
        results: newanswers,
      });

      setLoading(false);
    }
  };

  const answersDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await answers_delete(id.toString(), headers);
      let prevStateResults = answersDataList.results;
      let logActions = answersDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newanswers = prevStateResults.filter(
        (el: definitions["answers"]) => el.id !== id
      );

      setanswersDataList({
        ...answersDataList,
        results: newanswers,
      });

      setLoading(false);
    }
  };

  return (
    <AnswersContext.Provider
      value={{
        count: answersDataList.count,
        next: answersDataList.next,
        previous: answersDataList.previous,
        logActions: answersDataList.logActions,
        loading: loading,
        answersData: answersDataList.results,

        answersListFuncProp: answersList,

        answersCreateFuncProp: answersCreate,

        answersReadFuncProp: answersRead,

        answersUpdateFuncProp: answersUpdate,

        answersPartialFuncProp: answersPartial,

        answersDeleteFuncProp: answersDelete,
      }}
    >
      {children}
    </AnswersContext.Provider>
  );
};
