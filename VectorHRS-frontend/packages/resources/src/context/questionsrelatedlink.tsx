import { Api, operations, definitions } from "@vhrs/models";
const {
  questionsrelatedlink_list,
  questionsrelatedlink_create,
  questionsrelatedlink_read,
  questionsrelatedlink_update,
  questionsrelatedlink_partial_update,
  questionsrelatedlink_delete,
} = Api;

import { createContext, useState, FC } from "react";
import { IcontextProvider } from "../types";

interface IAction {
  verb: string;
  results:
    | number
    | definitions["QuestionsRelatedLink"]
    | definitions["QuestionsRelatedLink"][];
}

export interface Iquestionsrelatedlink {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  questionsrelatedlinkData?: definitions["QuestionsRelatedLink"][];

  questionsrelatedlinkListFuncProp: (
    data: operations["questionsrelatedlink_list"]["parameters"]
  ) => Promise<void>;

  questionsrelatedlinkCreateFuncProp: (
    data:
      | definitions["QuestionsRelatedLink"]
      | definitions["QuestionsRelatedLink"][]
  ) => Promise<void>;

  questionsrelatedlinkReadFuncProp: (id: number) => Promise<void>;

  questionsrelatedlinkUpdateFuncProp: (
    id: number,
    data:
      | definitions["QuestionsRelatedLink"]
      | definitions["QuestionsRelatedLink"][]
  ) => Promise<void>;

  questionsrelatedlinkPartialFuncProp: (
    id: number,
    data:
      | definitions["QuestionsRelatedLink"]
      | definitions["QuestionsRelatedLink"][]
  ) => Promise<void>;

  questionsrelatedlinkDeleteFuncProp: (id: number) => Promise<void>;
}

