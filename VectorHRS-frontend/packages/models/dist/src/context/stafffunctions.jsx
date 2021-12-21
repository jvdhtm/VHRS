import { stafffunctions_list, stafffunctions_create, stafffunctions_read, stafffunctions_update, stafffunctions_partial_update, stafffunctions_delete, } from "../api";
import { createContext, useState } from "react";
const initialState = {
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
const StafffunctionsContext = createContext(defaultContextState);
export const StafffunctionsProvider = ({ children, headers, }) => {
    /* prettier-ignore */
    const [StaffFunctionsDataList, setStaffFunctionsDataList] = useState(initialState);
    /* prettier-ignore */
    const [loading, setLoading] = useState(false);
    const stafffunctionsList = async (data) => {
        if (data) {
            setLoading(true);
            const result = await stafffunctions_list(data, headers);
            let prevStateResults = StaffFunctionsDataList.results;
            let logActions = StaffFunctionsDataList.logActions;
            logActions.push({ verb: "get", results: result.data.results });
            let found = false;
            let newCount = StaffFunctionsDataList.count + result.data.count;
            let newNext = result.data.next;
            let newPrevious = result.data.previous;
            let newStaffFunctions = prevStateResults.map((el) => {
                const preEl = prevStateResults.filter((resultEl) => {
                    return el.id === resultEl.id;
                });
                if (preEl.length > 0) {
                    found = true;
                    return { ...el, ...preEl[0] };
                }
                else {
                    return el;
                }
            });
            if (!found) {
                newStaffFunctions = prevStateResults.concat(result.data.results);
            }
            setStaffFunctionsDataList({
                count: newCount,
                next: newNext,
                previous: newPrevious,
                logActions: logActions,
                results: newStaffFunctions,
            });
            setLoading(false);
        }
    };
    const stafffunctionsCreate = async (data) => {
        if (data) {
            setLoading(true);
            const result = await stafffunctions_create(data, headers);
            let prevStateResults = StaffFunctionsDataList.results;
            let logActions = StaffFunctionsDataList.logActions;
            //Create
            let newCount = StaffFunctionsDataList.count;
            logActions.push({ verb: "post", results: result.data });
            if (!Array.isArray(result.data)) {
                newCount = prevStateResults.push(result.data);
            }
            else {
                prevStateResults = prevStateResults.concat(result.data);
                newCount = prevStateResults.length;
            }
            setStaffFunctionsDataList({
                ...StaffFunctionsDataList,
                count: newCount,
                results: prevStateResults,
            });
            setLoading(false);
        }
    };
    const stafffunctionsRead = async (id) => {
        if (id) {
            setLoading(true);
            const result = await stafffunctions_read(id.toString(), headers);
            let prevStateResults = StaffFunctionsDataList.results;
            let logActions = StaffFunctionsDataList.logActions;
            logActions.push({ verb: "get", results: result.data });
            let found = false;
            let newStaffFunctions = prevStateResults.map((el) => {
                if (el.id === result.data.id) {
                    found = true;
                    return { ...el, ...result.data };
                }
                else {
                    return el;
                }
            });
            if (!found) {
                newStaffFunctions = prevStateResults.concat(result.data);
            }
            setStaffFunctionsDataList({
                ...StaffFunctionsDataList,
                results: newStaffFunctions,
            });
            setLoading(false);
        }
    };
    const stafffunctionsUpdate = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await stafffunctions_update(id.toString(), data, headers);
            let prevStateResults = StaffFunctionsDataList.results;
            let logActions = StaffFunctionsDataList.logActions;
            //update
            logActions.push({ verb: "put", results: result.data });
            let newStaffFunctions;
            if (!Array.isArray(result.data))
                newStaffFunctions = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newStaffFunctions = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setStaffFunctionsDataList({
                ...StaffFunctionsDataList,
                results: newStaffFunctions,
            });
            setLoading(false);
        }
    };
    const stafffunctionsPartial = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await stafffunctions_partial_update(id.toString(), data, headers);
            let prevStateResults = StaffFunctionsDataList.results;
            let logActions = StaffFunctionsDataList.logActions;
            //update
            logActions.push({ verb: "patch", results: result.data });
            let newStaffFunctions;
            if (!Array.isArray(result.data))
                newStaffFunctions = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newStaffFunctions = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setStaffFunctionsDataList({
                ...StaffFunctionsDataList,
                results: newStaffFunctions,
            });
            setLoading(false);
        }
    };
    const stafffunctionsDelete = async (id) => {
        if (id) {
            setLoading(true);
            const result = await stafffunctions_delete(id.toString(), headers);
            let prevStateResults = StaffFunctionsDataList.results;
            let logActions = StaffFunctionsDataList.logActions;
            logActions.push({ verb: "delete", results: id });
            //delete
            const newStaffFunctions = prevStateResults.filter((el) => el.id !== id);
            setStaffFunctionsDataList({
                ...StaffFunctionsDataList,
                results: newStaffFunctions,
            });
            setLoading(false);
        }
    };
    return (<StafffunctionsContext.Provider value={{
            count: StaffFunctionsDataList.count,
            next: StaffFunctionsDataList.next,
            previous: StaffFunctionsDataList.previous,
            logActions: StaffFunctionsDataList.logActions,
            loading: loading,
            stafffunctionsData: StaffFunctionsDataList.results,
            stafffunctionsListFuncProp: stafffunctionsList,
            stafffunctionsCreateFuncProp: stafffunctionsCreate,
            stafffunctionsReadFuncProp: stafffunctionsRead,
            stafffunctionsUpdateFuncProp: stafffunctionsUpdate,
            stafffunctionsPartialFuncProp: stafffunctionsPartial,
            stafffunctionsDeleteFuncProp: stafffunctionsDelete,
        }}>
      {children}
    </StafffunctionsContext.Provider>);
};
//# sourceMappingURL=stafffunctions.jsx.map