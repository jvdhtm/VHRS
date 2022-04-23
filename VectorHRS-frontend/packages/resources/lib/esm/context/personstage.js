import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Api } from "@vhrs/models";
var personstage_list = Api.personstage_list, personstage_create = Api.personstage_create, personstage_read = Api.personstage_read, personstage_update = Api.personstage_update, personstage_partial_update = Api.personstage_partial_update, personstage_delete = Api.personstage_delete;
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
    personstageListFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personstageCreateFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personstageReadFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personstageUpdateFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personstagePartialFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personstageDeleteFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
export var PersonstageContext = createContext(defaultContextState);
export var PersonstageProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = useState(initialState), PersonStageDataList = _b[0], setPersonStageDataList = _b[1];
    /* prettier-ignore */
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var personstageList = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newPersonStage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, personstage_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = PersonStageDataList.results;
                    logActions = PersonStageDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = PersonStageDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newPersonStage = prevStateResults_1.map(function (el) {
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
                        newPersonStage = prevStateResults_1.concat(result.data.results);
                    }
                    setPersonStageDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newPersonStage,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personstageCreate = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, personstage_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = PersonStageDataList.results;
                    logActions = PersonStageDataList.logActions;
                    newCount = PersonStageDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setPersonStageDataList(__assign(__assign({}, PersonStageDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personstageRead = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newPersonStage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, personstage_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = PersonStageDataList.results;
                    logActions = PersonStageDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newPersonStage = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return __assign(__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newPersonStage = prevStateResults.concat(result_1.data);
                    }
                    setPersonStageDataList(__assign(__assign({}, PersonStageDataList), { results: newPersonStage }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personstageUpdate = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newPersonStage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, personstage_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = PersonStageDataList.results;
                    logActions = PersonStageDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newPersonStage = void 0;
                    if (!Array.isArray(result_2.data))
                        newPersonStage = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newPersonStage = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    setPersonStageDataList(__assign(__assign({}, PersonStageDataList), { results: newPersonStage }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personstagePartial = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newPersonStage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, personstage_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = PersonStageDataList.results;
                    logActions = PersonStageDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newPersonStage = void 0;
                    if (!Array.isArray(result_3.data))
                        newPersonStage = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newPersonStage = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    setPersonStageDataList(__assign(__assign({}, PersonStageDataList), { results: newPersonStage }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personstageDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newPersonStage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, personstage_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = PersonStageDataList.results;
                    logActions = PersonStageDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newPersonStage = prevStateResults.filter(function (el) { return el.id !== id; });
                    setPersonStageDataList(__assign(__assign({}, PersonStageDataList), { results: newPersonStage }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(PersonstageContext.Provider, __assign({ value: {
            count: PersonStageDataList.count,
            next: PersonStageDataList.next,
            previous: PersonStageDataList.previous,
            logActions: PersonStageDataList.logActions,
            loading: loading,
            personstageData: PersonStageDataList.results,
            personstageListFuncProp: personstageList,
            personstageCreateFuncProp: personstageCreate,
            personstageReadFuncProp: personstageRead,
            personstageUpdateFuncProp: personstageUpdate,
            personstagePartialFuncProp: personstagePartial,
            personstageDeleteFuncProp: personstageDelete,
        } }, { children: children })));
};
//# sourceMappingURL=personstage.js.map