interface Istate {
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];
  results: definitions["QuestionsRelatedLink"][];
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

  questionsrelatedlinkListFuncProp: async (
    data: operations["questionsrelatedlink_list"]["parameters"]
  ): Promise<void> => {},

  questionsrelatedlinkCreateFuncProp: async (
    data:
      | definitions["QuestionsRelatedLink"]
      | definitions["QuestionsRelatedLink"][]
  ): Promise<void> => {},

  questionsrelatedlinkReadFuncProp: async (id: number): Promise<void> => {},

  questionsrelatedlinkUpdateFuncProp: async (
    id: number,
    data:
      | definitions["QuestionsRelatedLink"]
      | definitions["QuestionsRelatedLink"][]
  ): Promise<void> => {},

  questionsrelatedlinkPartialFuncProp: async (
    id: number,
    data:
      | definitions["QuestionsRelatedLink"]
      | definitions["QuestionsRelatedLink"][]
  ): Promise<void> => {},

  questionsrelatedlinkDeleteFuncProp: async (id: number): Promise<void> => {},
};
/* prettier-ignore */
export const QuestionsrelatedlinkContext = createContext<Iquestionsrelatedlink>(defaultContextState);
export const QuestionsrelatedlinkProvider: FC<IcontextProvider> = ({
  children,
  headers,
}) => {
  /* prettier-ignore */
  const [QuestionsRelatedLinkDataList, setQuestionsRelatedLinkDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const questionsrelatedlinkList = async (
    data: operations["questionsrelatedlink_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await questionsrelatedlink_list(data, headers);
      let prevStateResults = QuestionsRelatedLinkDataList.results;
      let logActions = QuestionsRelatedLinkDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = QuestionsRelatedLinkDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newQuestionsRelatedLink = prevStateResults.map(
        (el: definitions["QuestionsRelatedLink"]) => {
          const preEl = prevStateResults.filter(
            (resultEl: definitions["QuestionsRelatedLink"]) => {
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
        newQuestionsRelatedLink = prevStateResults.concat(result.data.results);
      }

      const newQuestionsRelatedLinkserializedById: definitions["QuestionsRelatedLink"][] =
        [];
      newQuestionsRelatedLink.map((el: definitions["QuestionsRelatedLink"]) => {
        if (el.id) {
          newQuestionsRelatedLinkserializedById[el.id] = el;
        }
      });

      setQuestionsRelatedLinkDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newQuestionsRelatedLinkserializedById,
      });

      setLoading(false);
    }
  };

  const questionsrelatedlinkCreate = async (
    data:
      | definitions["QuestionsRelatedLink"]
      | definitions["QuestionsRelatedLink"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await questionsrelatedlink_create(data, headers);
      let prevStateResults = QuestionsRelatedLinkDataList.results;
      let logActions = QuestionsRelatedLinkDataList.logActions;

      //Create

      let newCount = QuestionsRelatedLinkDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setQuestionsRelatedLinkDataList({
        ...QuestionsRelatedLinkDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const questionsrelatedlinkRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await questionsrelatedlink_read(id.toString(), headers);
      let prevStateResults = QuestionsRelatedLinkDataList.results;
      let logActions = QuestionsRelatedLinkDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newQuestionsRelatedLink = prevStateResults.map(
        (el: definitions["QuestionsRelatedLink"]) => {
          if (el.id === result.data.id) {
            found = true;
            return { ...el, ...result.data };
          } else {
            return el;
          }
        }
      );
      if (!found) {
        newQuestionsRelatedLink.push(result.data);
      }

      const newQuestionsRelatedLinkserializedById: definitions["QuestionsRelatedLink"][] =
        [];
      newQuestionsRelatedLink.map((el: definitions["QuestionsRelatedLink"]) => {
        if (el.id) {
          newQuestionsRelatedLinkserializedById[el.id] = el;
        }
      });

      setQuestionsRelatedLinkDataList({
        ...QuestionsRelatedLinkDataList,
        results: newQuestionsRelatedLinkserializedById,
      });

      setLoading(false);
    }
  };

  const questionsrelatedlinkUpdate = async (
    id: number,
    data:
      | definitions["QuestionsRelatedLink"]
      | definitions["QuestionsRelatedLink"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await questionsrelatedlink_update(
        id.toString(),
        data,
        headers
      );
      let prevStateResults = QuestionsRelatedLinkDataList.results;
      let logActions = QuestionsRelatedLinkDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newQuestionsRelatedLink;
      if (!Array.isArray(result.data))
        newQuestionsRelatedLink = prevStateResults.map(
          (el: definitions["QuestionsRelatedLink"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newQuestionsRelatedLink = prevStateResults.map(
          (el: definitions["QuestionsRelatedLink"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );

      const newQuestionsRelatedLinkserializedById: definitions["QuestionsRelatedLink"][] =
        [];
      newQuestionsRelatedLink.map((el: definitions["QuestionsRelatedLink"]) => {
        if (el.id) {
          newQuestionsRelatedLinkserializedById[el.id] = el;
        }
      });

      setQuestionsRelatedLinkDataList({
        ...QuestionsRelatedLinkDataList,
        results: newQuestionsRelatedLinkserializedById,
      });

      setLoading(false);
    }
  };

  const questionsrelatedlinkPartial = async (
    id: number,
    data:
      | definitions["QuestionsRelatedLink"]
      | definitions["QuestionsRelatedLink"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await questionsrelatedlink_partial_update(
        id.toString(),
        data,
        headers
      );
      let prevStateResults = QuestionsRelatedLinkDataList.results;
      let logActions = QuestionsRelatedLinkDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newQuestionsRelatedLink;
      if (!Array.isArray(result.data))
        newQuestionsRelatedLink = prevStateResults.map(
          (el: definitions["QuestionsRelatedLink"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newQuestionsRelatedLink = prevStateResults.map(
          (el: definitions["QuestionsRelatedLink"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );

      const newQuestionsRelatedLinkserializedById: definitions["QuestionsRelatedLink"][] =
        [];
      newQuestionsRelatedLink.map((el: definitions["QuestionsRelatedLink"]) => {
        if (el.id) {
          newQuestionsRelatedLinkserializedById[el.id] = el;
        }
      });

      setQuestionsRelatedLinkDataList({
        ...QuestionsRelatedLinkDataList,
        results: newQuestionsRelatedLinkserializedById,
      });

      setLoading(false);
    }
  };

  const questionsrelatedlinkDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await questionsrelatedlink_delete(id.toString(), headers);
      let prevStateResults = QuestionsRelatedLinkDataList.results;
      let logActions = QuestionsRelatedLinkDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newQuestionsRelatedLink = prevStateResults.filter(
        (el: definitions["QuestionsRelatedLink"]) => el.id !== id
      );

      const newQuestionsRelatedLinkserializedById: definitions["QuestionsRelatedLink"][] =
        [];
      newQuestionsRelatedLink.map((el: definitions["QuestionsRelatedLink"]) => {
        if (el.id) {
          newQuestionsRelatedLinkserializedById[el.id] = el;
        }
      });

      setQuestionsRelatedLinkDataList({
        ...QuestionsRelatedLinkDataList,
        results: newQuestionsRelatedLinkserializedById,
      });

      setLoading(false);
    }
  };

  return (
    <QuestionsrelatedlinkContext.Provider
      value={{
        count: QuestionsRelatedLinkDataList.count,
        next: QuestionsRelatedLinkDataList.next,
        previous: QuestionsRelatedLinkDataList.previous,
        logActions: QuestionsRelatedLinkDataList.logActions,
        loading: loading,
        questionsrelatedlinkData: QuestionsRelatedLinkDataList.results,

        questionsrelatedlinkListFuncProp: questionsrelatedlinkList,

        questionsrelatedlinkCreateFuncProp: questionsrelatedlinkCreate,

        questionsrelatedlinkReadFuncProp: questionsrelatedlinkRead,

        questionsrelatedlinkUpdateFuncProp: questionsrelatedlinkUpdate,

        questionsrelatedlinkPartialFuncProp: questionsrelatedlinkPartial,

        questionsrelatedlinkDeleteFuncProp: questionsrelatedlinkDelete,
      }}
    >
      {children}
    </QuestionsrelatedlinkContext.Provider>
  );
};
