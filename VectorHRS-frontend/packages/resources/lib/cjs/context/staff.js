"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffProvider = exports.StaffContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var models_1 = require("@vhrs/models");
var staff_list = models_1.Api.staff_list, staff_create = models_1.Api.staff_create, staff_read = models_1.Api.staff_read, staff_update = models_1.Api.staff_update, staff_partial_update = models_1.Api.staff_partial_update, staff_delete = models_1.Api.staff_delete;
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
    staffListFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    staffCreateFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    staffReadFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    staffUpdateFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    staffPartialFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    staffDeleteFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
exports.StaffContext = (0, react_1.createContext)(defaultContextState);
var StaffProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = (0, react_1.useState)(initialState), StaffDataList = _b[0], setStaffDataList = _b[1];
    /* prettier-ignore */
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var staffList = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newStaff, newStaffserializedById_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, staff_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = StaffDataList.results;
                    logActions = StaffDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = StaffDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newStaff = prevStateResults_1.map(function (el) {
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
                        newStaff = prevStateResults_1.concat(result.data.results);
                    }
                    newStaffserializedById_1 = [];
                    newStaff.map(function (el) {
                        if (el.id) {
                            newStaffserializedById_1[el.id] = el;
                        }
                    });
                    setStaffDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newStaffserializedById_1,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var staffCreate = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, staff_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = StaffDataList.results;
                    logActions = StaffDataList.logActions;
                    newCount = StaffDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setStaffDataList(tslib_1.__assign(tslib_1.__assign({}, StaffDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var staffRead = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newStaff, newStaffserializedById_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, staff_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = StaffDataList.results;
                    logActions = StaffDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newStaff = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return tslib_1.__assign(tslib_1.__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newStaff.push(result_1.data);
                    }
                    newStaffserializedById_2 = [];
                    newStaff.map(function (el) {
                        if (el.id) {
                            newStaffserializedById_2[el.id] = el;
                        }
                    });
                    setStaffDataList(tslib_1.__assign(tslib_1.__assign({}, StaffDataList), { results: newStaffserializedById_2 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var staffUpdate = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newStaff, newStaffserializedById_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, staff_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = StaffDataList.results;
                    logActions = StaffDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newStaff = void 0;
                    if (!Array.isArray(result_2.data))
                        newStaff = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newStaff = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    newStaffserializedById_3 = [];
                    newStaff.map(function (el) {
                        if (el.id) {
                            newStaffserializedById_3[el.id] = el;
                        }
                    });
                    setStaffDataList(tslib_1.__assign(tslib_1.__assign({}, StaffDataList), { results: newStaffserializedById_3 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var staffPartial = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newStaff, newStaffserializedById_4;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, staff_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = StaffDataList.results;
                    logActions = StaffDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newStaff = void 0;
                    if (!Array.isArray(result_3.data))
                        newStaff = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newStaff = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    newStaffserializedById_4 = [];
                    newStaff.map(function (el) {
                        if (el.id) {
                            newStaffserializedById_4[el.id] = el;
                        }
                    });
                    setStaffDataList(tslib_1.__assign(tslib_1.__assign({}, StaffDataList), { results: newStaffserializedById_4 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var staffDelete = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newStaff, newStaffserializedById_5;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, staff_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = StaffDataList.results;
                    logActions = StaffDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newStaff = prevStateResults.filter(function (el) { return el.id !== id; });
                    newStaffserializedById_5 = [];
                    newStaff.map(function (el) {
                        if (el.id) {
                            newStaffserializedById_5[el.id] = el;
                        }
                    });
                    setStaffDataList(tslib_1.__assign(tslib_1.__assign({}, StaffDataList), { results: newStaffserializedById_5 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(exports.StaffContext.Provider, tslib_1.__assign({ value: {
            count: StaffDataList.count,
            next: StaffDataList.next,
            previous: StaffDataList.previous,
            logActions: StaffDataList.logActions,
            loading: loading,
            staffData: StaffDataList.results,
            staffListFuncProp: staffList,
            staffCreateFuncProp: staffCreate,
            staffReadFuncProp: staffRead,
            staffUpdateFuncProp: staffUpdate,
            staffPartialFuncProp: staffPartial,
            staffDeleteFuncProp: staffDelete,
        } }, { children: children })));
};
exports.StaffProvider = StaffProvider;
//# sourceMappingURL=staff.js.map