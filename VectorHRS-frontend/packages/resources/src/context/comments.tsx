import { operations, definitions } from "../Schemas";
import {
  comments_list,
  comments_create,
  comments_read,
  comments_update,
  comments_partial_update,
  comments_delete,
} from "../api";

import { createContext, useState, FC, ReactNode } from "react";

interface IAction {
  verb: string;
  results: number | definitions["Comments"] | definitions["Comments"][];
}

interface Icomments {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  commentsData?: definitions["Comments"][];

  commentsListFuncProp?: (
    data: operations["comments_list"]["parameters"]
  ) => Promise<void>;

  commentsCreateFuncProp?: (
    data: definitions["Comments"] | definitions["Comments"][]
  ) => Promise<void>;

  commentsReadFuncProp?: (id: number) => Promise<void>;

  commentsUpdateFuncProp?: (
    id: number,
    data: definitions["Comments"] | definitions["Comments"][]
  ) => Promise<void>;

  commentsPartialFuncProp?: (
    id: number,
    data: definitions["Comments"] | definitions["Comments"][]
  ) => Promise<void>;

  commentsDeleteFuncProp?: (id: number) => Promise<void>;
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
  results: definitions["Comments"][];
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
const CommentsContext = createContext<Icomments>(defaultContextState);
export const CommentsProvider: FC<IcontextProvider> = ({
  children,
  headers,
}) => {
  /* prettier-ignore */
  const [CommentsDataList, setCommentsDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const commentsList = async (
    data: operations["comments_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await comments_list(data, headers);
      let prevStateResults = CommentsDataList.results;
      let logActions = CommentsDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = CommentsDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newComments = prevStateResults.map((el: definitions["Comments"]) => {
        const preEl = prevStateResults.filter(
          (resultEl: definitions["Comments"]) => {
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
        newComments = prevStateResults.concat(result.data.results);
      }

      setCommentsDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newComments,
      });

      setLoading(false);
    }
  };

  const commentsCreate = async (
    data: definitions["Comments"] | definitions["Comments"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await comments_create(data, headers);
      let prevStateResults = CommentsDataList.results;
      let logActions = CommentsDataList.logActions;

      //Create

      let newCount = CommentsDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setCommentsDataList({
        ...CommentsDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const commentsRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await comments_read(id.toString(), headers);
      let prevStateResults = CommentsDataList.results;
      let logActions = CommentsDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newComments = prevStateResults.map((el: definitions["Comments"]) => {
        if (el.id === result.data.id) {
          found = true;
          return { ...el, ...result.data };
        } else {
          return el;
        }
      });
      if (!found) {
        newComments = prevStateResults.concat(result.data);
      }

      setCommentsDataList({
        ...CommentsDataList,
        results: newComments,
      });

      setLoading(false);
    }
  };

  const commentsUpdate = async (
    id: number,
    data: definitions["Comments"] | definitions["Comments"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await comments_update(id.toString(), data, headers);
      let prevStateResults = CommentsDataList.results;
      let logActions = CommentsDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newComments;
      if (!Array.isArray(result.data))
        newComments = prevStateResults.map((el: definitions["Comments"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newComments = prevStateResults.map((el: definitions["Comments"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setCommentsDataList({
        ...CommentsDataList,
        results: newComments,
      });

      setLoading(false);
    }
  };

  const commentsPartial = async (
    id: number,
    data: definitions["Comments"] | definitions["Comments"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await comments_partial_update(
        id.toString(),
        data,
        headers
      );
      let prevStateResults = CommentsDataList.results;
      let logActions = CommentsDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newComments;
      if (!Array.isArray(result.data))
        newComments = prevStateResults.map((el: definitions["Comments"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newComments = prevStateResults.map((el: definitions["Comments"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setCommentsDataList({
        ...CommentsDataList,
        results: newComments,
      });

      setLoading(false);
    }
  };

  const commentsDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await comments_delete(id.toString(), headers);
      let prevStateResults = CommentsDataList.results;
      let logActions = CommentsDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newComments = prevStateResults.filter(
        (el: definitions["Comments"]) => el.id !== id
      );

      setCommentsDataList({
        ...CommentsDataList,
        results: newComments,
      });

      setLoading(false);
    }
  };

  return (
    <CommentsContext.Provider
      value={{
        count: CommentsDataList.count,
        next: CommentsDataList.next,
        previous: CommentsDataList.previous,
        logActions: CommentsDataList.logActions,
        loading: loading,
        commentsData: CommentsDataList.results,

        commentsListFuncProp: commentsList,

        commentsCreateFuncProp: commentsCreate,

        commentsReadFuncProp: commentsRead,

        commentsUpdateFuncProp: commentsUpdate,

        commentsPartialFuncProp: commentsPartial,

        commentsDeleteFuncProp: commentsDelete,
      }}
    >
      {children}
    </CommentsContext.Provider>
  );
};
