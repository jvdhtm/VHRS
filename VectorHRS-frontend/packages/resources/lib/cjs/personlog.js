"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonlogProvider = exports.PersonlogContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var models_1 = require("@vhrs/models");
var personlog_list = models_1.Api.personlog_list, personlog_create = models_1.Api.personlog_create, personlog_read = models_1.Api.personlog_read, personlog_update = models_1.Api.personlog_update, personlog_partial_update = models_1.Api.personlog_partial_update, personlog_delete = models_1.Api.personlog_delete;
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
    personlogListFuncProp: function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personlogCreateFuncProp: function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personlogReadFuncProp: function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personlogUpdateFuncProp: function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personlogPartialFuncProp: function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personlogDeleteFuncProp: function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
exports.PersonlogContext = (0, react_1.createContext)(defaultContextState);
var PersonlogProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = (0, react_1.useState)(initialState), PersonLogDataList = _b[0], setPersonLogDataList = _b[1];
    /* prettier-ignore */
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var personlogList = function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newPersonLog;
        return (0, tslib_1.__generator)(this, function (_a) {
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
                            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), preEl[0]);
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
    var personlogCreate = function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return (0, tslib_1.__generator)(this, function (_a) {
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
                    setPersonLogDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, PersonLogDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personlogRead = function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newPersonLog;
        return (0, tslib_1.__generator)(this, function (_a) {
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
                            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newPersonLog = prevStateResults.concat(result_1.data);
                    }
                    setPersonLogDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, PersonLogDataList), { results: newPersonLog }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personlogUpdate = function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newPersonLog;
        return (0, tslib_1.__generator)(this, function (_a) {
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
                            return el.id === result_2.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newPersonLog = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_2.data) : el;
                        });
                    setPersonLogDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, PersonLogDataList), { results: newPersonLog }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personlogPartial = function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newPersonLog;
        return (0, tslib_1.__generator)(this, function (_a) {
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
                            return el.id === result_3.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newPersonLog = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_3.data) : el;
                        });
                    setPersonLogDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, PersonLogDataList), { results: newPersonLog }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personlogDelete = function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newPersonLog;
        return (0, tslib_1.__generator)(this, function (_a) {
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
                    setPersonLogDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, PersonLogDataList), { results: newPersonLog }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(exports.PersonlogContext.Provider, (0, tslib_1.__assign)({ value: {
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
        } }, { children: children }), void 0));
};
exports.PersonlogProvider = PersonlogProvider;
//# sourceMappingURL=personlog.js.map