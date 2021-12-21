import { operations, definitions } from "../Schemas";
import { Api } from "@vhrs/models";
const {
  staff_list,
  staff_create,
  staff_read,
  staff_update,
  staff_partial_update,
  staff_delete,
} = Api;

import { createContext, useState, FC, ReactNode } from "react";

interface IAction {
  verb: string;
  results: number | definitions["Staff"] | definitions["Staff"][];
}

interface Istaff {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  staffData?: definitions["Staff"][];

  staffListFuncProp?: (
    data: operations["staff_list"]["parameters"]
  ) => Promise<void>;

  staffCreateFuncProp?: (
    data: definitions["Staff"] | definitions["Staff"][]
  ) => Promise<void>;

  staffReadFuncProp?: (id: number) => Promise<void>;

  staffUpdateFuncProp?: (
    id: number,
    data: definitions["Staff"] | definitions["Staff"][]
  ) => Promise<void>;

  staffPartialFuncProp?: (
    id: number,
    data: definitions["Staff"] | definitions["Staff"][]
  ) => Promise<void>;

  staffDeleteFuncProp?: (id: number) => Promise<void>;
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
  results: definitions["Staff"][];
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
const StaffContext = createContext<Istaff>(defaultContextState);
export const StaffProvider: FC<IcontextProvider> = ({ children, headers }) => {
  /* prettier-ignore */
  const [StaffDataList, setStaffDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const staffList = async (
    data: operations["staff_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await staff_list(data, headers);
      let prevStateResults = StaffDataList.results;
      let logActions = StaffDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = StaffDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newStaff = prevStateResults.map((el: definitions["Staff"]) => {
        const preEl = prevStateResults.filter(
          (resultEl: definitions["Staff"]) => {
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
        newStaff = prevStateResults.concat(result.data.results);
      }

      setStaffDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newStaff,
      });

      setLoading(false);
    }
  };

  const staffCreate = async (
    data: definitions["Staff"] | definitions["Staff"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await staff_create(data, headers);
      let prevStateResults = StaffDataList.results;
      let logActions = StaffDataList.logActions;

      //Create

      let newCount = StaffDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setStaffDataList({
        ...StaffDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const staffRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await staff_read(id.toString(), headers);
      let prevStateResults = StaffDataList.results;
      let logActions = StaffDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newStaff = prevStateResults.map((el: definitions["Staff"]) => {
        if (el.id === result.data.id) {
          found = true;
          return { ...el, ...result.data };
        } else {
          return el;
        }
      });
      if (!found) {
        newStaff = prevStateResults.concat(result.data);
      }

      setStaffDataList({
        ...StaffDataList,
        results: newStaff,
      });

      setLoading(false);
    }
  };

  const staffUpdate = async (
    id: number,
    data: definitions["Staff"] | definitions["Staff"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await staff_update(id.toString(), data, headers);
      let prevStateResults = StaffDataList.results;
      let logActions = StaffDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newStaff;
      if (!Array.isArray(result.data))
        newStaff = prevStateResults.map((el: definitions["Staff"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newStaff = prevStateResults.map((el: definitions["Staff"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setStaffDataList({
        ...StaffDataList,
        results: newStaff,
      });

      setLoading(false);
    }
  };

  const staffPartial = async (
    id: number,
    data: definitions["Staff"] | definitions["Staff"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await staff_partial_update(id.toString(), data, headers);
      let prevStateResults = StaffDataList.results;
      let logActions = StaffDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newStaff;
      if (!Array.isArray(result.data))
        newStaff = prevStateResults.map((el: definitions["Staff"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newStaff = prevStateResults.map((el: definitions["Staff"]) =>
          el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setStaffDataList({
        ...StaffDataList,
        results: newStaff,
      });

      setLoading(false);
    }
  };

  const staffDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await staff_delete(id.toString(), headers);
      let prevStateResults = StaffDataList.results;
      let logActions = StaffDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newStaff = prevStateResults.filter(
        (el: definitions["Staff"]) => el.id !== id
      );

      setStaffDataList({
        ...StaffDataList,
        results: newStaff,
      });

      setLoading(false);
    }
  };

  return (
    <StaffContext.Provider
      value={{
        count: StaffDataList.count,
        next: StaffDataList.next,
        previous: StaffDataList.previous,
        logActions: StaffDataList.logActions,
        loading: loading,
        staffData: StaffDataList.results,

        staffListFuncProp: staffList,

        staffCreateFuncProp: staffCreate,

        staffReadFuncProp: staffRead,

        staffUpdateFuncProp: staffUpdate,

        staffPartialFuncProp: staffPartial,

        staffDeleteFuncProp: staffDelete,
      }}
    >
      {children}
    </StaffContext.Provider>
  );
};
