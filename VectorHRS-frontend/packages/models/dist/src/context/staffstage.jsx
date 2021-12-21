import { staffstage_list, staffstage_create, staffstage_read, staffstage_update, staffstage_partial_update, staffstage_delete, } from "../api";
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
const StaffstageContext = createContext(defaultContextState);
export const StaffstageProvider = ({ children, headers, }) => {
    /* prettier-ignore */
    const [StaffStageDataList, setStaffStageDataList] = useState(initialState);
    /* prettier-ignore */
    const [loading, setLoading] = useState(false);
    const staffstageList = async (data) => {
        if (data) {
            setLoading(true);
            const result = await staffstage_list(data, headers);
            let prevStateResults = StaffStageDataList.results;
            let logActions = StaffStageDataList.logActions;
            logActions.push({ verb: "get", results: result.data.results });
            let found = false;
            let newCount = StaffStageDataList.count + result.data.count;
            let newNext = result.data.next;
            let newPrevious = result.data.previous;
            let newStaffStage = prevStateResults.map((el) => {
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
                newStaffStage = prevStateResults.concat(result.data.results);
            }
            setStaffStageDataList({
                count: newCount,
                next: newNext,
                previous: newPrevious,
                logActions: logActions,
                results: newStaffStage,
            });
            setLoading(false);
        }
    };
    const staffstageCreate = async (data) => {
        if (data) {
            setLoading(true);
            const result = await staffstage_create(data, headers);
            let prevStateResults = StaffStageDataList.results;
            let logActions = StaffStageDataList.logActions;
            //Create
            let newCount = StaffStageDataList.count;
            logActions.push({ verb: "post", results: result.data });
            if (!Array.isArray(result.data)) {
                newCount = prevStateResults.push(result.data);
            }
            else {
                prevStateResults = prevStateResults.concat(result.data);
                newCount = prevStateResults.length;
            }
            setStaffStageDataList({
                ...StaffStageDataList,
                count: newCount,
                results: prevStateResults,
            });
            setLoading(false);
        }
    };
    const staffstageRead = async (id) => {
        if (id) {
            setLoading(true);
            const result = await staffstage_read(id.toString(), headers);
            let prevStateResults = StaffStageDataList.results;
            let logActions = StaffStageDataList.logActions;
            logActions.push({ verb: "get", results: result.data });
            let found = false;
            let newStaffStage = prevStateResults.map((el) => {
                if (el.id === result.data.id) {
                    found = true;
                    return { ...el, ...result.data };
                }
                else {
                    return el;
                }
            });
            if (!found) {
                newStaffStage = prevStateResults.concat(result.data);
            }
            setStaffStageDataList({
                ...StaffStageDataList,
                results: newStaffStage,
            });
            setLoading(false);
        }
    };
    const staffstageUpdate = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await staffstage_update(id.toString(), data, headers);
            let prevStateResults = StaffStageDataList.results;
            let logActions = StaffStageDataList.logActions;
            //update
            logActions.push({ verb: "put", results: result.data });
            let newStaffStage;
            if (!Array.isArray(result.data))
                newStaffStage = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newStaffStage = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setStaffStageDataList({
                ...StaffStageDataList,
                results: newStaffStage,
            });
            setLoading(false);
        }
    };
    const staffstagePartial = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await staffstage_partial_update(id.toString(), data, headers);
            let prevStateResults = StaffStageDataList.results;
            let logActions = StaffStageDataList.logActions;
            //update
            logActions.push({ verb: "patch", results: result.data });
            let newStaffStage;
            if (!Array.isArray(result.data))
                newStaffStage = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newStaffStage = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setStaffStageDataList({
                ...StaffStageDataList,
                results: newStaffStage,
            });
            setLoading(false);
        }
    };
    const staffstageDelete = async (id) => {
        if (id) {
            setLoading(true);
            const result = await staffstage_delete(id.toString(), headers);
            let prevStateResults = StaffStageDataList.results;
            let logActions = StaffStageDataList.logActions;
            logActions.push({ verb: "delete", results: id });
            //delete
            const newStaffStage = prevStateResults.filter((el) => el.id !== id);
            setStaffStageDataList({
                ...StaffStageDataList,
                results: newStaffStage,
            });
            setLoading(false);
        }
    };
    return (<StaffstageContext.Provider value={{
            count: StaffStageDataList.count,
            next: StaffStageDataList.next,
            previous: StaffStageDataList.previous,
            logActions: StaffStageDataList.logActions,
            loading: loading,
            staffstageData: StaffStageDataList.results,
            staffstageListFuncProp: staffstageList,
            staffstageCreateFuncProp: staffstageCreate,
            staffstageReadFuncProp: staffstageRead,
            staffstageUpdateFuncProp: staffstageUpdate,
            staffstagePartialFuncProp: staffstagePartial,
            staffstageDeleteFuncProp: staffstageDelete,
        }}>
      {children}
    </StaffstageContext.Provider>);
};
//# sourceMappingURL=staffstage.jsx.map