import { function_list, function_create, function_read, function_update, function_partial_update, function_delete, } from "../api";
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
const FunctionContext = createContext(defaultContextState);
export const FunctionProvider = ({ children, headers, }) => {
    /* prettier-ignore */
    const [FunctionDataList, setFunctionDataList] = useState(initialState);
    /* prettier-ignore */
    const [loading, setLoading] = useState(false);
    const functionList = async (data) => {
        if (data) {
            setLoading(true);
            const result = await function_list(data, headers);
            let prevStateResults = FunctionDataList.results;
            let logActions = FunctionDataList.logActions;
            logActions.push({ verb: "get", results: result.data.results });
            let found = false;
            let newCount = FunctionDataList.count + result.data.count;
            let newNext = result.data.next;
            let newPrevious = result.data.previous;
            let newFunction = prevStateResults.map((el) => {
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
                newFunction = prevStateResults.concat(result.data.results);
            }
            setFunctionDataList({
                count: newCount,
                next: newNext,
                previous: newPrevious,
                logActions: logActions,
                results: newFunction,
            });
            setLoading(false);
        }
    };
    const functionCreate = async (data) => {
        if (data) {
            setLoading(true);
            const result = await function_create(data, headers);
            let prevStateResults = FunctionDataList.results;
            let logActions = FunctionDataList.logActions;
            //Create
            let newCount = FunctionDataList.count;
            logActions.push({ verb: "post", results: result.data });
            if (!Array.isArray(result.data)) {
                newCount = prevStateResults.push(result.data);
            }
            else {
                prevStateResults = prevStateResults.concat(result.data);
                newCount = prevStateResults.length;
            }
            setFunctionDataList({
                ...FunctionDataList,
                count: newCount,
                results: prevStateResults,
            });
            setLoading(false);
        }
    };
    const functionRead = async (id) => {
        if (id) {
            setLoading(true);
            const result = await function_read(id.toString(), headers);
            let prevStateResults = FunctionDataList.results;
            let logActions = FunctionDataList.logActions;
            logActions.push({ verb: "get", results: result.data });
            let found = false;
            let newFunction = prevStateResults.map((el) => {
                if (el.id === result.data.id) {
                    found = true;
                    return { ...el, ...result.data };
                }
                else {
                    return el;
                }
            });
            if (!found) {
                newFunction = prevStateResults.concat(result.data);
            }
            setFunctionDataList({
                ...FunctionDataList,
                results: newFunction,
            });
            setLoading(false);
        }
    };
    const functionUpdate = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await function_update(id.toString(), data, headers);
            let prevStateResults = FunctionDataList.results;
            let logActions = FunctionDataList.logActions;
            //update
            logActions.push({ verb: "put", results: result.data });
            let newFunction;
            if (!Array.isArray(result.data))
                newFunction = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newFunction = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setFunctionDataList({
                ...FunctionDataList,
                results: newFunction,
            });
            setLoading(false);
        }
    };
    const functionPartial = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await function_partial_update(id.toString(), data, headers);
            let prevStateResults = FunctionDataList.results;
            let logActions = FunctionDataList.logActions;
            //update
            logActions.push({ verb: "patch", results: result.data });
            let newFunction;
            if (!Array.isArray(result.data))
                newFunction = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newFunction = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setFunctionDataList({
                ...FunctionDataList,
                results: newFunction,
            });
            setLoading(false);
        }
    };
    const functionDelete = async (id) => {
        if (id) {
            setLoading(true);
            const result = await function_delete(id.toString(), headers);
            let prevStateResults = FunctionDataList.results;
            let logActions = FunctionDataList.logActions;
            logActions.push({ verb: "delete", results: id });
            //delete
            const newFunction = prevStateResults.filter((el) => el.id !== id);
            setFunctionDataList({
                ...FunctionDataList,
                results: newFunction,
            });
            setLoading(false);
        }
    };
    return (<FunctionContext.Provider value={{
            count: FunctionDataList.count,
            next: FunctionDataList.next,
            previous: FunctionDataList.previous,
            logActions: FunctionDataList.logActions,
            loading: loading,
            functionData: FunctionDataList.results,
            functionListFuncProp: functionList,
            functionCreateFuncProp: functionCreate,
            functionReadFuncProp: functionRead,
            functionUpdateFuncProp: functionUpdate,
            functionPartialFuncProp: functionPartial,
            functionDeleteFuncProp: functionDelete,
        }}>
      {children}
    </FunctionContext.Provider>);
};
//# sourceMappingURL=function.jsx.map