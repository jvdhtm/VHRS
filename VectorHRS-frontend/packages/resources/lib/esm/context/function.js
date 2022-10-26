import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Api } from "@vhrs/models";
var function_list = Api.function_list, function_create = Api.function_create, function_read = Api.function_read, function_update = Api.function_update, function_partial_update = Api.function_partial_update, function_delete = Api.function_delete;
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
    functionListFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    functionCreateFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    functionReadFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    functionUpdateFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    functionPartialFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    functionDeleteFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
export var FunctionContext = createContext(defaultContextState);
export var FunctionProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = useState(initialState), FunctionDataList = _b[0], setFunctionDataList = _b[1];
    /* prettier-ignore */
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var functionList = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newFunction, newFunctionserializedById_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, function_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = FunctionDataList.results;
                    logActions = FunctionDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = FunctionDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newFunction = prevStateResults_1.map(function (el) {
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
                        newFunction = prevStateResults_1.concat(result.data.results);
                    }
                    newFunctionserializedById_1 = [];
                    newFunction.map(function (el) {
                        if (el.id) {
                            newFunctionserializedById_1[el.id] = el;
                        }
                    });
                    setFunctionDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newFunctionserializedById_1,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var functionCreate = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, function_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = FunctionDataList.results;
                    logActions = FunctionDataList.logActions;
                    newCount = FunctionDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setFunctionDataList(__assign(__assign({}, FunctionDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var functionRead = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newFunction, newFunctionserializedById_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, function_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = FunctionDataList.results;
                    logActions = FunctionDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newFunction = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return __assign(__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newFunction.push(result_1.data);
                    }
                    newFunctionserializedById_2 = [];
                    newFunction.map(function (el) {
                        if (el.id) {
                            newFunctionserializedById_2[el.id] = el;
                        }
                    });
                    setFunctionDataList(__assign(__assign({}, FunctionDataList), { results: newFunctionserializedById_2 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var functionUpdate = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newFunction, newFunctionserializedById_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, function_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = FunctionDataList.results;
                    logActions = FunctionDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newFunction = void 0;
                    if (!Array.isArray(result_2.data))
                        newFunction = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newFunction = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    newFunctionserializedById_3 = [];
                    newFunction.map(function (el) {
                        if (el.id) {
                            newFunctionserializedById_3[el.id] = el;
                        }
                    });
                    setFunctionDataList(__assign(__assign({}, FunctionDataList), { results: newFunctionserializedById_3 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var functionPartial = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newFunction, newFunctionserializedById_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, function_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = FunctionDataList.results;
                    logActions = FunctionDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newFunction = void 0;
                    if (!Array.isArray(result_3.data))
                        newFunction = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newFunction = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    newFunctionserializedById_4 = [];
                    newFunction.map(function (el) {
                        if (el.id) {
                            newFunctionserializedById_4[el.id] = el;
                        }
                    });
                    setFunctionDataList(__assign(__assign({}, FunctionDataList), { results: newFunctionserializedById_4 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var functionDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newFunction, newFunctionserializedById_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, function_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = FunctionDataList.results;
                    logActions = FunctionDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newFunction = prevStateResults.filter(function (el) { return el.id !== id; });
                    newFunctionserializedById_5 = [];
                    newFunction.map(function (el) {
                        if (el.id) {
                            newFunctionserializedById_5[el.id] = el;
                        }
                    });
                    setFunctionDataList(__assign(__assign({}, FunctionDataList), { results: newFunctionserializedById_5 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(FunctionContext.Provider, __assign({ value: {
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
        } }, { children: children })));
};
//# sourceMappingURL=function.js.map