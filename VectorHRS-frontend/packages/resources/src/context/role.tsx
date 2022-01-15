import { Api, operations, definitions } from "@vhrs/models";
const {
  role_list,
  role_create,
  role_read,
  role_update,
  role_partial_update,
  role_delete,
} = Api;

import { createContext, useState, FC, ReactNode } from "react";

interface IAction {
  verb: string;
  results: number | definitions["Role"] | definitions["Role"][];
}

interface Irole {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  roleData?: definitions["Role"][];

  roleListFuncProp?: (
    data: operations["role_list"]["parameters"]
  ) => Promise<void>;

  roleCreateFuncProp?: (
    data: definitions["Role"] | definitions["Role"][]
  ) => Promise<void>;

  roleReadFuncProp?: (id: number) => Promise<void>;

  roleUpdateFuncProp?: (
    id: number,
    data: definitions["Role"] | definitions["Role"][]
  ) => Promise<void>;

  rolePartialFuncProp?: (
    id: number,
    data: definitions["Role"] | definitions["Role"][]
  ) => Promise<void>;

  roleDeleteFuncProp?: (id: number) => Promise<void>;
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
  results: definitions["Role"][];
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
export const RoleContext = createContext<Irole>(defaultContextState);
export const RoleProvider: FC<IcontextProvider> = ({ children, headers }) => {
  /* prettier-ignore */
  const [RoleDataList, setRoleDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const roleList = async (
    data: operations["role_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await role_list(data, headers);
      let prevStateResults = RoleDataList.results;
      let logActions = RoleDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = RoleDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newRole = prevStateResults.map((el: definitions["Role"]) => {
        const preEl = prevStateResults.filter(
          (resultEl: definitions["Role"]) => {
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
        newRole = prevStateResults.concat(result.data.results);
      }

      setRoleDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newRole,
      });

      setLoading(false);
    }
  };

  const roleCreate = async (
    data: definitions["Role"] | definitions["Role"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await role_create(data, headers);
      let prevStateResults = RoleDataList.results;
      let logActions = RoleDataList.logActions;

      //Create

      let newCount = RoleDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setRoleDataList({
        ...RoleDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const roleRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await role_read(id.toString(), headers);
      let prevStateResults = RoleDataList.results;
      let logActions = RoleDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newRole = prevStateResults.map((el: definitions["Role"]) => {
        if (el.id === result.data.id) {
          found = true;
          return { ...el, ...result.data };
        } else {
          return el;
        }
      });
      if (!found) {
        newRole = prevStateResults.concat(result.data);
      }

      setRoleDataList({
        ...RoleDataList,
        results: newRole,
      });

      setLoading(false);
    }
  };

  const roleUpdate = async (
    id: number,
    data: definitions["Role"] | definitions["Role"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await role_update(id.toString(), data, headers);
      let prevStateResults = RoleDataList.results;
      let logActions = RoleDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newRole;
      if (!Array.isArray(result.data))
        newRole = prevStateResults.map((el: definitions["Role"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newRole = prevStateResults.map((el: definitions["Role"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setRoleDataList({
        ...RoleDataList,
        results: newRole,
      });

      setLoading(false);
    }
  };

  const rolePartial = async (
    id: number,
    data: definitions["Role"] | definitions["Role"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await role_partial_update(id.toString(), data, headers);
      let prevStateResults = RoleDataList.results;
      let logActions = RoleDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newRole;
      if (!Array.isArray(result.data))
        newRole = prevStateResults.map((el: definitions["Role"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newRole = prevStateResults.map((el: definitions["Role"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setRoleDataList({
        ...RoleDataList,
        results: newRole,
      });

      setLoading(false);
    }
  };

  const roleDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await role_delete(id.toString(), headers);
      let prevStateResults = RoleDataList.results;
      let logActions = RoleDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newRole = prevStateResults.filter(
        (el: definitions["Role"]) => el.id !== id
      );

      setRoleDataList({
        ...RoleDataList,
        results: newRole,
      });

      setLoading(false);
    }
  };

  return (
    <RoleContext.Provider
      value={{
        count: RoleDataList.count,
        next: RoleDataList.next,
        previous: RoleDataList.previous,
        logActions: RoleDataList.logActions,
        loading: loading,
        roleData: RoleDataList.results,

        roleListFuncProp: roleList,

        roleCreateFuncProp: roleCreate,

        roleReadFuncProp: roleRead,

        roleUpdateFuncProp: roleUpdate,

        rolePartialFuncProp: rolePartial,

        roleDeleteFuncProp: roleDelete,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};
