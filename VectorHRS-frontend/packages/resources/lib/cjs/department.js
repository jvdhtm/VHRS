"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentProvider = exports.DepartmentContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var models_1 = require("@vhrs/models");
var department_list = models_1.Api.department_list, department_create = models_1.Api.department_create, department_read = models_1.Api.department_read, department_update = models_1.Api.department_update, department_partial_update = models_1.Api.department_partial_update, department_delete = models_1.Api.department_delete;
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
    departmentListFuncProp: function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    departmentCreateFuncProp: function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    departmentReadFuncProp: function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    departmentUpdateFuncProp: function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    departmentPartialFuncProp: function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    departmentDeleteFuncProp: function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
exports.DepartmentContext = (0, react_1.createContext)(defaultContextState);
var DepartmentProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = (0, react_1.useState)(initialState), DepartmentDataList = _b[0], setDepartmentDataList = _b[1];
    /* prettier-ignore */
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var departmentList = function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newDepartment;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, department_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = DepartmentDataList.results;
                    logActions = DepartmentDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = DepartmentDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newDepartment = prevStateResults_1.map(function (el) {
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
                        newDepartment = prevStateResults_1.concat(result.data.results);
                    }
                    setDepartmentDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newDepartment,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var departmentCreate = function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, department_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = DepartmentDataList.results;
                    logActions = DepartmentDataList.logActions;
                    newCount = DepartmentDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setDepartmentDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, DepartmentDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var departmentRead = function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newDepartment;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, department_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = DepartmentDataList.results;
                    logActions = DepartmentDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newDepartment = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newDepartment = prevStateResults.concat(result_1.data);
                    }
                    setDepartmentDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, DepartmentDataList), { results: newDepartment }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var departmentUpdate = function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newDepartment;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, department_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = DepartmentDataList.results;
                    logActions = DepartmentDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newDepartment = void 0;
                    if (!Array.isArray(result_2.data))
                        newDepartment = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newDepartment = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_2.data) : el;
                        });
                    setDepartmentDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, DepartmentDataList), { results: newDepartment }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var departmentPartial = function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newDepartment;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, department_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = DepartmentDataList.results;
                    logActions = DepartmentDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newDepartment = void 0;
                    if (!Array.isArray(result_3.data))
                        newDepartment = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newDepartment = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_3.data) : el;
                        });
                    setDepartmentDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, DepartmentDataList), { results: newDepartment }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var departmentDelete = function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newDepartment;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, department_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = DepartmentDataList.results;
                    logActions = DepartmentDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newDepartment = prevStateResults.filter(function (el) { return el.id !== id; });
                    setDepartmentDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, DepartmentDataList), { results: newDepartment }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(exports.DepartmentContext.Provider, (0, tslib_1.__assign)({ value: {
            count: DepartmentDataList.count,
            next: DepartmentDataList.next,
            previous: DepartmentDataList.previous,
            logActions: DepartmentDataList.logActions,
            loading: loading,
            departmentData: DepartmentDataList.results,
            departmentListFuncProp: departmentList,
            departmentCreateFuncProp: departmentCreate,
            departmentReadFuncProp: departmentRead,
            departmentUpdateFuncProp: departmentUpdate,
            departmentPartialFuncProp: departmentPartial,
            departmentDeleteFuncProp: departmentDelete,
        } }, { children: children }), void 0));
};
exports.DepartmentProvider = DepartmentProvider;
//# sourceMappingURL=department.js.map