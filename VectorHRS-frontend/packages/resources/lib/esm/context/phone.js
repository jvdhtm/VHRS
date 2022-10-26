import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Api } from "@vhrs/models";
var phone_list = Api.phone_list, phone_create = Api.phone_create, phone_read = Api.phone_read, phone_update = Api.phone_update, phone_partial_update = Api.phone_partial_update, phone_delete = Api.phone_delete;
import { createContext, useState } from "react";
var initialState = {
    count: 0,
    logActions: [],
    results: [],
};
var defaultContextState = {
    count: 0,
    loading: false,
    logActions: [],
    phoneListFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    phoneCreateFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    phoneReadFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    phoneUpdateFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    phonePartialFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    phoneDeleteFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
export var PhoneContext = createContext(defaultContextState);
export var PhoneProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = useState(initialState), PhoneDataList = _b[0], setPhoneDataList = _b[1];
    /* prettier-ignore */
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var phoneList = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newPhone, newPhoneserializedById_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, phone_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = PhoneDataList.results;
                    logActions = PhoneDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = PhoneDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newPhone = prevStateResults_1.map(function (el) {
                        var preEl = prevStateResults_1.filter(function (resultEl) {
                            return el.id === resultEl.id;
                        });
                        if (preEl.length > 0) {
                            found_1 = true;
                            return __assign(__assign({}, el), preEl[0]);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_1) {
                        newPhone = prevStateResults_1.concat(result.data.results);
                    }
                    newPhoneserializedById_1 = [];
                    newPhone.map(function (el) {
                        if (el.id) {
                            newPhoneserializedById_1[el.id] = el;
                        }
                    });
                    setPhoneDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newPhoneserializedById_1,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var phoneCreate = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, phone_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = PhoneDataList.results;
                    logActions = PhoneDataList.logActions;
                    newCount = PhoneDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setPhoneDataList(__assign(__assign({}, PhoneDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var phoneRead = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newPhone, newPhoneserializedById_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, phone_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = PhoneDataList.results;
                    logActions = PhoneDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newPhone = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return __assign(__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newPhone.push(result_1.data);
                    }
                    newPhoneserializedById_2 = [];
                    newPhone.map(function (el) {
                        if (el.id) {
                            newPhoneserializedById_2[el.id] = el;
                        }
                    });
                    setPhoneDataList(__assign(__assign({}, PhoneDataList), { results: newPhoneserializedById_2 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var phoneUpdate = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newPhone, newPhoneserializedById_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, phone_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = PhoneDataList.results;
                    logActions = PhoneDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newPhone = void 0;
                    if (!Array.isArray(result_2.data))
                        newPhone = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newPhone = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    newPhoneserializedById_3 = [];
                    newPhone.map(function (el) {
                        if (el.id) {
                            newPhoneserializedById_3[el.id] = el;
                        }
                    });
                    setPhoneDataList(__assign(__assign({}, PhoneDataList), { results: newPhoneserializedById_3 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var phonePartial = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newPhone, newPhoneserializedById_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, phone_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = PhoneDataList.results;
                    logActions = PhoneDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newPhone = void 0;
                    if (!Array.isArray(result_3.data))
                        newPhone = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newPhone = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    newPhoneserializedById_4 = [];
                    newPhone.map(function (el) {
                        if (el.id) {
                            newPhoneserializedById_4[el.id] = el;
                        }
                    });
                    setPhoneDataList(__assign(__assign({}, PhoneDataList), { results: newPhoneserializedById_4 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var phoneDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newPhone, newPhoneserializedById_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, phone_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = PhoneDataList.results;
                    logActions = PhoneDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newPhone = prevStateResults.filter(function (el) { return el.id !== id; });
                    newPhoneserializedById_5 = [];
                    newPhone.map(function (el) {
                        if (el.id) {
                            newPhoneserializedById_5[el.id] = el;
                        }
                    });
                    setPhoneDataList(__assign(__assign({}, PhoneDataList), { results: newPhoneserializedById_5 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(PhoneContext.Provider, __assign({ value: {
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
        } }, { children: children })));
};
//# sourceMappingURL=phone.js.map