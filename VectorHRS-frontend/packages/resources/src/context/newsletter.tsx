import { Api, operations, definitions } from "@vhrs/models";
const {
  newsletter_list,
  newsletter_create,
  newsletter_read,
  newsletter_update,
  newsletter_partial_update,
  newsletter_delete,
} = Api;

import { createContext, useState, FC } from "react";
import { IcontextProvider } from "../types";

interface IAction {
  verb: string;
  results: number | definitions["NewsLetter"] | definitions["NewsLetter"][];
}

export interface Inewsletter {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  newsletterData?: definitions["NewsLetter"][];

  newsletterListFuncProp: (
    data: operations["newsletter_list"]["parameters"]
  ) => Promise<void>;

  newsletterCreateFuncProp: (
    data: definitions["NewsLetter"] | definitions["NewsLetter"][]
  ) => Promise<void>;

  newsletterReadFuncProp: (id: number) => Promise<void>;

  newsletterUpdateFuncProp: (
    id: number,
    data: definitions["NewsLetter"] | definitions["NewsLetter"][]
  ) => Promise<void>;

  newsletterPartialFuncProp: (
    id: number,
    data: definitions["NewsLetter"] | definitions["NewsLetter"][]
  ) => Promise<void>;

  newsletterDeleteFuncProp: (id: number) => Promise<void>;
}

interface Istate {
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];
  results: definitions["NewsLetter"][];
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

  newsletterListFuncProp: async (
    data: operations["newsletter_list"]["parameters"]
  ): Promise<void> => {},

  newsletterCreateFuncProp: async (
    data: definitions["NewsLetter"] | definitions["NewsLetter"][]
  ): Promise<void> => {},

  newsletterReadFuncProp: async (id: number): Promise<void> => {},

  newsletterUpdateFuncProp: async (
    id: number,
    data: definitions["NewsLetter"] | definitions["NewsLetter"][]
  ): Promise<void> => {},

  newsletterPartialFuncProp: async (
    id: number,
    data: definitions["NewsLetter"] | definitions["NewsLetter"][]
  ): Promise<void> => {},

  newsletterDeleteFuncProp: async (id: number): Promise<void> => {},
};
/* prettier-ignore */
export const NewsletterContext = createContext<Inewsletter>(defaultContextState);
export const NewsletterProvider: FC<IcontextProvider> = ({
  children,
  headers,
}) => {
  /* prettier-ignore */
  const [NewsLetterDataList, setNewsLetterDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const newsletterList = async (
    data: operations["newsletter_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await newsletter_list(data, headers);
      let prevStateResults = NewsLetterDataList.results;
      let logActions = NewsLetterDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = NewsLetterDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newNewsLetter = prevStateResults.map(
        (el: definitions["NewsLetter"]) => {
          const preEl = prevStateResults.filter(
            (resultEl: definitions["NewsLetter"]) => {
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
        newNewsLetter = prevStateResults.concat(result.data.results);
      }

      const newNewsLetterserializedById: definitions["NewsLetter"][] = [];
      newNewsLetter.map((el: definitions["NewsLetter"]) => {
        if (el.id) {
          newNewsLetterserializedById[el.id] = el;
        }
      });

      setNewsLetterDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newNewsLetterserializedById,
      });

      setLoading(false);
    }
  };

  const newsletterCreate = async (
    data: definitions["NewsLetter"] | definitions["NewsLetter"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await newsletter_create(data, headers);
      let prevStateResults = NewsLetterDataList.results;
      let logActions = NewsLetterDataList.logActions;

      //Create

      let newCount = NewsLetterDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setNewsLetterDataList({
        ...NewsLetterDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const newsletterRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await newsletter_read(id.toString(), headers);
      let prevStateResults = NewsLetterDataList.results;
      let logActions = NewsLetterDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newNewsLetter = prevStateResults.map(
        (el: definitions["NewsLetter"]) => {
          if (el.id === result.data.id) {
            found = true;
            return { ...el, ...result.data };
          } else {
            return el;
          }
        }
      );
      if (!found) {
        newNewsLetter.push(result.data);
      }

      const newNewsLetterserializedById: definitions["NewsLetter"][] = [];
      newNewsLetter.map((el: definitions["NewsLetter"]) => {
        if (el.id) {
          newNewsLetterserializedById[el.id] = el;
        }
      });

      setNewsLetterDataList({
        ...NewsLetterDataList,
        results: newNewsLetterserializedById,
      });

      setLoading(false);
    }
  };

  const newsletterUpdate = async (
    id: number,
    data: definitions["NewsLetter"] | definitions["NewsLetter"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await newsletter_update(id.toString(), data, headers);
      let prevStateResults = NewsLetterDataList.results;
      let logActions = NewsLetterDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newNewsLetter;
      if (!Array.isArray(result.data))
        newNewsLetter = prevStateResults.map((el: definitions["NewsLetter"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newNewsLetter = prevStateResults.map((el: definitions["NewsLetter"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      const newNewsLetterserializedById: definitions["NewsLetter"][] = [];
      newNewsLetter.map((el: definitions["NewsLetter"]) => {
        if (el.id) {
          newNewsLetterserializedById[el.id] = el;
        }
      });

      setNewsLetterDataList({
        ...NewsLetterDataList,
        results: newNewsLetterserializedById,
      });

      setLoading(false);
    }
  };

  const newsletterPartial = async (
    id: number,
    data: definitions["NewsLetter"] | definitions["NewsLetter"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await newsletter_partial_update(
        id.toString(),
        data,
        headers
      );
      let prevStateResults = NewsLetterDataList.results;
      let logActions = NewsLetterDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newNewsLetter;
      if (!Array.isArray(result.data))
        newNewsLetter = prevStateResults.map((el: definitions["NewsLetter"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newNewsLetter = prevStateResults.map((el: definitions["NewsLetter"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      const newNewsLetterserializedById: definitions["NewsLetter"][] = [];
      newNewsLetter.map((el: definitions["NewsLetter"]) => {
        if (el.id) {
          newNewsLetterserializedById[el.id] = el;
        }
      });

      setNewsLetterDataList({
        ...NewsLetterDataList,
        results: newNewsLetterserializedById,
      });

      setLoading(false);
    }
  };

  const newsletterDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await newsletter_delete(id.toString(), headers);
      let prevStateResults = NewsLetterDataList.results;
      let logActions = NewsLetterDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newNewsLetter = prevStateResults.filter(
        (el: definitions["NewsLetter"]) => el.id !== id
      );

      const newNewsLetterserializedById: definitions["NewsLetter"][] = [];
      newNewsLetter.map((el: definitions["NewsLetter"]) => {
        if (el.id) {
          newNewsLetterserializedById[el.id] = el;
        }
      });

      setNewsLetterDataList({
        ...NewsLetterDataList,
        results: newNewsLetterserializedById,
      });

      setLoading(false);
    }
  };

  return (
    <NewsletterContext.Provider
      value={{
        count: NewsLetterDataList.count,
        next: NewsLetterDataList.next,
        previous: NewsLetterDataList.previous,
        logActions: NewsLetterDataList.logActions,
        loading: loading,
        newsletterData: NewsLetterDataList.results,

        newsletterListFuncProp: newsletterList,

        newsletterCreateFuncProp: newsletterCreate,

        newsletterReadFuncProp: newsletterRead,

        newsletterUpdateFuncProp: newsletterUpdate,

        newsletterPartialFuncProp: newsletterPartial,

        newsletterDeleteFuncProp: newsletterDelete,
      }}
    >
      {children}
    </NewsletterContext.Provider>
  );
};
