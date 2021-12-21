import { user_list, user_create, user_read, user_update, user_partial_update, user_delete, } from "../api";
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
const UserContext = createContext(defaultContextState);
export const UserProvider = ({ children, headers }) => {
    /* prettier-ignore */
    const [UserDataList, setUserDataList] = useState(initialState);
    /* prettier-ignore */
    const [loading, setLoading] = useState(false);
    const userList = async (data) => {
        if (data) {
            setLoading(true);
            const result = await user_list(data, headers);
            let prevStateResults = UserDataList.results;
            let logActions = UserDataList.logActions;
            logActions.push({ verb: "get", results: result.data.results });
            let found = false;
            let newCount = UserDataList.count + result.data.count;
            let newNext = result.data.next;
            let newPrevious = result.data.previous;
            let newUser = prevStateResults.map((el) => {
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
                newUser = prevStateResults.concat(result.data.results);
            }
            setUserDataList({
                count: newCount,
                next: newNext,
                previous: newPrevious,
                logActions: logActions,
                results: newUser,
            });
            setLoading(false);
        }
    };
    const userCreate = async (data) => {
        if (data) {
            setLoading(true);
            const result = await user_create(data, headers);
            let prevStateResults = UserDataList.results;
            let logActions = UserDataList.logActions;
            //Create
            let newCount = UserDataList.count;
            logActions.push({ verb: "post", results: result.data });
            if (!Array.isArray(result.data)) {
                newCount = prevStateResults.push(result.data);
            }
            else {
                prevStateResults = prevStateResults.concat(result.data);
                newCount = prevStateResults.length;
            }
            setUserDataList({
                ...UserDataList,
                count: newCount,
                results: prevStateResults,
            });
            setLoading(false);
        }
    };
    const userRead = async (id) => {
        if (id) {
            setLoading(true);
            const result = await user_read(id.toString(), headers);
            let prevStateResults = UserDataList.results;
            let logActions = UserDataList.logActions;
            logActions.push({ verb: "get", results: result.data });
            let found = false;
            let newUser = prevStateResults.map((el) => {
                if (el.id === result.data.id) {
                    found = true;
                    return { ...el, ...result.data };
                }
                else {
                    return el;
                }
            });
            if (!found) {
                newUser = prevStateResults.concat(result.data);
            }
            setUserDataList({
                ...UserDataList,
                results: newUser,
            });
            setLoading(false);
        }
    };
    const userUpdate = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await user_update(id.toString(), data, headers);
            let prevStateResults = UserDataList.results;
            let logActions = UserDataList.logActions;
            //update
            logActions.push({ verb: "put", results: result.data });
            let newUser;
            if (!Array.isArray(result.data))
                newUser = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newUser = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setUserDataList({
                ...UserDataList,
                results: newUser,
            });
            setLoading(false);
        }
    };
    const userPartial = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await user_partial_update(id.toString(), data, headers);
            let prevStateResults = UserDataList.results;
            let logActions = UserDataList.logActions;
            //update
            logActions.push({ verb: "patch", results: result.data });
            let newUser;
            if (!Array.isArray(result.data))
                newUser = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newUser = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setUserDataList({
                ...UserDataList,
                results: newUser,
            });
            setLoading(false);
        }
    };
    const userDelete = async (id) => {
        if (id) {
            setLoading(true);
            const result = await user_delete(id.toString(), headers);
            let prevStateResults = UserDataList.results;
            let logActions = UserDataList.logActions;
            logActions.push({ verb: "delete", results: id });
            //delete
            const newUser = prevStateResults.filter((el) => el.id !== id);
            setUserDataList({
                ...UserDataList,
                results: newUser,
            });
            setLoading(false);
        }
    };
    return (<UserContext.Provider value={{
            count: UserDataList.count,
            next: UserDataList.next,
            previous: UserDataList.previous,
            logActions: UserDataList.logActions,
            loading: loading,
            userData: UserDataList.results,
            userListFuncProp: userList,
            userCreateFuncProp: userCreate,
            userReadFuncProp: userRead,
            userUpdateFuncProp: userUpdate,
            userPartialFuncProp: userPartial,
            userDeleteFuncProp: userDelete,
        }}>
      {children}
    </UserContext.Provider>);
};
//# sourceMappingURL=user.jsx.map