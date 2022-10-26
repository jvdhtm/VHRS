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
    stafffunctionsListFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    stafffunctionsCreateFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    stafffunctionsReadFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    stafffunctionsUpdateFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    stafffunctionsPartialFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    stafffunctionsDeleteFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
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
    var stafffunctionsList = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newStaffFunctions, newStaffFunctionsserializedById_1;
        return tslib_1.__generator(this, function (_a) {
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
                            return tslib_1.__assign(tslib_1.__assign({}, el), preEl[0]);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_1) {
                        newStaffFunctions = prevStateResults_1.concat(result.data.results);
                    }
                    newStaffFunctionsserializedById_1 = [];
                    newStaffFunctions.map(function (el) {
                        if (el.id) {
                            newStaffFunctionsserializedById_1[el.id] = el;
                        }
                    });
                    setStaffFunctionsDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newStaffFunctionsserializedById_1,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var stafffunctionsCreate = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return tslib_1.__generator(this, function (_a) {
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
                    setStaffFunctionsDataList(tslib_1.__assign(tslib_1.__assign({}, StaffFunctionsDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var stafffunctionsRead = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newStaffFunctions, newStaffFunctionsserializedById_2;
        return tslib_1.__generator(this, function (_a) {
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
                            return tslib_1.__assign(tslib_1.__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newStaffFunctions.push(result_1.data);
                    }
                    newStaffFunctionsserializedById_2 = [];
                    newStaffFunctions.map(function (el) {
                        if (el.id) {
                            newStaffFunctionsserializedById_2[el.id] = el;
                        }
                    });
                    setStaffFunctionsDataList(tslib_1.__assign(tslib_1.__assign({}, StaffFunctionsDataList), { results: newStaffFunctionsserializedById_2 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var stafffunctionsUpdate = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newStaffFunctions, newStaffFunctionsserializedById_3;
        return tslib_1.__generator(this, function (_a) {
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
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newStaffFunctions = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    newStaffFunctionsserializedById_3 = [];
                    newStaffFunctions.map(function (el) {
                        if (el.id) {
                            newStaffFunctionsserializedById_3[el.id] = el;
                        }
                    });
                    setStaffFunctionsDataList(tslib_1.__assign(tslib_1.__assign({}, StaffFunctionsDataList), { results: newStaffFunctionsserializedById_3 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var stafffunctionsPartial = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newStaffFunctions, newStaffFunctionsserializedById_4;
        return tslib_1.__generator(this, function (_a) {
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
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newStaffFunctions = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    newStaffFunctionsserializedById_4 = [];
                    newStaffFunctions.map(function (el) {
                        if (el.id) {
                            newStaffFunctionsserializedById_4[el.id] = el;
                        }
                    });
                    setStaffFunctionsDataList(tslib_1.__assign(tslib_1.__assign({}, StaffFunctionsDataList), { results: newStaffFunctionsserializedById_4 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var stafffunctionsDelete = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newStaffFunctions, newStaffFunctionsserializedById_5;
        return tslib_1.__generator(this, function (_a) {
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
                    newStaffFunctionsserializedById_5 = [];
                    newStaffFunctions.map(function (el) {
                        if (el.id) {
                            newStaffFunctionsserializedById_5[el.id] = el;
                        }
                    });
                    setStaffFunctionsDataList(tslib_1.__assign(tslib_1.__assign({}, StaffFunctionsDataList), { results: newStaffFunctionsserializedById_5 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(exports.StafffunctionsContext.Provider, tslib_1.__assign({ value: {
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
        } }, { children: children })));
};
exports.StafffunctionsProvider = StafffunctionsProvider;
//# sourceMappingURL=stafffunctions.js.map