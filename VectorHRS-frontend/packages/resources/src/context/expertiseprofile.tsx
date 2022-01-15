import { Api, operations, definitions } from "@vhrs/models";
const {
  expertiseprofile_list,
  expertiseprofile_create,
  expertiseprofile_read,
  expertiseprofile_update,
  expertiseprofile_partial_update,
  expertiseprofile_delete,
} = Api;

import { createContext, useState, FC, ReactNode } from "react";

interface IAction {
  verb: string;
  results:
    | number
    | definitions["ExpertiseProfile"]
    | definitions["ExpertiseProfile"][];
}

interface Iexpertiseprofile {
  loading: boolean;
  count: number;
  next?: string;
  previous?: string;
  logActions: IAction[];

  expertiseprofileData?: definitions["ExpertiseProfile"][];

  expertiseprofileListFuncProp?: (
    data: operations["expertiseprofile_list"]["parameters"]
  ) => Promise<void>;

  expertiseprofileCreateFuncProp?: (
    data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][]
  ) => Promise<void>;

  expertiseprofileReadFuncProp?: (id: number) => Promise<void>;

  expertiseprofileUpdateFuncProp?: (
    id: number,
    data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][]
  ) => Promise<void>;

  expertiseprofilePartialFuncProp?: (
    id: number,
    data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][]
  ) => Promise<void>;

  expertiseprofileDeleteFuncProp?: (id: number) => Promise<void>;
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
  results: definitions["ExpertiseProfile"][];
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
export const ExpertiseprofileContext = createContext<Iexpertiseprofile>(defaultContextState);
export const ExpertiseprofileProvider: FC<IcontextProvider> = ({
  children,
  headers,
}) => {
  /* prettier-ignore */
  const [ExpertiseProfileDataList, setExpertiseProfileDataList] = useState<Istate> (initialState);
  /* prettier-ignore */
  const [loading, setLoading] = useState<boolean> (false);

  const expertiseprofileList = async (
    data: operations["expertiseprofile_list"]["parameters"]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await expertiseprofile_list(data, headers);
      let prevStateResults = ExpertiseProfileDataList.results;
      let logActions = ExpertiseProfileDataList.logActions;

      logActions.push({ verb: "get", results: result.data.results });
      let found = false;
      let newCount = ExpertiseProfileDataList.count + result.data.count;
      let newNext = result.data.next;
      let newPrevious = result.data.previous;

      let newExpertiseProfile = prevStateResults.map(
        (el: definitions["ExpertiseProfile"]) => {
          const preEl = prevStateResults.filter(
            (resultEl: definitions["ExpertiseProfile"]) => {
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
        newExpertiseProfile = prevStateResults.concat(result.data.results);
      }

      setExpertiseProfileDataList({
        count: newCount,
        next: newNext,
        previous: newPrevious,
        logActions: logActions,
        results: newExpertiseProfile,
      });

      setLoading(false);
    }
  };

  const expertiseprofileCreate = async (
    data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][]
  ): Promise<void> => {
    if (data) {
      setLoading(true);
      const result = await expertiseprofile_create(data, headers);
      let prevStateResults = ExpertiseProfileDataList.results;
      let logActions = ExpertiseProfileDataList.logActions;

      //Create

      let newCount = ExpertiseProfileDataList.count;
      logActions.push({ verb: "post", results: result.data });
      if (!Array.isArray(result.data)) {
        newCount = prevStateResults.push(result.data);
      } else {
        prevStateResults = prevStateResults.concat(result.data);
        newCount = prevStateResults.length;
      }

      setExpertiseProfileDataList({
        ...ExpertiseProfileDataList,
        count: newCount,
        results: prevStateResults,
      });

      setLoading(false);
    }
  };

  const expertiseprofileRead = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await expertiseprofile_read(id.toString(), headers);
      let prevStateResults = ExpertiseProfileDataList.results;
      let logActions = ExpertiseProfileDataList.logActions;

      logActions.push({ verb: "get", results: result.data });
      let found = false;
      let newExpertiseProfile = prevStateResults.map(
        (el: definitions["ExpertiseProfile"]) => {
          if (el.id === result.data.id) {
            found = true;
            return { ...el, ...result.data };
          } else {
            return el;
          }
        }
      );
      if (!found) {
        newExpertiseProfile = prevStateResults.concat(result.data);
      }

      setExpertiseProfileDataList({
        ...ExpertiseProfileDataList,
        results: newExpertiseProfile,
      });

      setLoading(false);
    }
  };

  const expertiseprofileUpdate = async (
    id: number,
    data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await expertiseprofile_update(
        id.toString(),
        data,
        headers
      );
      let prevStateResults = ExpertiseProfileDataList.results;
      let logActions = ExpertiseProfileDataList.logActions;

      //update
      logActions.push({ verb: "put", results: result.data });
      let newExpertiseProfile;
      if (!Array.isArray(result.data))
        newExpertiseProfile = prevStateResults.map(
          (el: definitions["ExpertiseProfile"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newExpertiseProfile = prevStateResults.map(
          (el: definitions["ExpertiseProfile"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setExpertiseProfileDataList({
        ...ExpertiseProfileDataList,
        results: newExpertiseProfile,
      });

      setLoading(false);
    }
  };

  const expertiseprofilePartial = async (
    id: number,
    data: definitions["ExpertiseProfile"] | definitions["ExpertiseProfile"][]
  ): Promise<void> => {
    if (id && data) {
      setLoading(true);
      const result = await expertiseprofile_partial_update(
        id.toString(),
        data,
        headers
      );
      let prevStateResults = ExpertiseProfileDataList.results;
      let logActions = ExpertiseProfileDataList.logActions;

      //update
      logActions.push({ verb: "patch", results: result.data });
      let newExpertiseProfile;
      if (!Array.isArray(result.data))
        newExpertiseProfile = prevStateResults.map(
          (el: definitions["ExpertiseProfile"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );
      //update bulk
      else
        newExpertiseProfile = prevStateResults.map(
          (el: definitions["ExpertiseProfile"]) =>
            el.id === result.data.id ? { ...el, ...result.data } : el
        );

      setExpertiseProfileDataList({
        ...ExpertiseProfileDataList,
        results: newExpertiseProfile,
      });

      setLoading(false);
    }
  };

  const expertiseprofileDelete = async (id: number): Promise<void> => {
    if (id) {
      setLoading(true);
      const result = await expertiseprofile_delete(id.toString(), headers);
      let prevStateResults = ExpertiseProfileDataList.results;
      let logActions = ExpertiseProfileDataList.logActions;

      logActions.push({ verb: "delete", results: id });
      //delete
      const newExpertiseProfile = prevStateResults.filter(
        (el: definitions["ExpertiseProfile"]) => el.id !== id
      );

      setExpertiseProfileDataList({
        ...ExpertiseProfileDataList,
        results: newExpertiseProfile,
      });

      setLoading(false);
    }
  };

  return (
    <ExpertiseprofileContext.Provider
      value={{
        count: ExpertiseProfileDataList.count,
        next: ExpertiseProfileDataList.next,
        previous: ExpertiseProfileDataList.previous,
        logActions: ExpertiseProfileDataList.logActions,
        loading: loading,
        expertiseprofileData: ExpertiseProfileDataList.results,

        expertiseprofileListFuncProp: expertiseprofileList,

        expertiseprofileCreateFuncProp: expertiseprofileCreate,

        expertiseprofileReadFuncProp: expertiseprofileRead,

        expertiseprofileUpdateFuncProp: expertiseprofileUpdate,

        expertiseprofilePartialFuncProp: expertiseprofilePartial,

        expertiseprofileDeleteFuncProp: expertiseprofileDelete,
      }}
    >
      {children}
    </ExpertiseprofileContext.Provider>
  );
};
