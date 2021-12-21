import { phone_list, phone_create, phone_read, phone_update, phone_partial_update, phone_delete, } from "../api";
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
const PhoneContext = createContext(defaultContextState);
export const PhoneProvider = ({ children, headers }) => {
    /* prettier-ignore */
    const [PhoneDataList, setPhoneDataList] = useState(initialState);
    /* prettier-ignore */
    const [loading, setLoading] = useState(false);
    const phoneList = async (data) => {
        if (data) {
            setLoading(true);
            const result = await phone_list(data, headers);
            let prevStateResults = PhoneDataList.results;
            let logActions = PhoneDataList.logActions;
            logActions.push({ verb: "get", results: result.data.results });
            let found = false;
            let newCount = PhoneDataList.count + result.data.count;
            let newNext = result.data.next;
            let newPrevious = result.data.previous;
            let newPhone = prevStateResults.map((el) => {
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
                newPhone = prevStateResults.concat(result.data.results);
            }
            setPhoneDataList({
                count: newCount,
                next: newNext,
                previous: newPrevious,
                logActions: logActions,
                results: newPhone,
            });
            setLoading(false);
        }
    };
    const phoneCreate = async (data) => {
        if (data) {
            setLoading(true);
            const result = await phone_create(data, headers);
            let prevStateResults = PhoneDataList.results;
            let logActions = PhoneDataList.logActions;
            //Create
            let newCount = PhoneDataList.count;
            logActions.push({ verb: "post", results: result.data });
            if (!Array.isArray(result.data)) {
                newCount = prevStateResults.push(result.data);
            }
            else {
                prevStateResults = prevStateResults.concat(result.data);
                newCount = prevStateResults.length;
            }
            setPhoneDataList({
                ...PhoneDataList,
                count: newCount,
                results: prevStateResults,
            });
            setLoading(false);
        }
    };
    const phoneRead = async (id) => {
        if (id) {
            setLoading(true);
            const result = await phone_read(id.toString(), headers);
            let prevStateResults = PhoneDataList.results;
            let logActions = PhoneDataList.logActions;
            logActions.push({ verb: "get", results: result.data });
            let found = false;
            let newPhone = prevStateResults.map((el) => {
                if (el.id === result.data.id) {
                    found = true;
                    return { ...el, ...result.data };
                }
                else {
                    return el;
                }
            });
            if (!found) {
                newPhone = prevStateResults.concat(result.data);
            }
            setPhoneDataList({
                ...PhoneDataList,
                results: newPhone,
            });
            setLoading(false);
        }
    };
    const phoneUpdate = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await phone_update(id.toString(), data, headers);
            let prevStateResults = PhoneDataList.results;
            let logActions = PhoneDataList.logActions;
            //update
            logActions.push({ verb: "put", results: result.data });
            let newPhone;
            if (!Array.isArray(result.data))
                newPhone = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newPhone = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setPhoneDataList({
                ...PhoneDataList,
                results: newPhone,
            });
            setLoading(false);
        }
    };
    const phonePartial = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await phone_partial_update(id.toString(), data, headers);
            let prevStateResults = PhoneDataList.results;
            let logActions = PhoneDataList.logActions;
            //update
            logActions.push({ verb: "patch", results: result.data });
            let newPhone;
            if (!Array.isArray(result.data))
                newPhone = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newPhone = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setPhoneDataList({
                ...PhoneDataList,
                results: newPhone,
            });
            setLoading(false);
        }
    };
    const phoneDelete = async (id) => {
        if (id) {
            setLoading(true);
            const result = await phone_delete(id.toString(), headers);
            let prevStateResults = PhoneDataList.results;
            let logActions = PhoneDataList.logActions;
            logActions.push({ verb: "delete", results: id });
            //delete
            const newPhone = prevStateResults.filter((el) => el.id !== id);
            setPhoneDataList({
                ...PhoneDataList,
                results: newPhone,
            });
            setLoading(false);
        }
    };
    return (<PhoneContext.Provider value={{
            count: PhoneDataList.count,
            next: PhoneDataList.next,
            previous: PhoneDataList.previous,
            logActions: PhoneDataList.logActions,
            loading: loading,
            phoneData: PhoneDataList.results,
            phoneListFuncProp: phoneList,
            phoneCreateFuncProp: phoneCreate,
            phoneReadFuncProp: phoneRead,
            phoneUpdateFuncProp: phoneUpdate,
            phonePartialFuncProp: phonePartial,
            phoneDeleteFuncProp: phoneDelete,
        }}>
      {children}
    </PhoneContext.Provider>);
};
//# sourceMappingURL=phone.jsx.map