"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionProvider = exports.ConditionContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var models_1 = require("@vhrs/models");
var condition_list = models_1.Api.condition_list, condition_create = models_1.Api.condition_create, condition_read = models_1.Api.condition_read, condition_update = models_1.Api.condition_update, condition_partial_update = models_1.Api.condition_partial_update, condition_delete = models_1.Api.condition_delete;
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
    conditionListFuncProp: function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    conditionCreateFuncProp: function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    conditionReadFuncProp: function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    conditionUpdateFuncProp: function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    conditionPartialFuncProp: function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    conditionDeleteFuncProp: function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
exports.ConditionContext = (0, react_1.createContext)(defaultContextState);
var ConditionProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = (0, react_1.useState)(initialState), ConditionDataList = _b[0], setConditionDataList = _b[1];
    /* prettier-ignore */
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var conditionList = function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newCondition;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, condition_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = ConditionDataList.results;
                    logActions = ConditionDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = ConditionDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newCondition = prevStateResults_1.map(function (el) {
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
                        newCondition = prevStateResults_1.concat(result.data.results);
                    }
                    setConditionDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newCondition,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var conditionCreate = function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, condition_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = ConditionDataList.results;
                    logActions = ConditionDataList.logActions;
                    newCount = ConditionDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setConditionDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, ConditionDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var conditionRead = function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newCondition;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, condition_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = ConditionDataList.results;
                    logActions = ConditionDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newCondition = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newCondition = prevStateResults.concat(result_1.data);
                    }
                    setConditionDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, ConditionDataList), { results: newCondition }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var conditionUpdate = function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newCondition;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, condition_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = ConditionDataList.results;
                    logActions = ConditionDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newCondition = void 0;
                    if (!Array.isArray(result_2.data))
                        newCondition = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newCondition = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_2.data) : el;
                        });
                    setConditionDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, ConditionDataList), { results: newCondition }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var conditionPartial = function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newCondition;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, condition_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = ConditionDataList.results;
                    logActions = ConditionDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newCondition = void 0;
                    if (!Array.isArray(result_3.data))
                        newCondition = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newCondition = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_3.data) : el;
                        });
                    setConditionDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, ConditionDataList), { results: newCondition }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var conditionDelete = function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCondition;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, condition_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = ConditionDataList.results;
                    logActions = ConditionDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newCondition = prevStateResults.filter(function (el) { return el.id !== id; });
                    setConditionDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, ConditionDataList), { results: newCondition }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(exports.ConditionContext.Provider, (0, tslib_1.__assign)({ value: {
            count: ConditionDataList.count,
            next: ConditionDataList.next,
            previous: ConditionDataList.previous,
            logActions: ConditionDataList.logActions,
            loading: loading,
            conditionData: ConditionDataList.results,
            conditionListFuncProp: conditionList,
            conditionCreateFuncProp: conditionCreate,
            conditionReadFuncProp: conditionRead,
            conditionUpdateFuncProp: conditionUpdate,
            conditionPartialFuncProp: conditionPartial,
            conditionDeleteFuncProp: conditionDelete,
        } }, { children: children }), void 0));
};
exports.ConditionProvider = ConditionProvider;
//# sourceMappingURL=condition.js.map