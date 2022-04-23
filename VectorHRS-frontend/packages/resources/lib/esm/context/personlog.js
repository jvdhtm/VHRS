import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Api } from "@vhrs/models";
var personlog_list = Api.personlog_list, personlog_create = Api.personlog_create, personlog_read = Api.personlog_read, personlog_update = Api.personlog_update, personlog_partial_update = Api.personlog_partial_update, personlog_delete = Api.personlog_delete;
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
    personlogListFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personlogCreateFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personlogReadFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personlogUpdateFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personlogPartialFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personlogDeleteFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
export var PersonlogContext = createContext(defaultContextState);
export var PersonlogProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = useState(initialState), PersonLogDataList = _b[0], setPersonLogDataList = _b[1];
    /* prettier-ignore */
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var personlogList = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newPersonLog;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, personlog_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = PersonLogDataList.results;
                    logActions = PersonLogDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = PersonLogDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newPersonLog = prevStateResults_1.map(function (el) {
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
                        newPersonLog = prevStateResults_1.concat(result.data.results);
                    }
                    setPersonLogDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newPersonLog,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personlogCreate = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, personlog_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = PersonLogDataList.results;
                    logActions = PersonLogDataList.logActions;
                    newCount = PersonLogDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setPersonLogDataList(__assign(__assign({}, PersonLogDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personlogRead = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newPersonLog;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, personlog_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = PersonLogDataList.results;
                    logActions = PersonLogDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newPersonLog = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return __assign(__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newPersonLog = prevStateResults.concat(result_1.data);
                    }
                    setPersonLogDataList(__assign(__assign({}, PersonLogDataList), { results: newPersonLog }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personlogUpdate = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newPersonLog;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, personlog_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = PersonLogDataList.results;
                    logActions = PersonLogDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newPersonLog = void 0;
                    if (!Array.isArray(result_2.data))
                        newPersonLog = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newPersonLog = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    setPersonLogDataList(__assign(__assign({}, PersonLogDataList), { results: newPersonLog }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personlogPartial = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newPersonLog;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, personlog_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = PersonLogDataList.results;
                    logActions = PersonLogDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newPersonLog = void 0;
                    if (!Array.isArray(result_3.data))
                        newPersonLog = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newPersonLog = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    setPersonLogDataList(__assign(__assign({}, PersonLogDataList), { results: newPersonLog }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personlogDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newPersonLog;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, personlog_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = PersonLogDataList.results;
                    logActions = PersonLogDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newPersonLog = prevStateResults.filter(function (el) { return el.id !== id; });
                    setPersonLogDataList(__assign(__assign({}, PersonLogDataList), { results: newPersonLog }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(PersonlogContext.Provider, __assign({ value: {
            count: PersonLogDataList.count,
            next: PersonLogDataList.next,
            previous: PersonLogDataList.previous,
            logActions: PersonLogDataList.logActions,
            loading: loading,
            personlogData: PersonLogDataList.results,
            personlogListFuncProp: personlogList,
            personlogCreateFuncProp: personlogCreate,
            personlogReadFuncProp: personlogRead,
            personlogUpdateFuncProp: personlogUpdate,
            personlogPartialFuncProp: personlogPartial,
            personlogDeleteFuncProp: personlogDelete,
        } }, { children: children })));
};
//# sourceMappingURL=personlog.js.map