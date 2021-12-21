import { personstage_list, personstage_create, personstage_read, personstage_update, personstage_partial_update, personstage_delete, } from "../api";
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
const PersonstageContext = createContext(defaultContextState);
export const PersonstageProvider = ({ children, headers, }) => {
    /* prettier-ignore */
    const [PersonStageDataList, setPersonStageDataList] = useState(initialState);
    /* prettier-ignore */
    const [loading, setLoading] = useState(false);
    const personstageList = async (data) => {
        if (data) {
            setLoading(true);
            const result = await personstage_list(data, headers);
            let prevStateResults = PersonStageDataList.results;
            let logActions = PersonStageDataList.logActions;
            logActions.push({ verb: "get", results: result.data.results });
            let found = false;
            let newCount = PersonStageDataList.count + result.data.count;
            let newNext = result.data.next;
            let newPrevious = result.data.previous;
            let newPersonStage = prevStateResults.map((el) => {
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
                newPersonStage = prevStateResults.concat(result.data.results);
            }
            setPersonStageDataList({
                count: newCount,
                next: newNext,
                previous: newPrevious,
                logActions: logActions,
                results: newPersonStage,
            });
            setLoading(false);
        }
    };
    const personstageCreate = async (data) => {
        if (data) {
            setLoading(true);
            const result = await personstage_create(data, headers);
            let prevStateResults = PersonStageDataList.results;
            let logActions = PersonStageDataList.logActions;
            //Create
            let newCount = PersonStageDataList.count;
            logActions.push({ verb: "post", results: result.data });
            if (!Array.isArray(result.data)) {
                newCount = prevStateResults.push(result.data);
            }
            else {
                prevStateResults = prevStateResults.concat(result.data);
                newCount = prevStateResults.length;
            }
            setPersonStageDataList({
                ...PersonStageDataList,
                count: newCount,
                results: prevStateResults,
            });
            setLoading(false);
        }
    };
    const personstageRead = async (id) => {
        if (id) {
            setLoading(true);
            const result = await personstage_read(id.toString(), headers);
            let prevStateResults = PersonStageDataList.results;
            let logActions = PersonStageDataList.logActions;
            logActions.push({ verb: "get", results: result.data });
            let found = false;
            let newPersonStage = prevStateResults.map((el) => {
                if (el.id === result.data.id) {
                    found = true;
                    return { ...el, ...result.data };
                }
                else {
                    return el;
                }
            });
            if (!found) {
                newPersonStage = prevStateResults.concat(result.data);
            }
            setPersonStageDataList({
                ...PersonStageDataList,
                results: newPersonStage,
            });
            setLoading(false);
        }
    };
    const personstageUpdate = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await personstage_update(id.toString(), data, headers);
            let prevStateResults = PersonStageDataList.results;
            let logActions = PersonStageDataList.logActions;
            //update
            logActions.push({ verb: "put", results: result.data });
            let newPersonStage;
            if (!Array.isArray(result.data))
                newPersonStage = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newPersonStage = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setPersonStageDataList({
                ...PersonStageDataList,
                results: newPersonStage,
            });
            setLoading(false);
        }
    };
    const personstagePartial = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await personstage_partial_update(id.toString(), data, headers);
            let prevStateResults = PersonStageDataList.results;
            let logActions = PersonStageDataList.logActions;
            //update
            logActions.push({ verb: "patch", results: result.data });
            let newPersonStage;
            if (!Array.isArray(result.data))
                newPersonStage = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newPersonStage = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setPersonStageDataList({
                ...PersonStageDataList,
                results: newPersonStage,
            });
            setLoading(false);
        }
    };
    const personstageDelete = async (id) => {
        if (id) {
            setLoading(true);
            const result = await personstage_delete(id.toString(), headers);
            let prevStateResults = PersonStageDataList.results;
            let logActions = PersonStageDataList.logActions;
            logActions.push({ verb: "delete", results: id });
            //delete
            const newPersonStage = prevStateResults.filter((el) => el.id !== id);
            setPersonStageDataList({
                ...PersonStageDataList,
                results: newPersonStage,
            });
            setLoading(false);
        }
    };
    return (<PersonstageContext.Provider value={{
            count: PersonStageDataList.count,
            next: PersonStageDataList.next,
            previous: PersonStageDataList.previous,
            logActions: PersonStageDataList.logActions,
            loading: loading,
            personstageData: PersonStageDataList.results,
            personstageListFuncProp: personstageList,
            personstageCreateFuncProp: personstageCreate,
            personstageReadFuncProp: personstageRead,
            personstageUpdateFuncProp: personstageUpdate,
            personstagePartialFuncProp: personstagePartial,
            personstageDeleteFuncProp: personstageDelete,
        }}>
      {children}
    </PersonstageContext.Provider>);
};
//# sourceMappingURL=personstage.jsx.map