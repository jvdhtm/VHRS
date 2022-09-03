import { Api, operations, definitions } from "@vhrs/models";
const {
  questions_list,
  questions_create,
  questions_read,
  questions_update,
  questions_partial_update,
  questions_delete,
} = Api;

import { createContext, useState, FC } from "react";
import { IcontextProvider } from "../types";

interface IAction {
  verb: string;
  results: number | definitions["Questions"] | definitions["Questions"][];
}

export interface Iquestions {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  questionsData?: definitions["Questions"][];

  questionsListFuncProp: (
    data: operations["questions_list"]["parameters"]
  ) => Promise<void>;

  questionsCreateFuncProp: (
    data: definitions["Questions"] | definitions["Questions"][]
  ) => Promise<void>;

  questionsReadFuncProp: (id: number) => Promise<void>;

  questionsUpdateFuncProp: (
    id: number,
    data: definitions["Questions"] | definitions["Questions"][]
  ) => Promise<void>;

  questionsPartialFuncProp: (
    id: number,
    data: definitions["Questions"] | definitions["Questions"][]
  ) => Promise<void>;

  questionsDeleteFuncProp: (id: number) => Promise<void>;
}

interface Istate {
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];
  results: definitions["Questions"][];
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

  questionsListFuncProp: async (
    data: operations["questions_list"]["parameters"]
  ): Promise<void> => {},

  questionsCreateFuncProp: async (
    data: definitions["Questions"] | definitions["Questions"][]
  ): Promise<void> => {},

  questionsReadFuncProp: async (id: number): Promise<void> => {},

  questionsUpdateFuncProp: async (
    id: number,
    data: definitions["Questions"] | definitions["Questions"][]
  ): Promise<void> => {},

  questionsPartialFuncProp: async (
    id: number,
    data: definitions["Questions"] | definitions["Questions"][]
  ): Promise<void> => {},

  questionsDeleteFuncProp: async (id: number): Promise<void> => {},
};
/* prettier-ignore */
export const QuestionsContext = createContext<Iquestions>(defaultContextState);
export const QuestionsProvider: FC<IcontextProvider> = ({
  children,
  headers,
}) => {
  /* prettier-ignore */
  const [QuestionsDataList, setQuestionsDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const questionsList = async (
    data: operations["questions_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await questions_list(data, headers);
      let prevStateResults = QuestionsDataList.results;
      let logActions = QuestionsDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = QuestionsDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newQuestions = prevStateResults.map(
        (el: definitions["Questions"]) => {
          const preEl = prevStateResults.filter(
            (resultEl: definitions["Questions"]) => {
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
        newQuestions = prevStateResults.concat(result.data.results);
      }

      setQuestionsDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newQuestions,
      });

      setLoading(false);
    }
  };

  const questionsCreate = async (
    data: definitions["Questions"] | definitions["Questions"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await questions_create(data, headers);
      let prevStateResults = QuestionsDataList.results;
      let logActions = QuestionsDataList.logActions;

      //Create

      let newCount = QuestionsDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setQuestionsDataList({
        ...QuestionsDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const questionsRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await questions_read(id.toString(), headers);
      let prevStateResults = QuestionsDataList.results;
      let logActions = QuestionsDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newQuestions = prevStateResults.map(
        (el: definitions["Questions"]) => {
          if (el.id === result.data.id) {
            found = true;
            return { ...el, ...result.data };
          } else {
            return el;
          }
        }
      );
      if (!found) {
        newQuestions = prevStateResults.concat(result.data);
      }

      setQuestionsDataList({
        ...QuestionsDataList,
        results: newQuestions,
      });

      setLoading(false);
    }
  };

  const questionsUpdate = async (
    id: number,
    data: definitions["Questions"] | definitions["Questions"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await questions_update(id.toString(), data, headers);
      let prevStateResults = QuestionsDataList.results;
      let logActions = QuestionsDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newQuestions;
      if (!Array.isArray(result.data))
        newQuestions = prevStateResults.map((el: definitions["Questions"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newQuestions = prevStateResults.map((el: definitions["Questions"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setQuestionsDataList({
        ...QuestionsDataList,
        results: newQuestions,
      });

      setLoading(false);
    }
  };

  const questionsPartial = async (
    id: number,
    data: definitions["Questions"] | definitions["Questions"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await questions_partial_update(
        id.toString(),
        data,
        headers
      );
      let prevStateResults = QuestionsDataList.results;
      let logActions = QuestionsDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newQuestions;
      if (!Array.isArray(result.data))
        newQuestions = prevStateResults.map((el: definitions["Questions"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newQuestions = prevStateResults.map((el: definitions["Questions"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setQuestionsDataList({
        ...QuestionsDataList,
        results: newQuestions,
      });

      setLoading(false);
    }
  };

  const questionsDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await questions_delete(id.toString(), headers);
      let prevStateResults = QuestionsDataList.results;
      let logActions = QuestionsDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newQuestions = prevStateResults.filter(
        (el: definitions["Questions"]) => el.id !== id
      );

      setQuestionsDataList({
        ...QuestionsDataList,
        results: newQuestions,
      });

      setLoading(false);
    }
  };

  return (
    <QuestionsContext.Provider
      value={{
        count: QuestionsDataList.count,
        next: QuestionsDataList.next,
        previous: QuestionsDataList.previous,
        logActions: QuestionsDataList.logActions,
        loading: loading,
        questionsData: QuestionsDataList.results,

        questionsListFuncProp: questionsList,

        questionsCreateFuncProp: questionsCreate,

        questionsReadFuncProp: questionsRead,

        questionsUpdateFuncProp: questionsUpdate,

        questionsPartialFuncProp: questionsPartial,

        questionsDeleteFuncProp: questionsDelete,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};
