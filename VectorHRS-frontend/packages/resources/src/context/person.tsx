import { operations, definitions } from "../Schemas";
import { Api } from "@vhrs/models";
const {
  person_list,
  person_create,
  person_read,
  person_update,
  person_partial_update,
  person_delete,
} = Api;

import { createContext, useState, FC, ReactNode } from "react";

interface IAction {
  verb: string;
  results: number | definitions["Person"] | definitions["Person"][];
}

interface Iperson {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  personData?: definitions["Person"][];

  personListFuncProp?: (
    data: operations["person_list"]["parameters"]
  ) => Promise<void>;

  personCreateFuncProp?: (
    data: definitions["Person"] | definitions["Person"][]
  ) => Promise<void>;

  personReadFuncProp?: (id: number) => Promise<void>;

  personUpdateFuncProp?: (
    id: number,
    data: definitions["Person"] | definitions["Person"][]
  ) => Promise<void>;

  personPartialFuncProp?: (
    id: number,
    data: definitions["Person"] | definitions["Person"][]
  ) => Promise<void>;

  personDeleteFuncProp?: (id: number) => Promise<void>;
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
  results: definitions["Person"][];
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
const PersonContext = createContext<Iperson>(defaultContextState);
export const PersonProvider: FC<IcontextProvider> = ({ children, headers }) => {
  /* prettier-ignore */
  const [PersonDataList, setPersonDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const personList = async (
    data: operations["person_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await person_list(data, headers);
      let prevStateResults = PersonDataList.results;
      let logActions = PersonDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = PersonDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newPerson = prevStateResults.map((el: definitions["Person"]) => {
        const preEl = prevStateResults.filter(
          (resultEl: definitions["Person"]) => {
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
        newPerson = prevStateResults.concat(result.data.results);
      }

      setPersonDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newPerson,
      });

      setLoading(false);
    }
  };

  const personCreate = async (
    data: definitions["Person"] | definitions["Person"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await person_create(data, headers);
      let prevStateResults = PersonDataList.results;
      let logActions = PersonDataList.logActions;

      //Create

      let newCount = PersonDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setPersonDataList({
        ...PersonDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const personRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await person_read(id.toString(), headers);
      let prevStateResults = PersonDataList.results;
      let logActions = PersonDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newPerson = prevStateResults.map((el: definitions["Person"]) => {
        if (el.id === result.data.id) {
          found = true;
          return { ...el, ...result.data };
        } else {
          return el;
        }
      });
      if (!found) {
        newPerson = prevStateResults.concat(result.data);
      }

      setPersonDataList({
        ...PersonDataList,
        results: newPerson,
      });

      setLoading(false);
    }
  };

  const personUpdate = async (
    id: number,
    data: definitions["Person"] | definitions["Person"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await person_update(id.toString(), data, headers);
      let prevStateResults = PersonDataList.results;
      let logActions = PersonDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newPerson;
      if (!Array.isArray(result.data))
        newPerson = prevStateResults.map((el: definitions["Person"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newPerson = prevStateResults.map((el: definitions["Person"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setPersonDataList({
        ...PersonDataList,
        results: newPerson,
      });

      setLoading(false);
    }
  };

  const personPartial = async (
    id: number,
    data: definitions["Person"] | definitions["Person"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await person_partial_update(id.toString(), data, headers);
      let prevStateResults = PersonDataList.results;
      let logActions = PersonDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newPerson;
      if (!Array.isArray(result.data))
        newPerson = prevStateResults.map((el: definitions["Person"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newPerson = prevStateResults.map((el: definitions["Person"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setPersonDataList({
        ...PersonDataList,
        results: newPerson,
      });

      setLoading(false);
    }
  };

  const personDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await person_delete(id.toString(), headers);
      let prevStateResults = PersonDataList.results;
      let logActions = PersonDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newPerson = prevStateResults.filter(
        (el: definitions["Person"]) => el.id !== id
      );

      setPersonDataList({
        ...PersonDataList,
        results: newPerson,
      });

      setLoading(false);
    }
  };

  return (
    <PersonContext.Provider
      value={{
        count: PersonDataList.count,
        next: PersonDataList.next,
        previous: PersonDataList.previous,
        logActions: PersonDataList.logActions,
        loading: loading,
        personData: PersonDataList.results,

        personListFuncProp: personList,

        personCreateFuncProp: personCreate,

        personReadFuncProp: personRead,

        personUpdateFuncProp: personUpdate,

        personPartialFuncProp: personPartial,

        personDeleteFuncProp: personDelete,
      }}
    >
      {children}
    </PersonContext.Provider>
  );
};
