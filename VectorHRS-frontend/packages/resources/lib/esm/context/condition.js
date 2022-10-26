import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Api } from "@vhrs/models";
var condition_list = Api.condition_list, condition_create = Api.condition_create, condition_read = Api.condition_read, condition_update = Api.condition_update, condition_partial_update = Api.condition_partial_update, condition_delete = Api.condition_delete;
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
    conditionListFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    conditionCreateFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    conditionReadFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    conditionUpdateFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    conditionPartialFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    conditionDeleteFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
export var ConditionContext = createContext(defaultContextState);
export var ConditionProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = useState(initialState), ConditionDataList = _b[0], setConditionDataList = _b[1];
    /* prettier-ignore */
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var conditionList = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newCondition, newConditionserializedById_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, condition_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = ConditionDataList.results;
                    logActions = ConditionDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = ConditionDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newCondition = prevStateResults_1.map(function (el) {
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
                        newCondition = prevStateResults_1.concat(result.data.results);
                    }
                    newConditionserializedById_1 = [];
                    newCondition.map(function (el) {
                        if (el.id) {
                            newConditionserializedById_1[el.id] = el;
                        }
                    });
                    setConditionDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newConditionserializedById_1,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var conditionCreate = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, condition_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = ConditionDataList.results;
                    logActions = ConditionDataList.logActions;
                    newCount = ConditionDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setConditionDataList(__assign(__assign({}, ConditionDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var conditionRead = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newCondition, newConditionserializedById_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, condition_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = ConditionDataList.results;
                    logActions = ConditionDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newCondition = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return __assign(__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newCondition.push(result_1.data);
                    }
                    newConditionserializedById_2 = [];
                    newCondition.map(function (el) {
                        if (el.id) {
                            newConditionserializedById_2[el.id] = el;
                        }
                    });
                    setConditionDataList(__assign(__assign({}, ConditionDataList), { results: newConditionserializedById_2 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var conditionUpdate = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newCondition, newConditionserializedById_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, condition_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = ConditionDataList.results;
                    logActions = ConditionDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newCondition = void 0;
                    if (!Array.isArray(result_2.data))
                        newCondition = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newCondition = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    newConditionserializedById_3 = [];
                    newCondition.map(function (el) {
                        if (el.id) {
                            newConditionserializedById_3[el.id] = el;
                        }
                    });
                    setConditionDataList(__assign(__assign({}, ConditionDataList), { results: newConditionserializedById_3 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var conditionPartial = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newCondition, newConditionserializedById_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, condition_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = ConditionDataList.results;
                    logActions = ConditionDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newCondition = void 0;
                    if (!Array.isArray(result_3.data))
                        newCondition = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newCondition = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    newConditionserializedById_4 = [];
                    newCondition.map(function (el) {
                        if (el.id) {
                            newConditionserializedById_4[el.id] = el;
                        }
                    });
                    setConditionDataList(__assign(__assign({}, ConditionDataList), { results: newConditionserializedById_4 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var conditionDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCondition, newConditionserializedById_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, condition_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = ConditionDataList.results;
                    logActions = ConditionDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newCondition = prevStateResults.filter(function (el) { return el.id !== id; });
                    newConditionserializedById_5 = [];
                    newCondition.map(function (el) {
                        if (el.id) {
                            newConditionserializedById_5[el.id] = el;
                        }
                    });
                    setConditionDataList(__assign(__assign({}, ConditionDataList), { results: newConditionserializedById_5 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(ConditionContext.Provider, __assign({ value: {
            count: ConditionDataList.count,
            next: ConditionDataList.next,
            previous: ConditionDataList.previous,
            logActions: ConditionDataList.logActions,
            loading: loading,
            conditionData: ConditionDataList.results,
            conditionListFuncProp: conditionList,
            conditionCreateFuncProp: conditionCreate,
            conditionReadFuncProp: conditionRead,
            conditionUpdateFuncProp: conditionUpdate,
            conditionPartialFuncProp: conditionPartial,
            conditionDeleteFuncProp: conditionDelete,
        } }, { children: children })));
};
//# sourceMappingURL=condition.js.map