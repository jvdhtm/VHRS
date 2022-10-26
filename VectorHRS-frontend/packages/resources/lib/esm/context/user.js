import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Api } from "@vhrs/models";
var user_list = Api.user_list, user_create = Api.user_create, user_read = Api.user_read, user_update = Api.user_update, user_partial_update = Api.user_partial_update, user_delete = Api.user_delete;
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
    userListFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    userCreateFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    userReadFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    userUpdateFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    userPartialFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    userDeleteFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
export var UserContext = createContext(defaultContextState);
export var UserProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = useState(initialState), UserDataList = _b[0], setUserDataList = _b[1];
    /* prettier-ignore */
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var userList = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newUser, newUserserializedById_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, user_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = UserDataList.results;
                    logActions = UserDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = UserDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newUser = prevStateResults_1.map(function (el) {
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
                        newUser = prevStateResults_1.concat(result.data.results);
                    }
                    newUserserializedById_1 = [];
                    newUser.map(function (el) {
                        if (el.id) {
                            newUserserializedById_1[el.id] = el;
                        }
                    });
                    setUserDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newUserserializedById_1,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var userCreate = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, user_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = UserDataList.results;
                    logActions = UserDataList.logActions;
                    newCount = UserDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setUserDataList(__assign(__assign({}, UserDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var userRead = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newUser, newUserserializedById_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, user_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = UserDataList.results;
                    logActions = UserDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newUser = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return __assign(__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newUser.push(result_1.data);
                    }
                    newUserserializedById_2 = [];
                    newUser.map(function (el) {
                        if (el.id) {
                            newUserserializedById_2[el.id] = el;
                        }
                    });
                    setUserDataList(__assign(__assign({}, UserDataList), { results: newUserserializedById_2 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var userUpdate = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newUser, newUserserializedById_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, user_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = UserDataList.results;
                    logActions = UserDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newUser = void 0;
                    if (!Array.isArray(result_2.data))
                        newUser = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newUser = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    newUserserializedById_3 = [];
                    newUser.map(function (el) {
                        if (el.id) {
                            newUserserializedById_3[el.id] = el;
                        }
                    });
                    setUserDataList(__assign(__assign({}, UserDataList), { results: newUserserializedById_3 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var userPartial = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newUser, newUserserializedById_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, user_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = UserDataList.results;
                    logActions = UserDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newUser = void 0;
                    if (!Array.isArray(result_3.data))
                        newUser = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newUser = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    newUserserializedById_4 = [];
                    newUser.map(function (el) {
                        if (el.id) {
                            newUserserializedById_4[el.id] = el;
                        }
                    });
                    setUserDataList(__assign(__assign({}, UserDataList), { results: newUserserializedById_4 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var userDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newUser, newUserserializedById_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, user_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = UserDataList.results;
                    logActions = UserDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newUser = prevStateResults.filter(function (el) { return el.id !== id; });
                    newUserserializedById_5 = [];
                    newUser.map(function (el) {
                        if (el.id) {
                            newUserserializedById_5[el.id] = el;
                        }
                    });
                    setUserDataList(__assign(__assign({}, UserDataList), { results: newUserserializedById_5 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(UserContext.Provider, __assign({ value: {
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
        } }, { children: children })));
};
//# sourceMappingURL=user.js.map