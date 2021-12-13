import { operations, definitions } from "../Schemas";
import {
  phone_list,
  phone_create,
  phone_read,
  phone_update,
  phone_partial_update,
  phone_delete,
} from "../api";

import { createContext, useState, FC, ReactNode } from "react";

interface IAction {
  verb: string;
  results: number | definitions["Phone"] | definitions["Phone"][];
}

interface Iphone {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  phoneData?: definitions["Phone"][];

  phoneListFuncProp?: (
    data: operations["phone_list"]["parameters"]
  ) => Promise<void>;

  phoneCreateFuncProp?: (
    data: definitions["Phone"] | definitions["Phone"][]
  ) => Promise<void>;

  phoneReadFuncProp?: (id: number) => Promise<void>;

  phoneUpdateFuncProp?: (
    id: number,
    data: definitions["Phone"] | definitions["Phone"][]
  ) => Promise<void>;

  phonePartialFuncProp?: (
    id: number,
    data: definitions["Phone"] | definitions["Phone"][]
  ) => Promise<void>;

  phoneDeleteFuncProp?: (id: number) => Promise<void>;
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
  results: definitions["Phone"][];
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
const PhoneContext = createContext<Iphone>(defaultContextState);
export const PhoneProvider: FC<IcontextProvider> = ({ children, headers }) => {
  /* prettier-ignore */
  const [PhoneDataList, setPhoneDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const phoneList = async (
    data: operations["phone_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await phone_list(data, headers);
      let prevStateResults = PhoneDataList.results;
      let logActions = PhoneDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = PhoneDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newPhone = prevStateResults.map((el: definitions["Phone"]) => {
        const preEl = prevStateResults.filter(
          (resultEl: definitions["Phone"]) => {
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
        newPhone = prevStateResults.concat(result.data.results);
      }

      setPhoneDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newPhone,
      });

      setLoading(false);
    }
  };

  const phoneCreate = async (
    data: definitions["Phone"] | definitions["Phone"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await phone_create(data, headers);
      let prevStateResults = PhoneDataList.results;
      let logActions = PhoneDataList.logActions;

      //Create

      let newCount = PhoneDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setPhoneDataList({
        ...PhoneDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const phoneRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await phone_read(id.toString(), headers);
      let prevStateResults = PhoneDataList.results;
      let logActions = PhoneDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newPhone = prevStateResults.map((el: definitions["Phone"]) => {
        if (el.id === result.data.id) {
          found = true;
          return { ...el, ...result.data };
        } else {
          return el;
        }
      });
      if (!found) {
        newPhone = prevStateResults.concat(result.data);
      }

      setPhoneDataList({
        ...PhoneDataList,
        results: newPhone,
      });

      setLoading(false);
    }
  };

  const phoneUpdate = async (
    id: number,
    data: definitions["Phone"] | definitions["Phone"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await phone_update(id.toString(), data, headers);
      let prevStateResults = PhoneDataList.results;
      let logActions = PhoneDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newPhone;
      if (!Array.isArray(result.data))
        newPhone = prevStateResults.map((el: definitions["Phone"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newPhone = prevStateResults.map((el: definitions["Phone"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setPhoneDataList({
        ...PhoneDataList,
        results: newPhone,
      });

      setLoading(false);
    }
  };

  const phonePartial = async (
    id: number,
    data: definitions["Phone"] | definitions["Phone"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await phone_partial_update(id.toString(), data, headers);
      let prevStateResults = PhoneDataList.results;
      let logActions = PhoneDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newPhone;
      if (!Array.isArray(result.data))
        newPhone = prevStateResults.map((el: definitions["Phone"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newPhone = prevStateResults.map((el: definitions["Phone"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setPhoneDataList({
        ...PhoneDataList,
        results: newPhone,
      });

      setLoading(false);
    }
  };

  const phoneDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await phone_delete(id.toString(), headers);
      let prevStateResults = PhoneDataList.results;
      let logActions = PhoneDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newPhone = prevStateResults.filter(
        (el: definitions["Phone"]) => el.id !== id
      );

      setPhoneDataList({
        ...PhoneDataList,
        results: newPhone,
      });

      setLoading(false);
    }
  };

  return (
    <PhoneContext.Provider
      value={{
        count: PhoneDataList.count,
        next: PhoneDataList.next,
        previous: PhoneDataList.previous,
        logActions: PhoneDataList.logActions,
        loading: loading,
        phoneData: PhoneDataList.results,

        phoneListFuncProp: phoneList,

        phoneCreateFuncProp: phoneCreate,

        phoneReadFuncProp: phoneRead,

        phoneUpdateFuncProp: phoneUpdate,

        phonePartialFuncProp: phonePartial,

        phoneDeleteFuncProp: phoneDelete,
      }}
    >
      {children}
    </PhoneContext.Provider>
  );
};
