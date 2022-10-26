import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Api } from "@vhrs/models";
var expertise_list = Api.expertise_list, expertise_create = Api.expertise_create, expertise_read = Api.expertise_read, expertise_update = Api.expertise_update, expertise_partial_update = Api.expertise_partial_update, expertise_delete = Api.expertise_delete;
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
    expertiseListFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    expertiseCreateFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    expertiseReadFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    expertiseUpdateFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    expertisePartialFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    expertiseDeleteFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
export var ExpertiseContext = createContext(defaultContextState);
export var ExpertiseProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = useState(initialState), ExpertiseDataList = _b[0], setExpertiseDataList = _b[1];
    /* prettier-ignore */
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var expertiseList = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newExpertise, newExpertiseserializedById_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, expertise_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = ExpertiseDataList.results;
                    logActions = ExpertiseDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = ExpertiseDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newExpertise = prevStateResults_1.map(function (el) {
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
                        newExpertise = prevStateResults_1.concat(result.data.results);
                    }
                    newExpertiseserializedById_1 = [];
                    newExpertise.map(function (el) {
                        if (el.id) {
                            newExpertiseserializedById_1[el.id] = el;
                        }
                    });
                    setExpertiseDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newExpertiseserializedById_1,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var expertiseCreate = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, expertise_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = ExpertiseDataList.results;
                    logActions = ExpertiseDataList.logActions;
                    newCount = ExpertiseDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setExpertiseDataList(__assign(__assign({}, ExpertiseDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var expertiseRead = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newExpertise, newExpertiseserializedById_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, expertise_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = ExpertiseDataList.results;
                    logActions = ExpertiseDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newExpertise = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return __assign(__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newExpertise.push(result_1.data);
                    }
                    newExpertiseserializedById_2 = [];
                    newExpertise.map(function (el) {
                        if (el.id) {
                            newExpertiseserializedById_2[el.id] = el;
                        }
                    });
                    setExpertiseDataList(__assign(__assign({}, ExpertiseDataList), { results: newExpertiseserializedById_2 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var expertiseUpdate = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newExpertise, newExpertiseserializedById_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, expertise_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = ExpertiseDataList.results;
                    logActions = ExpertiseDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newExpertise = void 0;
                    if (!Array.isArray(result_2.data))
                        newExpertise = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newExpertise = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    newExpertiseserializedById_3 = [];
                    newExpertise.map(function (el) {
                        if (el.id) {
                            newExpertiseserializedById_3[el.id] = el;
                        }
                    });
                    setExpertiseDataList(__assign(__assign({}, ExpertiseDataList), { results: newExpertiseserializedById_3 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var expertisePartial = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newExpertise, newExpertiseserializedById_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, expertise_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = ExpertiseDataList.results;
                    logActions = ExpertiseDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newExpertise = void 0;
                    if (!Array.isArray(result_3.data))
                        newExpertise = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newExpertise = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    newExpertiseserializedById_4 = [];
                    newExpertise.map(function (el) {
                        if (el.id) {
                            newExpertiseserializedById_4[el.id] = el;
                        }
                    });
                    setExpertiseDataList(__assign(__assign({}, ExpertiseDataList), { results: newExpertiseserializedById_4 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var expertiseDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newExpertise, newExpertiseserializedById_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, expertise_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = ExpertiseDataList.results;
                    logActions = ExpertiseDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newExpertise = prevStateResults.filter(function (el) { return el.id !== id; });
                    newExpertiseserializedById_5 = [];
                    newExpertise.map(function (el) {
                        if (el.id) {
                            newExpertiseserializedById_5[el.id] = el;
                        }
                    });
                    setExpertiseDataList(__assign(__assign({}, ExpertiseDataList), { results: newExpertiseserializedById_5 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(ExpertiseContext.Provider, __assign({ value: {
            count: ExpertiseDataList.count,
            next: ExpertiseDataList.next,
            previous: ExpertiseDataList.previous,
            logActions: ExpertiseDataList.logActions,
            loading: loading,
            expertiseData: ExpertiseDataList.results,
            expertiseListFuncProp: expertiseList,
            expertiseCreateFuncProp: expertiseCreate,
            expertiseReadFuncProp: expertiseRead,
            expertiseUpdateFuncProp: expertiseUpdate,
            expertisePartialFuncProp: expertisePartial,
            expertiseDeleteFuncProp: expertiseDelete,
        } }, { children: children })));
};
//# sourceMappingURL=expertise.js.map