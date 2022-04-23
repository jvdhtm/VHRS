"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionProvider = exports.FunctionContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var models_1 = require("@vhrs/models");
var function_list = models_1.Api.function_list, function_create = models_1.Api.function_create, function_read = models_1.Api.function_read, function_update = models_1.Api.function_update, function_partial_update = models_1.Api.function_partial_update, function_delete = models_1.Api.function_delete;
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
    functionListFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    functionCreateFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    functionReadFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    functionUpdateFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    functionPartialFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    functionDeleteFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
exports.FunctionContext = (0, react_1.createContext)(defaultContextState);
var FunctionProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = (0, react_1.useState)(initialState), FunctionDataList = _b[0], setFunctionDataList = _b[1];
    /* prettier-ignore */
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var functionList = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newFunction;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, function_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = FunctionDataList.results;
                    logActions = FunctionDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = FunctionDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newFunction = prevStateResults_1.map(function (el) {
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
                        newFunction = prevStateResults_1.concat(result.data.results);
                    }
                    setFunctionDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newFunction,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var functionCreate = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, function_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = FunctionDataList.results;
                    logActions = FunctionDataList.logActions;
                    newCount = FunctionDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setFunctionDataList(tslib_1.__assign(tslib_1.__assign({}, FunctionDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var functionRead = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newFunction;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, function_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = FunctionDataList.results;
                    logActions = FunctionDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newFunction = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return tslib_1.__assign(tslib_1.__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newFunction = prevStateResults.concat(result_1.data);
                    }
                    setFunctionDataList(tslib_1.__assign(tslib_1.__assign({}, FunctionDataList), { results: newFunction }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var functionUpdate = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newFunction;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, function_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = FunctionDataList.results;
                    logActions = FunctionDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newFunction = void 0;
                    if (!Array.isArray(result_2.data))
                        newFunction = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newFunction = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    setFunctionDataList(tslib_1.__assign(tslib_1.__assign({}, FunctionDataList), { results: newFunction }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var functionPartial = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newFunction;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, function_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = FunctionDataList.results;
                    logActions = FunctionDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newFunction = void 0;
                    if (!Array.isArray(result_3.data))
                        newFunction = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newFunction = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    setFunctionDataList(tslib_1.__assign(tslib_1.__assign({}, FunctionDataList), { results: newFunction }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var functionDelete = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newFunction;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, function_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = FunctionDataList.results;
                    logActions = FunctionDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newFunction = prevStateResults.filter(function (el) { return el.id !== id; });
                    setFunctionDataList(tslib_1.__assign(tslib_1.__assign({}, FunctionDataList), { results: newFunction }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(exports.FunctionContext.Provider, tslib_1.__assign({ value: {
            count: FunctionDataList.count,
            next: FunctionDataList.next,
            previous: FunctionDataList.previous,
            logActions: FunctionDataList.logActions,
            loading: loading,
            functionData: FunctionDataList.results,
            functionListFuncProp: functionList,
            functionCreateFuncProp: functionCreate,
            functionReadFuncProp: functionRead,
            functionUpdateFuncProp: functionUpdate,
            functionPartialFuncProp: functionPartial,
            functionDeleteFuncProp: functionDelete,
        } }, { children: children })));
};
exports.FunctionProvider = FunctionProvider;
//# sourceMappingURL=function.js.map