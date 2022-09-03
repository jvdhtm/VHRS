import { Api, operations, definitions } from "@vhrs/models";
const {
  newsrelatedlink_list,
  newsrelatedlink_create,
  newsrelatedlink_read,
  newsrelatedlink_update,
  newsrelatedlink_partial_update,
  newsrelatedlink_delete,
} = Api;

import { createContext, useState, FC } from "react";
import { IcontextProvider } from "../types";

interface IAction {
  verb: string;
  results:
    | number
    | definitions["NewsRelatedLink"]
    | definitions["NewsRelatedLink"][];
}

export interface Inewsrelatedlink {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  newsrelatedlinkData?: definitions["NewsRelatedLink"][];

  newsrelatedlinkListFuncProp: (
    data: operations["newsrelatedlink_list"]["parameters"]
  ) => Promise<void>;

  newsrelatedlinkCreateFuncProp: (
    data: definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][]
  ) => Promise<void>;

  newsrelatedlinkReadFuncProp: (id: number) => Promise<void>;

  newsrelatedlinkUpdateFuncProp: (
    id: number,
    data: definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][]
  ) => Promise<void>;

  newsrelatedlinkPartialFuncProp: (
    id: number,
    data: definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][]
  ) => Promise<void>;

  newsrelatedlinkDeleteFuncProp: (id: number) => Promise<void>;
}

interface Istate {
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];
  results: definitions["NewsRelatedLink"][];
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

  newsrelatedlinkListFuncProp: async (
    data: operations["newsrelatedlink_list"]["parameters"]
  ): Promise<void> => {},

  newsrelatedlinkCreateFuncProp: async (
    data: definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][]
  ): Promise<void> => {},

  newsrelatedlinkReadFuncProp: async (id: number): Promise<void> => {},

  newsrelatedlinkUpdateFuncProp: async (
    id: number,
    data: definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][]
  ): Promise<void> => {},

  newsrelatedlinkPartialFuncProp: async (
    id: number,
    data: definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][]
  ): Promise<void> => {},

  newsrelatedlinkDeleteFuncProp: async (id: number): Promise<void> => {},
};
/* prettier-ignore */
export const NewsrelatedlinkContext = createContext<Inewsrelatedlink>(defaultContextState);
export const NewsrelatedlinkProvider: FC<IcontextProvider> = ({
  children,
  headers,
}) => {
  /* prettier-ignore */
  const [NewsRelatedLinkDataList, setNewsRelatedLinkDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const newsrelatedlinkList = async (
    data: operations["newsrelatedlink_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await newsrelatedlink_list(data, headers);
      let prevStateResults = NewsRelatedLinkDataList.results;
      let logActions = NewsRelatedLinkDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = NewsRelatedLinkDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newNewsRelatedLink = prevStateResults.map(
        (el: definitions["NewsRelatedLink"]) => {
          const preEl = prevStateResults.filter(
            (resultEl: definitions["NewsRelatedLink"]) => {
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
        newNewsRelatedLink = prevStateResults.concat(result.data.results);
      }

      setNewsRelatedLinkDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newNewsRelatedLink,
      });

      setLoading(false);
    }
  };

  const newsrelatedlinkCreate = async (
    data: definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await newsrelatedlink_create(data, headers);
      let prevStateResults = NewsRelatedLinkDataList.results;
      let logActions = NewsRelatedLinkDataList.logActions;

      //Create

      let newCount = NewsRelatedLinkDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setNewsRelatedLinkDataList({
        ...NewsRelatedLinkDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const newsrelatedlinkRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await newsrelatedlink_read(id.toString(), headers);
      let prevStateResults = NewsRelatedLinkDataList.results;
      let logActions = NewsRelatedLinkDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newNewsRelatedLink = prevStateResults.map(
        (el: definitions["NewsRelatedLink"]) => {
          if (el.id === result.data.id) {
            found = true;
            return { ...el, ...result.data };
          } else {
            return el;
          }
        }
      );
      if (!found) {
        newNewsRelatedLink = prevStateResults.concat(result.data);
      }

      setNewsRelatedLinkDataList({
        ...NewsRelatedLinkDataList,
        results: newNewsRelatedLink,
      });

      setLoading(false);
    }
  };

  const newsrelatedlinkUpdate = async (
    id: number,
    data: definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await newsrelatedlink_update(id.toString(), data, headers);
      let prevStateResults = NewsRelatedLinkDataList.results;
      let logActions = NewsRelatedLinkDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newNewsRelatedLink;
      if (!Array.isArray(result.data))
        newNewsRelatedLink = prevStateResults.map(
          (el: definitions["NewsRelatedLink"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newNewsRelatedLink = prevStateResults.map(
          (el: definitions["NewsRelatedLink"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setNewsRelatedLinkDataList({
        ...NewsRelatedLinkDataList,
        results: newNewsRelatedLink,
      });

      setLoading(false);
    }
  };

  const newsrelatedlinkPartial = async (
    id: number,
    data: definitions["NewsRelatedLink"] | definitions["NewsRelatedLink"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await newsrelatedlink_partial_update(
        id.toString(),
        data,
        headers
      );
      let prevStateResults = NewsRelatedLinkDataList.results;
      let logActions = NewsRelatedLinkDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newNewsRelatedLink;
      if (!Array.isArray(result.data))
        newNewsRelatedLink = prevStateResults.map(
          (el: definitions["NewsRelatedLink"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newNewsRelatedLink = prevStateResults.map(
          (el: definitions["NewsRelatedLink"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setNewsRelatedLinkDataList({
        ...NewsRelatedLinkDataList,
        results: newNewsRelatedLink,
      });

      setLoading(false);
    }
  };

  const newsrelatedlinkDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await newsrelatedlink_delete(id.toString(), headers);
      let prevStateResults = NewsRelatedLinkDataList.results;
      let logActions = NewsRelatedLinkDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newNewsRelatedLink = prevStateResults.filter(
        (el: definitions["NewsRelatedLink"]) => el.id !== id
      );

      setNewsRelatedLinkDataList({
        ...NewsRelatedLinkDataList,
        results: newNewsRelatedLink,
      });

      setLoading(false);
    }
  };

  return (
    <NewsrelatedlinkContext.Provider
      value={{
        count: NewsRelatedLinkDataList.count,
        next: NewsRelatedLinkDataList.next,
        previous: NewsRelatedLinkDataList.previous,
        logActions: NewsRelatedLinkDataList.logActions,
        loading: loading,
        newsrelatedlinkData: NewsRelatedLinkDataList.results,

        newsrelatedlinkListFuncProp: newsrelatedlinkList,

        newsrelatedlinkCreateFuncProp: newsrelatedlinkCreate,

        newsrelatedlinkReadFuncProp: newsrelatedlinkRead,

        newsrelatedlinkUpdateFuncProp: newsrelatedlinkUpdate,

        newsrelatedlinkPartialFuncProp: newsrelatedlinkPartial,

        newsrelatedlinkDeleteFuncProp: newsrelatedlinkDelete,
      }}
    >
      {children}
    </NewsrelatedlinkContext.Provider>
  );
};
