import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Api } from "@vhrs/models";
var app_list = Api.app_list, app_create = Api.app_create, app_read = Api.app_read, app_update = Api.app_update, app_partial_update = Api.app_partial_update, app_delete = Api.app_delete;
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
    appListFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    appCreateFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    appReadFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    appUpdateFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    appPartialFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    appDeleteFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
export var AppContext = createContext(defaultContextState);
export var AppProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = useState(initialState), AppDataList = _b[0], setAppDataList = _b[1];
    /* prettier-ignore */
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var appList = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newApp, newAppserializedById_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, app_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = AppDataList.results;
                    logActions = AppDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = AppDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newApp = prevStateResults_1.map(function (el) {
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
                        newApp = prevStateResults_1.concat(result.data.results);
                    }
                    newAppserializedById_1 = [];
                    newApp.map(function (el) {
                        if (el.id) {
                            newAppserializedById_1[el.id] = el;
                        }
                    });
                    setAppDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newAppserializedById_1,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var appCreate = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, app_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = AppDataList.results;
                    logActions = AppDataList.logActions;
                    newCount = AppDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setAppDataList(__assign(__assign({}, AppDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var appRead = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newApp, newAppserializedById_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, app_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = AppDataList.results;
                    logActions = AppDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newApp = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return __assign(__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newApp.push(result_1.data);
                    }
                    newAppserializedById_2 = [];
                    newApp.map(function (el) {
                        if (el.id) {
                            newAppserializedById_2[el.id] = el;
                        }
                    });
                    setAppDataList(__assign(__assign({}, AppDataList), { results: newAppserializedById_2 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var appUpdate = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newApp, newAppserializedById_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, app_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = AppDataList.results;
                    logActions = AppDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newApp = void 0;
                    if (!Array.isArray(result_2.data))
                        newApp = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newApp = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    newAppserializedById_3 = [];
                    newApp.map(function (el) {
                        if (el.id) {
                            newAppserializedById_3[el.id] = el;
                        }
                    });
                    setAppDataList(__assign(__assign({}, AppDataList), { results: newAppserializedById_3 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var appPartial = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newApp, newAppserializedById_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, app_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = AppDataList.results;
                    logActions = AppDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newApp = void 0;
                    if (!Array.isArray(result_3.data))
                        newApp = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newApp = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    newAppserializedById_4 = [];
                    newApp.map(function (el) {
                        if (el.id) {
                            newAppserializedById_4[el.id] = el;
                        }
                    });
                    setAppDataList(__assign(__assign({}, AppDataList), { results: newAppserializedById_4 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var appDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newApp, newAppserializedById_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, app_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = AppDataList.results;
                    logActions = AppDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newApp = prevStateResults.filter(function (el) { return el.id !== id; });
                    newAppserializedById_5 = [];
                    newApp.map(function (el) {
                        if (el.id) {
                            newAppserializedById_5[el.id] = el;
                        }
                    });
                    setAppDataList(__assign(__assign({}, AppDataList), { results: newAppserializedById_5 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(AppContext.Provider, __assign({ value: {
            count: AppDataList.count,
            next: AppDataList.next,
            previous: AppDataList.previous,
            logActions: AppDataList.logActions,
            loading: loading,
            appData: AppDataList.results,
            appListFuncProp: appList,
            appCreateFuncProp: appCreate,
            appReadFuncProp: appRead,
            appUpdateFuncProp: appUpdate,
            appPartialFuncProp: appPartial,
            appDeleteFuncProp: appDelete,
        } }, { children: children })));
};
//# sourceMappingURL=app.js.map