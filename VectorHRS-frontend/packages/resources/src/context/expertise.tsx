import { Api, operations, definitions } from "@vhrs/models";
const {
  expertise_list,
  expertise_create,
  expertise_read,
  expertise_update,
  expertise_partial_update,
  expertise_delete,
} = Api;

import { createContext, useState, FC } from "react";
import { IcontextProvider } from "../types";

interface IAction {
  verb: string;
  results: number | definitions["Expertise"] | definitions["Expertise"][];
}

export interface Iexpertise {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  expertiseData?: definitions["Expertise"][];

  expertiseListFuncProp: (
    data: operations["expertise_list"]["parameters"]
  ) => Promise<void>;

  expertiseCreateFuncProp: (
    data: definitions["Expertise"] | definitions["Expertise"][]
  ) => Promise<void>;

  expertiseReadFuncProp: (id: number) => Promise<void>;

  expertiseUpdateFuncProp: (
    id: number,
    data: definitions["Expertise"] | definitions["Expertise"][]
  ) => Promise<void>;

  expertisePartialFuncProp: (
    id: number,
    data: definitions["Expertise"] | definitions["Expertise"][]
  ) => Promise<void>;

  expertiseDeleteFuncProp: (id: number) => Promise<void>;
}

interface Istate {
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];
  results: definitions["Expertise"][];
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

  expertiseListFuncProp: async (
    data: operations["expertise_list"]["parameters"]
  ): Promise<void> => {},

  expertiseCreateFuncProp: async (
    data: definitions["Expertise"] | definitions["Expertise"][]
  ): Promise<void> => {},

  expertiseReadFuncProp: async (id: number): Promise<void> => {},

  expertiseUpdateFuncProp: async (
    id: number,
    data: definitions["Expertise"] | definitions["Expertise"][]
  ): Promise<void> => {},

  expertisePartialFuncProp: async (
    id: number,
    data: definitions["Expertise"] | definitions["Expertise"][]
  ): Promise<void> => {},

  expertiseDeleteFuncProp: async (id: number): Promise<void> => {},
};
/* prettier-ignore */
export const ExpertiseContext = createContext<Iexpertise>(defaultContextState);
export const ExpertiseProvider: FC<IcontextProvider> = ({
  children,
  headers,
}) => {
  /* prettier-ignore */
  const [ExpertiseDataList, setExpertiseDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const expertiseList = async (
    data: operations["expertise_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await expertise_list(data, headers);
      let prevStateResults = ExpertiseDataList.results;
      let logActions = ExpertiseDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = ExpertiseDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newExpertise = prevStateResults.map(
        (el: definitions["Expertise"]) => {
          const preEl = prevStateResults.filter(
            (resultEl: definitions["Expertise"]) => {
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
        newExpertise = prevStateResults.concat(result.data.results);
      }

      const newExpertiseserializedById: definitions["Expertise"][] = [];
      newExpertise.map((el: definitions["Expertise"]) => {
        if (el.id) {
          newExpertiseserializedById[el.id] = el;
        }
      });

      setExpertiseDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newExpertiseserializedById,
      });

      setLoading(false);
    }
  };

  const expertiseCreate = async (
    data: definitions["Expertise"] | definitions["Expertise"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await expertise_create(data, headers);
      let prevStateResults = ExpertiseDataList.results;
      let logActions = ExpertiseDataList.logActions;

      //Create

      let newCount = ExpertiseDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setExpertiseDataList({
        ...ExpertiseDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const expertiseRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await expertise_read(id.toString(), headers);
      let prevStateResults = ExpertiseDataList.results;
      let logActions = ExpertiseDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newExpertise = prevStateResults.map(
        (el: definitions["Expertise"]) => {
          if (el.id === result.data.id) {
            found = true;
            return { ...el, ...result.data };
          } else {
            return el;
          }
        }
      );
      if (!found) {
        newExpertise.push(result.data);
      }

      const newExpertiseserializedById: definitions["Expertise"][] = [];
      newExpertise.map((el: definitions["Expertise"]) => {
        if (el.id) {
          newExpertiseserializedById[el.id] = el;
        }
      });

      setExpertiseDataList({
        ...ExpertiseDataList,
        results: newExpertiseserializedById,
      });

      setLoading(false);
    }
  };

  const expertiseUpdate = async (
    id: number,
    data: definitions["Expertise"] | definitions["Expertise"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await expertise_update(id.toString(), data, headers);
      let prevStateResults = ExpertiseDataList.results;
      let logActions = ExpertiseDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newExpertise;
      if (!Array.isArray(result.data))
        newExpertise = prevStateResults.map((el: definitions["Expertise"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newExpertise = prevStateResults.map((el: definitions["Expertise"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      const newExpertiseserializedById: definitions["Expertise"][] = [];
      newExpertise.map((el: definitions["Expertise"]) => {
        if (el.id) {
          newExpertiseserializedById[el.id] = el;
        }
      });

      setExpertiseDataList({
        ...ExpertiseDataList,
        results: newExpertiseserializedById,
      });

      setLoading(false);
    }
  };

  const expertisePartial = async (
    id: number,
    data: definitions["Expertise"] | definitions["Expertise"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await expertise_partial_update(
        id.toString(),
        data,
        headers
      );
      let prevStateResults = ExpertiseDataList.results;
      let logActions = ExpertiseDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newExpertise;
      if (!Array.isArray(result.data))
        newExpertise = prevStateResults.map((el: definitions["Expertise"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newExpertise = prevStateResults.map((el: definitions["Expertise"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      const newExpertiseserializedById: definitions["Expertise"][] = [];
      newExpertise.map((el: definitions["Expertise"]) => {
        if (el.id) {
          newExpertiseserializedById[el.id] = el;
        }
      });

      setExpertiseDataList({
        ...ExpertiseDataList,
        results: newExpertiseserializedById,
      });

      setLoading(false);
    }
  };

  const expertiseDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await expertise_delete(id.toString(), headers);
      let prevStateResults = ExpertiseDataList.results;
      let logActions = ExpertiseDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newExpertise = prevStateResults.filter(
        (el: definitions["Expertise"]) => el.id !== id
      );

      const newExpertiseserializedById: definitions["Expertise"][] = [];
      newExpertise.map((el: definitions["Expertise"]) => {
        if (el.id) {
          newExpertiseserializedById[el.id] = el;
        }
      });

      setExpertiseDataList({
        ...ExpertiseDataList,
        results: newExpertiseserializedById,
      });

      setLoading(false);
    }
  };

  return (
    <ExpertiseContext.Provider
      value={{
        count: ExpertiseDataList.count,
        next: ExpertiseDataList.next,
        previous: ExpertiseDataList.previous,
        logActions: ExpertiseDataList.logActions,
        loading: loading,
        expertiseData: ExpertiseDataList.results,

        expertiseListFuncProp: expertiseList,

        expertiseCreateFuncProp: expertiseCreate,

        expertiseReadFuncProp: expertiseRead,

        expertiseUpdateFuncProp: expertiseUpdate,

        expertisePartialFuncProp: expertisePartial,

        expertiseDeleteFuncProp: expertiseDelete,
      }}
    >
      {children}
    </ExpertiseContext.Provider>
  );
};
