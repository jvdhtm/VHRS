import { Api, operations, definitions } from "@vhrs/models";
const {
  comment_list,
  comment_create,
  comment_read,
  comment_update,
  comment_partial_update,
  comment_delete,
} = Api;

import { createContext, useState, FC } from "react";
import { IcontextProvider } from "../types";

interface IAction {
  verb: string;
  results: number | definitions["Comment"] | definitions["Comment"][];
}

export interface Icomment {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  commentData?: definitions["Comment"][];

  commentListFuncProp: (
    data: operations["comment_list"]["parameters"]
  ) => Promise<void>;

  commentCreateFuncProp: (
    data: definitions["Comment"] | definitions["Comment"][]
  ) => Promise<void>;

  commentReadFuncProp: (id: number) => Promise<void>;

  commentUpdateFuncProp: (
    id: number,
    data: definitions["Comment"] | definitions["Comment"][]
  ) => Promise<void>;

  commentPartialFuncProp: (
    id: number,
    data: definitions["Comment"] | definitions["Comment"][]
  ) => Promise<void>;

  commentDeleteFuncProp: (id: number) => Promise<void>;
}

interface Istate {
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];
  results: definitions["Comment"][];
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

  commentListFuncProp: async (
    data: operations["comment_list"]["parameters"]
  ): Promise<void> => {},

  commentCreateFuncProp: async (
    data: definitions["Comment"] | definitions["Comment"][]
  ): Promise<void> => {},

  commentReadFuncProp: async (id: number): Promise<void> => {},

  commentUpdateFuncProp: async (
    id: number,
    data: definitions["Comment"] | definitions["Comment"][]
  ): Promise<void> => {},

  commentPartialFuncProp: async (
    id: number,
    data: definitions["Comment"] | definitions["Comment"][]
  ): Promise<void> => {},

  commentDeleteFuncProp: async (id: number): Promise<void> => {},
};
/* prettier-ignore */
export const CommentContext = createContext<Icomment>(defaultContextState);
export const CommentProvider: FC<IcontextProvider> = ({
  children,
  headers,
}) => {
  /* prettier-ignore */
  const [CommentDataList, setCommentDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const commentList = async (
    data: operations["comment_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await comment_list(data, headers);
      let prevStateResults = CommentDataList.results;
      let logActions = CommentDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = CommentDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newComment = prevStateResults.map((el: definitions["Comment"]) => {
        const preEl = prevStateResults.filter(
          (resultEl: definitions["Comment"]) => {
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
        newComment = prevStateResults.concat(result.data.results);
      }

      setCommentDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newComment,
      });

      setLoading(false);
    }
  };

  const commentCreate = async (
    data: definitions["Comment"] | definitions["Comment"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await comment_create(data, headers);
      let prevStateResults = CommentDataList.results;
      let logActions = CommentDataList.logActions;

      //Create

      let newCount = CommentDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setCommentDataList({
        ...CommentDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const commentRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await comment_read(id.toString(), headers);
      let prevStateResults = CommentDataList.results;
      let logActions = CommentDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newComment = prevStateResults.map((el: definitions["Comment"]) => {
        if (el.id === result.data.id) {
          found = true;
          return { ...el, ...result.data };
        } else {
          return el;
        }
      });
      if (!found) {
        newComment = prevStateResults.concat(result.data);
      }

      setCommentDataList({
        ...CommentDataList,
        results: newComment,
      });

      setLoading(false);
    }
  };

  const commentUpdate = async (
    id: number,
    data: definitions["Comment"] | definitions["Comment"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await comment_update(id.toString(), data, headers);
      let prevStateResults = CommentDataList.results;
      let logActions = CommentDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newComment;
      if (!Array.isArray(result.data))
        newComment = prevStateResults.map((el: definitions["Comment"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newComment = prevStateResults.map((el: definitions["Comment"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setCommentDataList({
        ...CommentDataList,
        results: newComment,
      });

      setLoading(false);
    }
  };

  const commentPartial = async (
    id: number,
    data: definitions["Comment"] | definitions["Comment"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await comment_partial_update(id.toString(), data, headers);
      let prevStateResults = CommentDataList.results;
      let logActions = CommentDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newComment;
      if (!Array.isArray(result.data))
        newComment = prevStateResults.map((el: definitions["Comment"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newComment = prevStateResults.map((el: definitions["Comment"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setCommentDataList({
        ...CommentDataList,
        results: newComment,
      });

      setLoading(false);
    }
  };

  const commentDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await comment_delete(id.toString(), headers);
      let prevStateResults = CommentDataList.results;
      let logActions = CommentDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newComment = prevStateResults.filter(
        (el: definitions["Comment"]) => el.id !== id
      );

      setCommentDataList({
        ...CommentDataList,
        results: newComment,
      });

      setLoading(false);
    }
  };

  return (
    <CommentContext.Provider
      value={{
        count: CommentDataList.count,
        next: CommentDataList.next,
        previous: CommentDataList.previous,
        logActions: CommentDataList.logActions,
        loading: loading,
        commentData: CommentDataList.results,

        commentListFuncProp: commentList,

        commentCreateFuncProp: commentCreate,

        commentReadFuncProp: commentRead,

        commentUpdateFuncProp: commentUpdate,

        commentPartialFuncProp: commentPartial,

        commentDeleteFuncProp: commentDelete,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
};
