"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StafffunctionsProvider = exports.StafffunctionsContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var models_1 = require("@vhrs/models");
var stafffunctions_list = models_1.Api.stafffunctions_list, stafffunctions_create = models_1.Api.stafffunctions_create, stafffunctions_read = models_1.Api.stafffunctions_read, stafffunctions_update = models_1.Api.stafffunctions_update, stafffunctions_partial_update = models_1.Api.stafffunctions_partial_update, stafffunctions_delete = models_1.Api.stafffunctions_delete;
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
    stafffunctionsListFuncProp: function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    stafffunctionsCreateFuncProp: function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    stafffunctionsReadFuncProp: function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    stafffunctionsUpdateFuncProp: function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    stafffunctionsPartialFuncProp: function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    stafffunctionsDeleteFuncProp: function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
exports.StafffunctionsContext = (0, react_1.createContext)(defaultContextState);
var StafffunctionsProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = (0, react_1.useState)(initialState), StaffFunctionsDataList = _b[0], setStaffFunctionsDataList = _b[1];
    /* prettier-ignore */
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var stafffunctionsList = function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newStaffFunctions;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, stafffunctions_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = StaffFunctionsDataList.results;
                    logActions = StaffFunctionsDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = StaffFunctionsDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newStaffFunctions = prevStateResults_1.map(function (el) {
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
                        newStaffFunctions = prevStateResults_1.concat(result.data.results);
                    }
                    setStaffFunctionsDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newStaffFunctions,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var stafffunctionsCreate = function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, stafffunctions_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = StaffFunctionsDataList.results;
                    logActions = StaffFunctionsDataList.logActions;
                    newCount = StaffFunctionsDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setStaffFunctionsDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, StaffFunctionsDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var stafffunctionsRead = function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newStaffFunctions;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, stafffunctions_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = StaffFunctionsDataList.results;
                    logActions = StaffFunctionsDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newStaffFunctions = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newStaffFunctions = prevStateResults.concat(result_1.data);
                    }
                    setStaffFunctionsDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, StaffFunctionsDataList), { results: newStaffFunctions }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var stafffunctionsUpdate = function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newStaffFunctions;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, stafffunctions_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = StaffFunctionsDataList.results;
                    logActions = StaffFunctionsDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newStaffFunctions = void 0;
                    if (!Array.isArray(result_2.data))
                        newStaffFunctions = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newStaffFunctions = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_2.data) : el;
                        });
                    setStaffFunctionsDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, StaffFunctionsDataList), { results: newStaffFunctions }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var stafffunctionsPartial = function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newStaffFunctions;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, stafffunctions_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = StaffFunctionsDataList.results;
                    logActions = StaffFunctionsDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newStaffFunctions = void 0;
                    if (!Array.isArray(result_3.data))
                        newStaffFunctions = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newStaffFunctions = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_3.data) : el;
                        });
                    setStaffFunctionsDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, StaffFunctionsDataList), { results: newStaffFunctions }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var stafffunctionsDelete = function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newStaffFunctions;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, stafffunctions_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = StaffFunctionsDataList.results;
                    logActions = StaffFunctionsDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newStaffFunctions = prevStateResults.filter(function (el) { return el.id !== id; });
                    setStaffFunctionsDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, StaffFunctionsDataList), { results: newStaffFunctions }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(exports.StafffunctionsContext.Provider, (0, tslib_1.__assign)({ value: {
            count: StaffFunctionsDataList.count,
            next: StaffFunctionsDataList.next,
            previous: StaffFunctionsDataList.previous,
            logActions: StaffFunctionsDataList.logActions,
            loading: loading,
            stafffunctionsData: StaffFunctionsDataList.results,
            stafffunctionsListFuncProp: stafffunctionsList,
            stafffunctionsCreateFuncProp: stafffunctionsCreate,
            stafffunctionsReadFuncProp: stafffunctionsRead,
            stafffunctionsUpdateFuncProp: stafffunctionsUpdate,
            stafffunctionsPartialFuncProp: stafffunctionsPartial,
            stafffunctionsDeleteFuncProp: stafffunctionsDelete,
        } }, { children: children }), void 0));
};
exports.StafffunctionsProvider = StafffunctionsProvider;
//# sourceMappingURL=stafffunctions.js.map