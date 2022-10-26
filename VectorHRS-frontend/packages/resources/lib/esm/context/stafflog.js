import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Api } from "@vhrs/models";
var stafflog_list = Api.stafflog_list, stafflog_create = Api.stafflog_create, stafflog_read = Api.stafflog_read, stafflog_update = Api.stafflog_update, stafflog_partial_update = Api.stafflog_partial_update, stafflog_delete = Api.stafflog_delete;
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
    stafflogListFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    stafflogCreateFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    stafflogReadFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    stafflogUpdateFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    stafflogPartialFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    stafflogDeleteFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
export var StafflogContext = createContext(defaultContextState);
export var StafflogProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = useState(initialState), StaffLogDataList = _b[0], setStaffLogDataList = _b[1];
    /* prettier-ignore */
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var stafflogList = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newStaffLog, newStaffLogserializedById_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, stafflog_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = StaffLogDataList.results;
                    logActions = StaffLogDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = StaffLogDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newStaffLog = prevStateResults_1.map(function (el) {
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
                        newStaffLog = prevStateResults_1.concat(result.data.results);
                    }
                    newStaffLogserializedById_1 = [];
                    newStaffLog.map(function (el) {
                        if (el.id) {
                            newStaffLogserializedById_1[el.id] = el;
                        }
                    });
                    setStaffLogDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newStaffLogserializedById_1,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var stafflogCreate = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, stafflog_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = StaffLogDataList.results;
                    logActions = StaffLogDataList.logActions;
                    newCount = StaffLogDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setStaffLogDataList(__assign(__assign({}, StaffLogDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var stafflogRead = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newStaffLog, newStaffLogserializedById_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, stafflog_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = StaffLogDataList.results;
                    logActions = StaffLogDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newStaffLog = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return __assign(__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newStaffLog.push(result_1.data);
                    }
                    newStaffLogserializedById_2 = [];
                    newStaffLog.map(function (el) {
                        if (el.id) {
                            newStaffLogserializedById_2[el.id] = el;
                        }
                    });
                    setStaffLogDataList(__assign(__assign({}, StaffLogDataList), { results: newStaffLogserializedById_2 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var stafflogUpdate = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newStaffLog, newStaffLogserializedById_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, stafflog_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = StaffLogDataList.results;
                    logActions = StaffLogDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newStaffLog = void 0;
                    if (!Array.isArray(result_2.data))
                        newStaffLog = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newStaffLog = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    newStaffLogserializedById_3 = [];
                    newStaffLog.map(function (el) {
                        if (el.id) {
                            newStaffLogserializedById_3[el.id] = el;
                        }
                    });
                    setStaffLogDataList(__assign(__assign({}, StaffLogDataList), { results: newStaffLogserializedById_3 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var stafflogPartial = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newStaffLog, newStaffLogserializedById_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, stafflog_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = StaffLogDataList.results;
                    logActions = StaffLogDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newStaffLog = void 0;
                    if (!Array.isArray(result_3.data))
                        newStaffLog = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newStaffLog = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    newStaffLogserializedById_4 = [];
                    newStaffLog.map(function (el) {
                        if (el.id) {
                            newStaffLogserializedById_4[el.id] = el;
                        }
                    });
                    setStaffLogDataList(__assign(__assign({}, StaffLogDataList), { results: newStaffLogserializedById_4 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var stafflogDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newStaffLog, newStaffLogserializedById_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, stafflog_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = StaffLogDataList.results;
                    logActions = StaffLogDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newStaffLog = prevStateResults.filter(function (el) { return el.id !== id; });
                    newStaffLogserializedById_5 = [];
                    newStaffLog.map(function (el) {
                        if (el.id) {
                            newStaffLogserializedById_5[el.id] = el;
                        }
                    });
                    setStaffLogDataList(__assign(__assign({}, StaffLogDataList), { results: newStaffLogserializedById_5 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(StafflogContext.Provider, __assign({ value: {
            count: StaffLogDataList.count,
            next: StaffLogDataList.next,
            previous: StaffLogDataList.previous,
            logActions: StaffLogDataList.logActions,
            loading: loading,
            stafflogData: StaffLogDataList.results,
            stafflogListFuncProp: stafflogList,
            stafflogCreateFuncProp: stafflogCreate,
            stafflogReadFuncProp: stafflogRead,
            stafflogUpdateFuncProp: stafflogUpdate,
            stafflogPartialFuncProp: stafflogPartial,
            stafflogDeleteFuncProp: stafflogDelete,
        } }, { children: children })));
};
//# sourceMappingURL=stafflog.js.map