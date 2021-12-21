import { Api } from "@vhrs/models";
const { staff_list, staff_create, staff_read, staff_update, staff_partial_update, staff_delete, } = Api;
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
const StaffContext = createContext(defaultContextState);
export const StaffProvider = ({ children, headers }) => {
    /* prettier-ignore */
    const [StaffDataList, setStaffDataList] = useState(initialState);
    /* prettier-ignore */
    const [loading, setLoading] = useState(false);
    const staffList = async (data) => {
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
            let newStaff = prevStateResults.map((el) => {
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
    const staffCreate = async (data) => {
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
            }
            else {
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
    const staffRead = async (id) => {
        if (id) {
            setLoading(true);
            const result = await staff_read(id.toString(), headers);
            let prevStateResults = StaffDataList.results;
            let logActions = StaffDataList.logActions;
            logActions.push({ verb: "get", results: result.data });
            let found = false;
            let newStaff = prevStateResults.map((el) => {
                if (el.id === result.data.id) {
                    found = true;
                    return { ...el, ...result.data };
                }
                else {
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
    const staffUpdate = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await staff_update(id.toString(), data, headers);
            let prevStateResults = StaffDataList.results;
            let logActions = StaffDataList.logActions;
            //update
            logActions.push({ verb: "put", results: result.data });
            let newStaff;
            if (!Array.isArray(result.data))
                newStaff = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newStaff = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setStaffDataList({
                ...StaffDataList,
                results: newStaff,
            });
            setLoading(false);
        }
    };
    const staffPartial = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await staff_partial_update(id.toString(), data, headers);
            let prevStateResults = StaffDataList.results;
            let logActions = StaffDataList.logActions;
            //update
            logActions.push({ verb: "patch", results: result.data });
            let newStaff;
            if (!Array.isArray(result.data))
                newStaff = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newStaff = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setStaffDataList({
                ...StaffDataList,
                results: newStaff,
            });
            setLoading(false);
        }
    };
    const staffDelete = async (id) => {
        if (id) {
            setLoading(true);
            const result = await staff_delete(id.toString(), headers);
            let prevStateResults = StaffDataList.results;
            let logActions = StaffDataList.logActions;
            logActions.push({ verb: "delete", results: id });
            //delete
            const newStaff = prevStateResults.filter((el) => el.id !== id);
            setStaffDataList({
                ...StaffDataList,
                results: newStaff,
            });
            setLoading(false);
        }
    };
    return (<StaffContext.Provider value={{
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
        }}>
      {children}
    </StaffContext.Provider>);
};
//# sourceMappingURL=staff.jsx.map