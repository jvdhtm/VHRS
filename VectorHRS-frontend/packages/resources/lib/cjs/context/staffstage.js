"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffstageProvider = exports.StaffstageContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var models_1 = require("@vhrs/models");
var staffstage_list = models_1.Api.staffstage_list, staffstage_create = models_1.Api.staffstage_create, staffstage_read = models_1.Api.staffstage_read, staffstage_update = models_1.Api.staffstage_update, staffstage_partial_update = models_1.Api.staffstage_partial_update, staffstage_delete = models_1.Api.staffstage_delete;
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
    staffstageListFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    staffstageCreateFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    staffstageReadFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    staffstageUpdateFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    staffstagePartialFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    staffstageDeleteFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
exports.StaffstageContext = (0, react_1.createContext)(defaultContextState);
var StaffstageProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = (0, react_1.useState)(initialState), StaffStageDataList = _b[0], setStaffStageDataList = _b[1];
    /* prettier-ignore */
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var staffstageList = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newStaffStage, newStaffStageserializedById_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, staffstage_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = StaffStageDataList.results;
                    logActions = StaffStageDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = StaffStageDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newStaffStage = prevStateResults_1.map(function (el) {
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
                        newStaffStage = prevStateResults_1.concat(result.data.results);
                    }
                    newStaffStageserializedById_1 = [];
                    newStaffStage.map(function (el) {
                        if (el.id) {
                            newStaffStageserializedById_1[el.id] = el;
                        }
                    });
                    setStaffStageDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newStaffStageserializedById_1,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var staffstageCreate = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, staffstage_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = StaffStageDataList.results;
                    logActions = StaffStageDataList.logActions;
                    newCount = StaffStageDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setStaffStageDataList(tslib_1.__assign(tslib_1.__assign({}, StaffStageDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var staffstageRead = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newStaffStage, newStaffStageserializedById_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, staffstage_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = StaffStageDataList.results;
                    logActions = StaffStageDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newStaffStage = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return tslib_1.__assign(tslib_1.__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newStaffStage.push(result_1.data);
                    }
                    newStaffStageserializedById_2 = [];
                    newStaffStage.map(function (el) {
                        if (el.id) {
                            newStaffStageserializedById_2[el.id] = el;
                        }
                    });
                    setStaffStageDataList(tslib_1.__assign(tslib_1.__assign({}, StaffStageDataList), { results: newStaffStageserializedById_2 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var staffstageUpdate = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newStaffStage, newStaffStageserializedById_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, staffstage_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = StaffStageDataList.results;
                    logActions = StaffStageDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newStaffStage = void 0;
                    if (!Array.isArray(result_2.data))
                        newStaffStage = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newStaffStage = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    newStaffStageserializedById_3 = [];
                    newStaffStage.map(function (el) {
                        if (el.id) {
                            newStaffStageserializedById_3[el.id] = el;
                        }
                    });
                    setStaffStageDataList(tslib_1.__assign(tslib_1.__assign({}, StaffStageDataList), { results: newStaffStageserializedById_3 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var staffstagePartial = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newStaffStage, newStaffStageserializedById_4;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, staffstage_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = StaffStageDataList.results;
                    logActions = StaffStageDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newStaffStage = void 0;
                    if (!Array.isArray(result_3.data))
                        newStaffStage = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newStaffStage = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    newStaffStageserializedById_4 = [];
                    newStaffStage.map(function (el) {
                        if (el.id) {
                            newStaffStageserializedById_4[el.id] = el;
                        }
                    });
                    setStaffStageDataList(tslib_1.__assign(tslib_1.__assign({}, StaffStageDataList), { results: newStaffStageserializedById_4 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var staffstageDelete = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newStaffStage, newStaffStageserializedById_5;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, staffstage_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = StaffStageDataList.results;
                    logActions = StaffStageDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newStaffStage = prevStateResults.filter(function (el) { return el.id !== id; });
                    newStaffStageserializedById_5 = [];
                    newStaffStage.map(function (el) {
                        if (el.id) {
                            newStaffStageserializedById_5[el.id] = el;
                        }
                    });
                    setStaffStageDataList(tslib_1.__assign(tslib_1.__assign({}, StaffStageDataList), { results: newStaffStageserializedById_5 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(exports.StaffstageContext.Provider, tslib_1.__assign({ value: {
            count: StaffStageDataList.count,
            next: StaffStageDataList.next,
            previous: StaffStageDataList.previous,
            logActions: StaffStageDataList.logActions,
            loading: loading,
            staffstageData: StaffStageDataList.results,
            staffstageListFuncProp: staffstageList,
            staffstageCreateFuncProp: staffstageCreate,
            staffstageReadFuncProp: staffstageRead,
            staffstageUpdateFuncProp: staffstageUpdate,
            staffstagePartialFuncProp: staffstagePartial,
            staffstageDeleteFuncProp: staffstageDelete,
        } }, { children: children })));
};
exports.StaffstageProvider = StaffstageProvider;
//# sourceMappingURL=staffstage.js.map