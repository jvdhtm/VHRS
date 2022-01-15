import { Api, operations, definitions } from "@vhrs/models";
const {
  department_list,
  department_create,
  department_read,
  department_update,
  department_partial_update,
  department_delete,
} = Api;

import { createContext, useState, FC, ReactNode } from "react";

interface IAction {
  verb: string;
  results: number | definitions["Department"] | definitions["Department"][];
}

interface Idepartment {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  departmentData?: definitions["Department"][];

  departmentListFuncProp?: (
    data: operations["department_list"]["parameters"]
  ) => Promise<void>;

  departmentCreateFuncProp?: (
    data: definitions["Department"] | definitions["Department"][]
  ) => Promise<void>;

  departmentReadFuncProp?: (id: number) => Promise<void>;

  departmentUpdateFuncProp?: (
    id: number,
    data: definitions["Department"] | definitions["Department"][]
  ) => Promise<void>;

  departmentPartialFuncProp?: (
    id: number,
    data: definitions["Department"] | definitions["Department"][]
  ) => Promise<void>;

  departmentDeleteFuncProp?: (id: number) => Promise<void>;
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
  results: definitions["Department"][];
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
export const DepartmentContext = createContext<Idepartment>(defaultContextState);
export const DepartmentProvider: FC<IcontextProvider> = ({
  children,
  headers,
}) => {
  /* prettier-ignore */
  const [DepartmentDataList, setDepartmentDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const departmentList = async (
    data: operations["department_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await department_list(data, headers);
      let prevStateResults = DepartmentDataList.results;
      let logActions = DepartmentDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = DepartmentDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newDepartment = prevStateResults.map(
        (el: definitions["Department"]) => {
          const preEl = prevStateResults.filter(
            (resultEl: definitions["Department"]) => {
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
        newDepartment = prevStateResults.concat(result.data.results);
      }

      setDepartmentDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newDepartment,
      });

      setLoading(false);
    }
  };

  const departmentCreate = async (
    data: definitions["Department"] | definitions["Department"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await department_create(data, headers);
      let prevStateResults = DepartmentDataList.results;
      let logActions = DepartmentDataList.logActions;

      //Create

      let newCount = DepartmentDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setDepartmentDataList({
        ...DepartmentDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const departmentRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await department_read(id.toString(), headers);
      let prevStateResults = DepartmentDataList.results;
      let logActions = DepartmentDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newDepartment = prevStateResults.map(
        (el: definitions["Department"]) => {
          if (el.id === result.data.id) {
            found = true;
            return { ...el, ...result.data };
          } else {
            return el;
          }
        }
      );
      if (!found) {
        newDepartment = prevStateResults.concat(result.data);
      }

      setDepartmentDataList({
        ...DepartmentDataList,
        results: newDepartment,
      });

      setLoading(false);
    }
  };

  const departmentUpdate = async (
    id: number,
    data: definitions["Department"] | definitions["Department"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await department_update(id.toString(), data, headers);
      let prevStateResults = DepartmentDataList.results;
      let logActions = DepartmentDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newDepartment;
      if (!Array.isArray(result.data))
        newDepartment = prevStateResults.map((el: definitions["Department"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newDepartment = prevStateResults.map((el: definitions["Department"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setDepartmentDataList({
        ...DepartmentDataList,
        results: newDepartment,
      });

      setLoading(false);
    }
  };

  const departmentPartial = async (
    id: number,
    data: definitions["Department"] | definitions["Department"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await department_partial_update(
        id.toString(),
        data,
        headers
      );
      let prevStateResults = DepartmentDataList.results;
      let logActions = DepartmentDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newDepartment;
      if (!Array.isArray(result.data))
        newDepartment = prevStateResults.map((el: definitions["Department"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newDepartment = prevStateResults.map((el: definitions["Department"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setDepartmentDataList({
        ...DepartmentDataList,
        results: newDepartment,
      });

      setLoading(false);
    }
  };

  const departmentDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await department_delete(id.toString(), headers);
      let prevStateResults = DepartmentDataList.results;
      let logActions = DepartmentDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newDepartment = prevStateResults.filter(
        (el: definitions["Department"]) => el.id !== id
      );

      setDepartmentDataList({
        ...DepartmentDataList,
        results: newDepartment,
      });

      setLoading(false);
    }
  };

  return (
    <DepartmentContext.Provider
      value={{
        count: DepartmentDataList.count,
        next: DepartmentDataList.next,
        previous: DepartmentDataList.previous,
        logActions: DepartmentDataList.logActions,
        loading: loading,
        departmentData: DepartmentDataList.results,

        departmentListFuncProp: departmentList,

        departmentCreateFuncProp: departmentCreate,

        departmentReadFuncProp: departmentRead,

        departmentUpdateFuncProp: departmentUpdate,

        departmentPartialFuncProp: departmentPartial,

        departmentDeleteFuncProp: departmentDelete,
      }}
    >
      {children}
    </DepartmentContext.Provider>
  );
};
