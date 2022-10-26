import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Api } from "@vhrs/models";
var role_list = Api.role_list, role_create = Api.role_create, role_read = Api.role_read, role_update = Api.role_update, role_partial_update = Api.role_partial_update, role_delete = Api.role_delete;
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
    roleListFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    roleCreateFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    roleReadFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    roleUpdateFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    rolePartialFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    roleDeleteFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
export var RoleContext = createContext(defaultContextState);
export var RoleProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = useState(initialState), RoleDataList = _b[0], setRoleDataList = _b[1];
    /* prettier-ignore */
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var roleList = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newRole, newRoleserializedById_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, role_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = RoleDataList.results;
                    logActions = RoleDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = RoleDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newRole = prevStateResults_1.map(function (el) {
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
                        newRole = prevStateResults_1.concat(result.data.results);
                    }
                    newRoleserializedById_1 = [];
                    newRole.map(function (el) {
                        if (el.id) {
                            newRoleserializedById_1[el.id] = el;
                        }
                    });
                    setRoleDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newRoleserializedById_1,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var roleCreate = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, role_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = RoleDataList.results;
                    logActions = RoleDataList.logActions;
                    newCount = RoleDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setRoleDataList(__assign(__assign({}, RoleDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var roleRead = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newRole, newRoleserializedById_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, role_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = RoleDataList.results;
                    logActions = RoleDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newRole = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return __assign(__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newRole.push(result_1.data);
                    }
                    newRoleserializedById_2 = [];
                    newRole.map(function (el) {
                        if (el.id) {
                            newRoleserializedById_2[el.id] = el;
                        }
                    });
                    setRoleDataList(__assign(__assign({}, RoleDataList), { results: newRoleserializedById_2 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var roleUpdate = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newRole, newRoleserializedById_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, role_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = RoleDataList.results;
                    logActions = RoleDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newRole = void 0;
                    if (!Array.isArray(result_2.data))
                        newRole = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newRole = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    newRoleserializedById_3 = [];
                    newRole.map(function (el) {
                        if (el.id) {
                            newRoleserializedById_3[el.id] = el;
                        }
                    });
                    setRoleDataList(__assign(__assign({}, RoleDataList), { results: newRoleserializedById_3 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var rolePartial = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newRole, newRoleserializedById_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, role_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = RoleDataList.results;
                    logActions = RoleDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newRole = void 0;
                    if (!Array.isArray(result_3.data))
                        newRole = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newRole = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    newRoleserializedById_4 = [];
                    newRole.map(function (el) {
                        if (el.id) {
                            newRoleserializedById_4[el.id] = el;
                        }
                    });
                    setRoleDataList(__assign(__assign({}, RoleDataList), { results: newRoleserializedById_4 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var roleDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newRole, newRoleserializedById_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, role_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = RoleDataList.results;
                    logActions = RoleDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newRole = prevStateResults.filter(function (el) { return el.id !== id; });
                    newRoleserializedById_5 = [];
                    newRole.map(function (el) {
                        if (el.id) {
                            newRoleserializedById_5[el.id] = el;
                        }
                    });
                    setRoleDataList(__assign(__assign({}, RoleDataList), { results: newRoleserializedById_5 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(RoleContext.Provider, __assign({ value: {
            count: RoleDataList.count,
            next: RoleDataList.next,
            previous: RoleDataList.previous,
            logActions: RoleDataList.logActions,
            loading: loading,
            roleData: RoleDataList.results,
            roleListFuncProp: roleList,
            roleCreateFuncProp: roleCreate,
            roleReadFuncProp: roleRead,
            roleUpdateFuncProp: roleUpdate,
            rolePartialFuncProp: rolePartial,
            roleDeleteFuncProp: roleDelete,
        } }, { children: children })));
};
//# sourceMappingURL=role.js.map