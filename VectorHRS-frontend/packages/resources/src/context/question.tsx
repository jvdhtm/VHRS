import { Api, operations, definitions } from "@vhrs/models";
const {
  question_list,
  question_create,
  question_read,
  question_update,
  question_partial_update,
  question_delete,
} = Api;

import { createContext, useState, FC } from "react";
import { IcontextProvider } from "../types";

interface IAction {
  verb: string;
  results: number | definitions["Question"] | definitions["Question"][];
}

export interface Iquestion {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  questionData?: definitions["Question"][];

  questionListFuncProp: (
    data: operations["question_list"]["parameters"]
  ) => Promise<void>;

  questionCreateFuncProp: (
    data: definitions["Question"] | definitions["Question"][]
  ) => Promise<void>;

  questionReadFuncProp: (id: number) => Promise<void>;

  questionUpdateFuncProp: (
    id: number,
    data: definitions["Question"] | definitions["Question"][]
  ) => Promise<void>;

  questionPartialFuncProp: (
    id: number,
    data: definitions["Question"] | definitions["Question"][]
  ) => Promise<void>;

  questionDeleteFuncProp: (id: number) => Promise<void>;
}

interface Istate {
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];
  results: definitions["Question"][];
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

  questionListFuncProp: async (
    data: operations["question_list"]["parameters"]
  ): Promise<void> => {},

  questionCreateFuncProp: async (
    data: definitions["Question"] | definitions["Question"][]
  ): Promise<void> => {},

  questionReadFuncProp: async (id: number): Promise<void> => {},

  questionUpdateFuncProp: async (
    id: number,
    data: definitions["Question"] | definitions["Question"][]
  ): Promise<void> => {},

  questionPartialFuncProp: async (
    id: number,
    data: definitions["Question"] | definitions["Question"][]
  ): Promise<void> => {},

  questionDeleteFuncProp: async (id: number): Promise<void> => {},
};
/* prettier-ignore */
export const QuestionContext = createContext<Iquestion>(defaultContextState);
export const QuestionProvider: FC<IcontextProvider> = ({
  children,
  headers,
}) => {
  /* prettier-ignore */
  const [QuestionDataList, setQuestionDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const questionList = async (
    data: operations["question_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await question_list(data, headers);
      let prevStateResults = QuestionDataList.results;
      let logActions = QuestionDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = QuestionDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newQuestion = prevStateResults.map((el: definitions["Question"]) => {
        const preEl = prevStateResults.filter(
          (resultEl: definitions["Question"]) => {
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
        newQuestion = prevStateResults.concat(result.data.results);
      }

      setQuestionDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newQuestion,
      });

      setLoading(false);
    }
  };

  const questionCreate = async (
    data: definitions["Question"] | definitions["Question"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await question_create(data, headers);
      let prevStateResults = QuestionDataList.results;
      let logActions = QuestionDataList.logActions;

      //Create

      let newCount = QuestionDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setQuestionDataList({
        ...QuestionDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const questionRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await question_read(id.toString(), headers);
      let prevStateResults = QuestionDataList.results;
      let logActions = QuestionDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newQuestion = prevStateResults.map((el: definitions["Question"]) => {
        if (el.id === result.data.id) {
          found = true;
          return { ...el, ...result.data };
        } else {
          return el;
        }
      });
      if (!found) {
        newQuestion = prevStateResults.concat(result.data);
      }

      setQuestionDataList({
        ...QuestionDataList,
        results: newQuestion,
      });

      setLoading(false);
    }
  };

  const questionUpdate = async (
    id: number,
    data: definitions["Question"] | definitions["Question"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await question_update(id.toString(), data, headers);
      let prevStateResults = QuestionDataList.results;
      let logActions = QuestionDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newQuestion;
      if (!Array.isArray(result.data))
        newQuestion = prevStateResults.map((el: definitions["Question"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newQuestion = prevStateResults.map((el: definitions["Question"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setQuestionDataList({
        ...QuestionDataList,
        results: newQuestion,
      });

      setLoading(false);
    }
  };

  const questionPartial = async (
    id: number,
    data: definitions["Question"] | definitions["Question"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await question_partial_update(
        id.toString(),
        data,
        headers
      );
      let prevStateResults = QuestionDataList.results;
      let logActions = QuestionDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newQuestion;
      if (!Array.isArray(result.data))
        newQuestion = prevStateResults.map((el: definitions["Question"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newQuestion = prevStateResults.map((el: definitions["Question"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setQuestionDataList({
        ...QuestionDataList,
        results: newQuestion,
      });

      setLoading(false);
    }
  };

  const questionDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await question_delete(id.toString(), headers);
      let prevStateResults = QuestionDataList.results;
      let logActions = QuestionDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newQuestion = prevStateResults.filter(
        (el: definitions["Question"]) => el.id !== id
      );

      setQuestionDataList({
        ...QuestionDataList,
        results: newQuestion,
      });

      setLoading(false);
    }
  };

  return (
    <QuestionContext.Provider
      value={{
        count: QuestionDataList.count,
        next: QuestionDataList.next,
        previous: QuestionDataList.previous,
        logActions: QuestionDataList.logActions,
        loading: loading,
        questionData: QuestionDataList.results,

        questionListFuncProp: questionList,

        questionCreateFuncProp: questionCreate,

        questionReadFuncProp: questionRead,

        questionUpdateFuncProp: questionUpdate,

        questionPartialFuncProp: questionPartial,

        questionDeleteFuncProp: questionDelete,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
