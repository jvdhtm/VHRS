import { Api, operations, definitions } from "@vhrs/models";
const {
  staffcomment_list,
  staffcomment_create,
  staffcomment_read,
  staffcomment_update,
  staffcomment_partial_update,
  staffcomment_delete,
} = Api;

import { createContext, useState, FC } from "react";
import { IcontextProvider } from "../types";

interface IAction {
  verb: string;
  results: number | definitions["StaffComment"] | definitions["StaffComment"][];
}

export interface Istaffcomment {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  staffcommentData?: definitions["StaffComment"][];

  staffcommentListFuncProp: (
    data: operations["staffcomment_list"]["parameters"]
  ) => Promise<void>;

  staffcommentCreateFuncProp: (
    data: definitions["StaffComment"] | definitions["StaffComment"][]
  ) => Promise<void>;

  staffcommentReadFuncProp: (id: number) => Promise<void>;

  staffcommentUpdateFuncProp: (
    id: number,
    data: definitions["StaffComment"] | definitions["StaffComment"][]
  ) => Promise<void>;

  staffcommentPartialFuncProp: (
    id: number,
    data: definitions["StaffComment"] | definitions["StaffComment"][]
  ) => Promise<void>;

  staffcommentDeleteFuncProp: (id: number) => Promise<void>;
}

interface Istate {
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];
  results: definitions["StaffComment"][];
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

  staffcommentListFuncProp: async (
    data: operations["staffcomment_list"]["parameters"]
  ): Promise<void> => {},

  staffcommentCreateFuncProp: async (
    data: definitions["StaffComment"] | definitions["StaffComment"][]
  ): Promise<void> => {},

  staffcommentReadFuncProp: async (id: number): Promise<void> => {},

  staffcommentUpdateFuncProp: async (
    id: number,
    data: definitions["StaffComment"] | definitions["StaffComment"][]
  ): Promise<void> => {},

  staffcommentPartialFuncProp: async (
    id: number,
    data: definitions["StaffComment"] | definitions["StaffComment"][]
  ): Promise<void> => {},

  staffcommentDeleteFuncProp: async (id: number): Promise<void> => {},
};
/* prettier-ignore */
export const StaffcommentContext = createContext<Istaffcomment>(defaultContextState);
export const StaffcommentProvider: FC<IcontextProvider> = ({
  children,
  headers,
}) => {
  /* prettier-ignore */
  const [StaffCommentDataList, setStaffCommentDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const staffcommentList = async (
    data: operations["staffcomment_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await staffcomment_list(data, headers);
      let prevStateResults = StaffCommentDataList.results;
      let logActions = StaffCommentDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = StaffCommentDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newStaffComment = prevStateResults.map(
        (el: definitions["StaffComment"]) => {
          const preEl = prevStateResults.filter(
            (resultEl: definitions["StaffComment"]) => {
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
        newStaffComment = prevStateResults.concat(result.data.results);
      }

      const newStaffCommentserializedById: definitions["StaffComment"][] = [];
      newStaffComment.map((el: definitions["StaffComment"]) => {
        if (el.id) {
          newStaffCommentserializedById[el.id] = el;
        }
      });

      setStaffCommentDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newStaffCommentserializedById,
      });

      setLoading(false);
    }
  };

  const staffcommentCreate = async (
    data: definitions["StaffComment"] | definitions["StaffComment"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await staffcomment_create(data, headers);
      let prevStateResults = StaffCommentDataList.results;
      let logActions = StaffCommentDataList.logActions;

      //Create

      let newCount = StaffCommentDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setStaffCommentDataList({
        ...StaffCommentDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const staffcommentRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await staffcomment_read(id.toString(), headers);
      let prevStateResults = StaffCommentDataList.results;
      let logActions = StaffCommentDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newStaffComment = prevStateResults.map(
        (el: definitions["StaffComment"]) => {
          if (el.id === result.data.id) {
            found = true;
            return { ...el, ...result.data };
          } else {
            return el;
          }
        }
      );
      if (!found) {
        newStaffComment.push(result.data);
      }

      const newStaffCommentserializedById: definitions["StaffComment"][] = [];
      newStaffComment.map((el: definitions["StaffComment"]) => {
        if (el.id) {
          newStaffCommentserializedById[el.id] = el;
        }
      });

      setStaffCommentDataList({
        ...StaffCommentDataList,
        results: newStaffCommentserializedById,
      });

      setLoading(false);
    }
  };

  const staffcommentUpdate = async (
    id: number,
    data: definitions["StaffComment"] | definitions["StaffComment"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await staffcomment_update(id.toString(), data, headers);
      let prevStateResults = StaffCommentDataList.results;
      let logActions = StaffCommentDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newStaffComment;
      if (!Array.isArray(result.data))
        newStaffComment = prevStateResults.map(
          (el: definitions["StaffComment"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newStaffComment = prevStateResults.map(
          (el: definitions["StaffComment"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );

      const newStaffCommentserializedById: definitions["StaffComment"][] = [];
      newStaffComment.map((el: definitions["StaffComment"]) => {
        if (el.id) {
          newStaffCommentserializedById[el.id] = el;
        }
      });

      setStaffCommentDataList({
        ...StaffCommentDataList,
        results: newStaffCommentserializedById,
      });

      setLoading(false);
    }
  };

  const staffcommentPartial = async (
    id: number,
    data: definitions["StaffComment"] | definitions["StaffComment"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await staffcomment_partial_update(
        id.toString(),
        data,
        headers
      );
      let prevStateResults = StaffCommentDataList.results;
      let logActions = StaffCommentDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newStaffComment;
      if (!Array.isArray(result.data))
        newStaffComment = prevStateResults.map(
          (el: definitions["StaffComment"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newStaffComment = prevStateResults.map(
          (el: definitions["StaffComment"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );

      const newStaffCommentserializedById: definitions["StaffComment"][] = [];
      newStaffComment.map((el: definitions["StaffComment"]) => {
        if (el.id) {
          newStaffCommentserializedById[el.id] = el;
        }
      });

      setStaffCommentDataList({
        ...StaffCommentDataList,
        results: newStaffCommentserializedById,
      });

      setLoading(false);
    }
  };

  const staffcommentDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await staffcomment_delete(id.toString(), headers);
      let prevStateResults = StaffCommentDataList.results;
      let logActions = StaffCommentDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newStaffComment = prevStateResults.filter(
        (el: definitions["StaffComment"]) => el.id !== id
      );

      const newStaffCommentserializedById: definitions["StaffComment"][] = [];
      newStaffComment.map((el: definitions["StaffComment"]) => {
        if (el.id) {
          newStaffCommentserializedById[el.id] = el;
        }
      });

      setStaffCommentDataList({
        ...StaffCommentDataList,
        results: newStaffCommentserializedById,
      });

      setLoading(false);
    }
  };

  return (
    <StaffcommentContext.Provider
      value={{
        count: StaffCommentDataList.count,
        next: StaffCommentDataList.next,
        previous: StaffCommentDataList.previous,
        logActions: StaffCommentDataList.logActions,
        loading: loading,
        staffcommentData: StaffCommentDataList.results,

        staffcommentListFuncProp: staffcommentList,

        staffcommentCreateFuncProp: staffcommentCreate,

        staffcommentReadFuncProp: staffcommentRead,

        staffcommentUpdateFuncProp: staffcommentUpdate,

        staffcommentPartialFuncProp: staffcommentPartial,

        staffcommentDeleteFuncProp: staffcommentDelete,
      }}
    >
      {children}
    </StaffcommentContext.Provider>
  );
};
