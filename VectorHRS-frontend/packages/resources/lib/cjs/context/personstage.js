"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonstageProvider = exports.PersonstageContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var models_1 = require("@vhrs/models");
var personstage_list = models_1.Api.personstage_list, personstage_create = models_1.Api.personstage_create, personstage_read = models_1.Api.personstage_read, personstage_update = models_1.Api.personstage_update, personstage_partial_update = models_1.Api.personstage_partial_update, personstage_delete = models_1.Api.personstage_delete;
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
    personstageListFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personstageCreateFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personstageReadFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personstageUpdateFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personstagePartialFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personstageDeleteFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
exports.PersonstageContext = (0, react_1.createContext)(defaultContextState);
var PersonstageProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = (0, react_1.useState)(initialState), PersonStageDataList = _b[0], setPersonStageDataList = _b[1];
    /* prettier-ignore */
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var personstageList = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newPersonStage, newPersonStageserializedById_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, personstage_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = PersonStageDataList.results;
                    logActions = PersonStageDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = PersonStageDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newPersonStage = prevStateResults_1.map(function (el) {
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
                        newPersonStage = prevStateResults_1.concat(result.data.results);
                    }
                    newPersonStageserializedById_1 = [];
                    newPersonStage.map(function (el) {
                        if (el.id) {
                            newPersonStageserializedById_1[el.id] = el;
                        }
                    });
                    setPersonStageDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newPersonStageserializedById_1,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personstageCreate = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, personstage_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = PersonStageDataList.results;
                    logActions = PersonStageDataList.logActions;
                    newCount = PersonStageDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setPersonStageDataList(tslib_1.__assign(tslib_1.__assign({}, PersonStageDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personstageRead = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newPersonStage, newPersonStageserializedById_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, personstage_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = PersonStageDataList.results;
                    logActions = PersonStageDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newPersonStage = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return tslib_1.__assign(tslib_1.__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newPersonStage.push(result_1.data);
                    }
                    newPersonStageserializedById_2 = [];
                    newPersonStage.map(function (el) {
                        if (el.id) {
                            newPersonStageserializedById_2[el.id] = el;
                        }
                    });
                    setPersonStageDataList(tslib_1.__assign(tslib_1.__assign({}, PersonStageDataList), { results: newPersonStageserializedById_2 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personstageUpdate = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newPersonStage, newPersonStageserializedById_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, personstage_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = PersonStageDataList.results;
                    logActions = PersonStageDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newPersonStage = void 0;
                    if (!Array.isArray(result_2.data))
                        newPersonStage = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newPersonStage = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    newPersonStageserializedById_3 = [];
                    newPersonStage.map(function (el) {
                        if (el.id) {
                            newPersonStageserializedById_3[el.id] = el;
                        }
                    });
                    setPersonStageDataList(tslib_1.__assign(tslib_1.__assign({}, PersonStageDataList), { results: newPersonStageserializedById_3 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personstagePartial = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newPersonStage, newPersonStageserializedById_4;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, personstage_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = PersonStageDataList.results;
                    logActions = PersonStageDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newPersonStage = void 0;
                    if (!Array.isArray(result_3.data))
                        newPersonStage = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newPersonStage = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    newPersonStageserializedById_4 = [];
                    newPersonStage.map(function (el) {
                        if (el.id) {
                            newPersonStageserializedById_4[el.id] = el;
                        }
                    });
                    setPersonStageDataList(tslib_1.__assign(tslib_1.__assign({}, PersonStageDataList), { results: newPersonStageserializedById_4 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personstageDelete = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newPersonStage, newPersonStageserializedById_5;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, personstage_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = PersonStageDataList.results;
                    logActions = PersonStageDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newPersonStage = prevStateResults.filter(function (el) { return el.id !== id; });
                    newPersonStageserializedById_5 = [];
                    newPersonStage.map(function (el) {
                        if (el.id) {
                            newPersonStageserializedById_5[el.id] = el;
                        }
                    });
                    setPersonStageDataList(tslib_1.__assign(tslib_1.__assign({}, PersonStageDataList), { results: newPersonStageserializedById_5 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(exports.PersonstageContext.Provider, tslib_1.__assign({ value: {
            count: PersonStageDataList.count,
            next: PersonStageDataList.next,
            previous: PersonStageDataList.previous,
            logActions: PersonStageDataList.logActions,
            loading: loading,
            personstageData: PersonStageDataList.results,
            personstageListFuncProp: personstageList,
            personstageCreateFuncProp: personstageCreate,
            personstageReadFuncProp: personstageRead,
            personstageUpdateFuncProp: personstageUpdate,
            personstagePartialFuncProp: personstagePartial,
            personstageDeleteFuncProp: personstageDelete,
        } }, { children: children })));
};
exports.PersonstageProvider = PersonstageProvider;
//# sourceMappingURL=personstage.js.map