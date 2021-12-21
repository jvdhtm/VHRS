import { personlog_list, personlog_create, personlog_read, personlog_update, personlog_partial_update, personlog_delete, } from "../api";
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
const PersonlogContext = createContext(defaultContextState);
export const PersonlogProvider = ({ children, headers, }) => {
    /* prettier-ignore */
    const [PersonLogDataList, setPersonLogDataList] = useState(initialState);
    /* prettier-ignore */
    const [loading, setLoading] = useState(false);
    const personlogList = async (data) => {
        if (data) {
            setLoading(true);
            const result = await personlog_list(data, headers);
            let prevStateResults = PersonLogDataList.results;
            let logActions = PersonLogDataList.logActions;
            logActions.push({ verb: "get", results: result.data.results });
            let found = false;
            let newCount = PersonLogDataList.count + result.data.count;
            let newNext = result.data.next;
            let newPrevious = result.data.previous;
            let newPersonLog = prevStateResults.map((el) => {
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
                newPersonLog = prevStateResults.concat(result.data.results);
            }
            setPersonLogDataList({
                count: newCount,
                next: newNext,
                previous: newPrevious,
                logActions: logActions,
                results: newPersonLog,
            });
            setLoading(false);
        }
    };
    const personlogCreate = async (data) => {
        if (data) {
            setLoading(true);
            const result = await personlog_create(data, headers);
            let prevStateResults = PersonLogDataList.results;
            let logActions = PersonLogDataList.logActions;
            //Create
            let newCount = PersonLogDataList.count;
            logActions.push({ verb: "post", results: result.data });
            if (!Array.isArray(result.data)) {
                newCount = prevStateResults.push(result.data);
            }
            else {
                prevStateResults = prevStateResults.concat(result.data);
                newCount = prevStateResults.length;
            }
            setPersonLogDataList({
                ...PersonLogDataList,
                count: newCount,
                results: prevStateResults,
            });
            setLoading(false);
        }
    };
    const personlogRead = async (id) => {
        if (id) {
            setLoading(true);
            const result = await personlog_read(id.toString(), headers);
            let prevStateResults = PersonLogDataList.results;
            let logActions = PersonLogDataList.logActions;
            logActions.push({ verb: "get", results: result.data });
            let found = false;
            let newPersonLog = prevStateResults.map((el) => {
                if (el.id === result.data.id) {
                    found = true;
                    return { ...el, ...result.data };
                }
                else {
                    return el;
                }
            });
            if (!found) {
                newPersonLog = prevStateResults.concat(result.data);
            }
            setPersonLogDataList({
                ...PersonLogDataList,
                results: newPersonLog,
            });
            setLoading(false);
        }
    };
    const personlogUpdate = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await personlog_update(id.toString(), data, headers);
            let prevStateResults = PersonLogDataList.results;
            let logActions = PersonLogDataList.logActions;
            //update
            logActions.push({ verb: "put", results: result.data });
            let newPersonLog;
            if (!Array.isArray(result.data))
                newPersonLog = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newPersonLog = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setPersonLogDataList({
                ...PersonLogDataList,
                results: newPersonLog,
            });
            setLoading(false);
        }
    };
    const personlogPartial = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await personlog_partial_update(id.toString(), data, headers);
            let prevStateResults = PersonLogDataList.results;
            let logActions = PersonLogDataList.logActions;
            //update
            logActions.push({ verb: "patch", results: result.data });
            let newPersonLog;
            if (!Array.isArray(result.data))
                newPersonLog = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newPersonLog = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setPersonLogDataList({
                ...PersonLogDataList,
                results: newPersonLog,
            });
            setLoading(false);
        }
    };
    const personlogDelete = async (id) => {
        if (id) {
            setLoading(true);
            const result = await personlog_delete(id.toString(), headers);
            let prevStateResults = PersonLogDataList.results;
            let logActions = PersonLogDataList.logActions;
            logActions.push({ verb: "delete", results: id });
            //delete
            const newPersonLog = prevStateResults.filter((el) => el.id !== id);
            setPersonLogDataList({
                ...PersonLogDataList,
                results: newPersonLog,
            });
            setLoading(false);
        }
    };
    return (<PersonlogContext.Provider value={{
            count: PersonLogDataList.count,
            next: PersonLogDataList.next,
            previous: PersonLogDataList.previous,
            logActions: PersonLogDataList.logActions,
            loading: loading,
            personlogData: PersonLogDataList.results,
            personlogListFuncProp: personlogList,
            personlogCreateFuncProp: personlogCreate,
            personlogReadFuncProp: personlogRead,
            personlogUpdateFuncProp: personlogUpdate,
            personlogPartialFuncProp: personlogPartial,
            personlogDeleteFuncProp: personlogDelete,
        }}>
      {children}
    </PersonlogContext.Provider>);
};
//# sourceMappingURL=personlog.jsx.map