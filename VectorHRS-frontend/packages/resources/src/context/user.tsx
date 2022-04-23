import { Api, operations, definitions } from "@vhrs/models";
const {
  user_list,
  user_create,
  user_read,
  user_update,
  user_partial_update,
  user_delete,
} = Api;

import { createContext, useState, FC } from "react";
import { IcontextProvider } from "../types";

interface IAction {
  verb: string;
  results: number | definitions["User"] | definitions["User"][];
}

export interface Iuser {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  userData?: definitions["User"][];

  userListFuncProp: (
    data: operations["user_list"]["parameters"]
  ) => Promise<void>;

  userCreateFuncProp: (
    data: definitions["User"] | definitions["User"][]
  ) => Promise<void>;

  userReadFuncProp: (id: number) => Promise<void>;

  userUpdateFuncProp: (
    id: number,
    data: definitions["User"] | definitions["User"][]
  ) => Promise<void>;

  userPartialFuncProp: (
    id: number,
    data: definitions["User"] | definitions["User"][]
  ) => Promise<void>;

  userDeleteFuncProp: (id: number) => Promise<void>;
}

interface Istate {
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];
  results: definitions["User"][];
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

  userListFuncProp: async (
    data: operations["user_list"]["parameters"]
  ): Promise<void> => {},

  userCreateFuncProp: async (
    data: definitions["User"] | definitions["User"][]
  ): Promise<void> => {},

  userReadFuncProp: async (id: number): Promise<void> => {},

  userUpdateFuncProp: async (
    id: number,
    data: definitions["User"] | definitions["User"][]
  ): Promise<void> => {},

  userPartialFuncProp: async (
    id: number,
    data: definitions["User"] | definitions["User"][]
  ): Promise<void> => {},

  userDeleteFuncProp: async (id: number): Promise<void> => {},
};
/* prettier-ignore */
export const UserContext = createContext<Iuser>(defaultContextState);
export const UserProvider: FC<IcontextProvider> = ({ children, headers }) => {
  /* prettier-ignore */
  const [UserDataList, setUserDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const userList = async (
    data: operations["user_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await user_list(data, headers);
      let prevStateResults = UserDataList.results;
      let logActions = UserDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = UserDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newUser = prevStateResults.map((el: definitions["User"]) => {
        const preEl = prevStateResults.filter(
          (resultEl: definitions["User"]) => {
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
        newUser = prevStateResults.concat(result.data.results);
      }

      setUserDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newUser,
      });

      setLoading(false);
    }
  };

  const userCreate = async (
    data: definitions["User"] | definitions["User"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await user_create(data, headers);
      let prevStateResults = UserDataList.results;
      let logActions = UserDataList.logActions;

      //Create

      let newCount = UserDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setUserDataList({
        ...UserDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const userRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await user_read(id.toString(), headers);
      let prevStateResults = UserDataList.results;
      let logActions = UserDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newUser = prevStateResults.map((el: definitions["User"]) => {
        if (el.id === result.data.id) {
          found = true;
          return { ...el, ...result.data };
        } else {
          return el;
        }
      });
      if (!found) {
        newUser = prevStateResults.concat(result.data);
      }

      setUserDataList({
        ...UserDataList,
        results: newUser,
      });

      setLoading(false);
    }
  };

  const userUpdate = async (
    id: number,
    data: definitions["User"] | definitions["User"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await user_update(id.toString(), data, headers);
      let prevStateResults = UserDataList.results;
      let logActions = UserDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newUser;
      if (!Array.isArray(result.data))
        newUser = prevStateResults.map((el: definitions["User"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newUser = prevStateResults.map((el: definitions["User"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setUserDataList({
        ...UserDataList,
        results: newUser,
      });

      setLoading(false);
    }
  };

  const userPartial = async (
    id: number,
    data: definitions["User"] | definitions["User"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await user_partial_update(id.toString(), data, headers);
      let prevStateResults = UserDataList.results;
      let logActions = UserDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newUser;
      if (!Array.isArray(result.data))
        newUser = prevStateResults.map((el: definitions["User"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newUser = prevStateResults.map((el: definitions["User"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setUserDataList({
        ...UserDataList,
        results: newUser,
      });

      setLoading(false);
    }
  };

  const userDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await user_delete(id.toString(), headers);
      let prevStateResults = UserDataList.results;
      let logActions = UserDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newUser = prevStateResults.filter(
        (el: definitions["User"]) => el.id !== id
      );

      setUserDataList({
        ...UserDataList,
        results: newUser,
      });

      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        count: UserDataList.count,
        next: UserDataList.next,
        previous: UserDataList.previous,
        logActions: UserDataList.logActions,
        loading: loading,
        userData: UserDataList.results,

        userListFuncProp: userList,

        userCreateFuncProp: userCreate,

        userReadFuncProp: userRead,

        userUpdateFuncProp: userUpdate,

        userPartialFuncProp: userPartial,

        userDeleteFuncProp: userDelete,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
