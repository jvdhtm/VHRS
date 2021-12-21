import { person_list, person_create, person_read, person_update, person_partial_update, person_delete, } from "../api";
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
const PersonContext = createContext(defaultContextState);
export const PersonProvider = ({ children, headers }) => {
    /* prettier-ignore */
    const [PersonDataList, setPersonDataList] = useState(initialState);
    /* prettier-ignore */
    const [loading, setLoading] = useState(false);
    const personList = async (data) => {
        if (data) {
            setLoading(true);
            const result = await person_list(data, headers);
            let prevStateResults = PersonDataList.results;
            let logActions = PersonDataList.logActions;
            logActions.push({ verb: "get", results: result.data.results });
            let found = false;
            let newCount = PersonDataList.count + result.data.count;
            let newNext = result.data.next;
            let newPrevious = result.data.previous;
            let newPerson = prevStateResults.map((el) => {
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
                newPerson = prevStateResults.concat(result.data.results);
            }
            setPersonDataList({
                count: newCount,
                next: newNext,
                previous: newPrevious,
                logActions: logActions,
                results: newPerson,
            });
            setLoading(false);
        }
    };
    const personCreate = async (data) => {
        if (data) {
            setLoading(true);
            const result = await person_create(data, headers);
            let prevStateResults = PersonDataList.results;
            let logActions = PersonDataList.logActions;
            //Create
            let newCount = PersonDataList.count;
            logActions.push({ verb: "post", results: result.data });
            if (!Array.isArray(result.data)) {
                newCount = prevStateResults.push(result.data);
            }
            else {
                prevStateResults = prevStateResults.concat(result.data);
                newCount = prevStateResults.length;
            }
            setPersonDataList({
                ...PersonDataList,
                count: newCount,
                results: prevStateResults,
            });
            setLoading(false);
        }
    };
    const personRead = async (id) => {
        if (id) {
            setLoading(true);
            const result = await person_read(id.toString(), headers);
            let prevStateResults = PersonDataList.results;
            let logActions = PersonDataList.logActions;
            logActions.push({ verb: "get", results: result.data });
            let found = false;
            let newPerson = prevStateResults.map((el) => {
                if (el.id === result.data.id) {
                    found = true;
                    return { ...el, ...result.data };
                }
                else {
                    return el;
                }
            });
            if (!found) {
                newPerson = prevStateResults.concat(result.data);
            }
            setPersonDataList({
                ...PersonDataList,
                results: newPerson,
            });
            setLoading(false);
        }
    };
    const personUpdate = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await person_update(id.toString(), data, headers);
            let prevStateResults = PersonDataList.results;
            let logActions = PersonDataList.logActions;
            //update
            logActions.push({ verb: "put", results: result.data });
            let newPerson;
            if (!Array.isArray(result.data))
                newPerson = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newPerson = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setPersonDataList({
                ...PersonDataList,
                results: newPerson,
            });
            setLoading(false);
        }
    };
    const personPartial = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await person_partial_update(id.toString(), data, headers);
            let prevStateResults = PersonDataList.results;
            let logActions = PersonDataList.logActions;
            //update
            logActions.push({ verb: "patch", results: result.data });
            let newPerson;
            if (!Array.isArray(result.data))
                newPerson = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newPerson = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setPersonDataList({
                ...PersonDataList,
                results: newPerson,
            });
            setLoading(false);
        }
    };
    const personDelete = async (id) => {
        if (id) {
            setLoading(true);
            const result = await person_delete(id.toString(), headers);
            let prevStateResults = PersonDataList.results;
            let logActions = PersonDataList.logActions;
            logActions.push({ verb: "delete", results: id });
            //delete
            const newPerson = prevStateResults.filter((el) => el.id !== id);
            setPersonDataList({
                ...PersonDataList,
                results: newPerson,
            });
            setLoading(false);
        }
    };
    return (<PersonContext.Provider value={{
            count: PersonDataList.count,
            next: PersonDataList.next,
            previous: PersonDataList.previous,
            logActions: PersonDataList.logActions,
            loading: loading,
            personData: PersonDataList.results,
            personListFuncProp: personList,
            personCreateFuncProp: personCreate,
            personReadFuncProp: personRead,
            personUpdateFuncProp: personUpdate,
            personPartialFuncProp: personPartial,
            personDeleteFuncProp: personDelete,
        }}>
      {children}
    </PersonContext.Provider>);
};
//# sourceMappingURL=person.jsx.map