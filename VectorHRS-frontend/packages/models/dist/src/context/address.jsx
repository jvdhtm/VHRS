import { address_list, address_create, address_read, address_update, address_partial_update, address_delete, } from "../api";
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
const AddressContext = createContext(defaultContextState);
export const AddressProvider = ({ children, headers, }) => {
    /* prettier-ignore */
    const [AddressDataList, setAddressDataList] = useState(initialState);
    /* prettier-ignore */
    const [loading, setLoading] = useState(false);
    const addressList = async (data) => {
        if (data) {
            setLoading(true);
            const result = await address_list(data, headers);
            let prevStateResults = AddressDataList.results;
            let logActions = AddressDataList.logActions;
            logActions.push({ verb: "get", results: result.data.results });
            let found = false;
            let newCount = AddressDataList.count + result.data.count;
            let newNext = result.data.next;
            let newPrevious = result.data.previous;
            let newAddress = prevStateResults.map((el) => {
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
                newAddress = prevStateResults.concat(result.data.results);
            }
            setAddressDataList({
                count: newCount,
                next: newNext,
                previous: newPrevious,
                logActions: logActions,
                results: newAddress,
            });
            setLoading(false);
        }
    };
    const addressCreate = async (data) => {
        if (data) {
            setLoading(true);
            const result = await address_create(data, headers);
            let prevStateResults = AddressDataList.results;
            let logActions = AddressDataList.logActions;
            //Create
            let newCount = AddressDataList.count;
            logActions.push({ verb: "post", results: result.data });
            if (!Array.isArray(result.data)) {
                newCount = prevStateResults.push(result.data);
            }
            else {
                prevStateResults = prevStateResults.concat(result.data);
                newCount = prevStateResults.length;
            }
            setAddressDataList({
                ...AddressDataList,
                count: newCount,
                results: prevStateResults,
            });
            setLoading(false);
        }
    };
    const addressRead = async (id) => {
        if (id) {
            setLoading(true);
            const result = await address_read(id.toString(), headers);
            let prevStateResults = AddressDataList.results;
            let logActions = AddressDataList.logActions;
            logActions.push({ verb: "get", results: result.data });
            let found = false;
            let newAddress = prevStateResults.map((el) => {
                if (el.id === result.data.id) {
                    found = true;
                    return { ...el, ...result.data };
                }
                else {
                    return el;
                }
            });
            if (!found) {
                newAddress = prevStateResults.concat(result.data);
            }
            setAddressDataList({
                ...AddressDataList,
                results: newAddress,
            });
            setLoading(false);
        }
    };
    const addressUpdate = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await address_update(id.toString(), data, headers);
            let prevStateResults = AddressDataList.results;
            let logActions = AddressDataList.logActions;
            //update
            logActions.push({ verb: "put", results: result.data });
            let newAddress;
            if (!Array.isArray(result.data))
                newAddress = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newAddress = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setAddressDataList({
                ...AddressDataList,
                results: newAddress,
            });
            setLoading(false);
        }
    };
    const addressPartial = async (id, data) => {
        if (id && data) {
            setLoading(true);
            const result = await address_partial_update(id.toString(), data, headers);
            let prevStateResults = AddressDataList.results;
            let logActions = AddressDataList.logActions;
            //update
            logActions.push({ verb: "patch", results: result.data });
            let newAddress;
            if (!Array.isArray(result.data))
                newAddress = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            //update bulk
            else
                newAddress = prevStateResults.map((el) => el.id === result.data.id ? { ...el, ...result.data } : el);
            setAddressDataList({
                ...AddressDataList,
                results: newAddress,
            });
            setLoading(false);
        }
    };
    const addressDelete = async (id) => {
        if (id) {
            setLoading(true);
            const result = await address_delete(id.toString(), headers);
            let prevStateResults = AddressDataList.results;
            let logActions = AddressDataList.logActions;
            logActions.push({ verb: "delete", results: id });
            //delete
            const newAddress = prevStateResults.filter((el) => el.id !== id);
            setAddressDataList({
                ...AddressDataList,
                results: newAddress,
            });
            setLoading(false);
        }
    };
    return (<AddressContext.Provider value={{
            count: AddressDataList.count,
            next: AddressDataList.next,
            previous: AddressDataList.previous,
            logActions: AddressDataList.logActions,
            loading: loading,
            addressData: AddressDataList.results,
            addressListFuncProp: addressList,
            addressCreateFuncProp: addressCreate,
            addressReadFuncProp: addressRead,
            addressUpdateFuncProp: addressUpdate,
            addressPartialFuncProp: addressPartial,
            addressDeleteFuncProp: addressDelete,
        }}>
      {children}
    </AddressContext.Provider>);
};
//# sourceMappingURL=address.jsx.map