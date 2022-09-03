"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StafflogProvider = exports.StafflogContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var models_1 = require("@vhrs/models");
var stafflog_list = models_1.Api.stafflog_list, stafflog_create = models_1.Api.stafflog_create, stafflog_read = models_1.Api.stafflog_read, stafflog_update = models_1.Api.stafflog_update, stafflog_partial_update = models_1.Api.stafflog_partial_update, stafflog_delete = models_1.Api.stafflog_delete;
var react_1 = require("react");
var initialState = {
    count: 0,
    logActions: [],
    results: [],
};
var defaultContextState = {
    count: 0,
    loading: false,
    logActions: [],
    stafflogListFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    stafflogCreateFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    stafflogReadFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    stafflogUpdateFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    stafflogPartialFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    stafflogDeleteFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
exports.StafflogContext = (0, react_1.createContext)(defaultContextState);
var StafflogProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = (0, react_1.useState)(initialState), StaffLogDataList = _b[0], setStaffLogDataList = _b[1];
    /* prettier-ignore */
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var stafflogList = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newStaffLog;
        return tslib_1.__generator(this, function (_a) {
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
                            return tslib_1.__assign(tslib_1.__assign({}, el), preEl[0]);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_1) {
                        newStaffLog = prevStateResults_1.concat(result.data.results);
                    }
                    setStaffLogDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newStaffLog,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var stafflogCreate = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return tslib_1.__generator(this, function (_a) {
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
                    setStaffLogDataList(tslib_1.__assign(tslib_1.__assign({}, StaffLogDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var stafflogRead = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newStaffLog;
        return tslib_1.__generator(this, function (_a) {
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
                            return tslib_1.__assign(tslib_1.__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newStaffLog = prevStateResults.concat(result_1.data);
                    }
                    setStaffLogDataList(tslib_1.__assign(tslib_1.__assign({}, StaffLogDataList), { results: newStaffLog }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var stafflogUpdate = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newStaffLog;
        return tslib_1.__generator(this, function (_a) {
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
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newStaffLog = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    setStaffLogDataList(tslib_1.__assign(tslib_1.__assign({}, StaffLogDataList), { results: newStaffLog }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var stafflogPartial = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newStaffLog;
        return tslib_1.__generator(this, function (_a) {
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
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newStaffLog = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    setStaffLogDataList(tslib_1.__assign(tslib_1.__assign({}, StaffLogDataList), { results: newStaffLog }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var stafflogDelete = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newStaffLog;
        return tslib_1.__generator(this, function (_a) {
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
                    setStaffLogDataList(tslib_1.__assign(tslib_1.__assign({}, StaffLogDataList), { results: newStaffLog }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(exports.StafflogContext.Provider, tslib_1.__assign({ value: {
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
exports.StafflogProvider = StafflogProvider;
//# sourceMappingURL=stafflog.js.map