"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsrelatedlinkProvider = exports.NewsrelatedlinkContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var models_1 = require("@vhrs/models");
var newsrelatedlink_list = models_1.Api.newsrelatedlink_list, newsrelatedlink_create = models_1.Api.newsrelatedlink_create, newsrelatedlink_read = models_1.Api.newsrelatedlink_read, newsrelatedlink_update = models_1.Api.newsrelatedlink_update, newsrelatedlink_partial_update = models_1.Api.newsrelatedlink_partial_update, newsrelatedlink_delete = models_1.Api.newsrelatedlink_delete;
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
    newsrelatedlinkListFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    newsrelatedlinkCreateFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    newsrelatedlinkReadFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    newsrelatedlinkUpdateFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    newsrelatedlinkPartialFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    newsrelatedlinkDeleteFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
exports.NewsrelatedlinkContext = (0, react_1.createContext)(defaultContextState);
var NewsrelatedlinkProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = (0, react_1.useState)(initialState), NewsRelatedLinkDataList = _b[0], setNewsRelatedLinkDataList = _b[1];
    /* prettier-ignore */
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var newsrelatedlinkList = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newNewsRelatedLink, newNewsRelatedLinkserializedById_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, newsrelatedlink_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = NewsRelatedLinkDataList.results;
                    logActions = NewsRelatedLinkDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = NewsRelatedLinkDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newNewsRelatedLink = prevStateResults_1.map(function (el) {
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
                        newNewsRelatedLink = prevStateResults_1.concat(result.data.results);
                    }
                    newNewsRelatedLinkserializedById_1 = [];
                    newNewsRelatedLink.map(function (el) {
                        if (el.id) {
                            newNewsRelatedLinkserializedById_1[el.id] = el;
                        }
                    });
                    setNewsRelatedLinkDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newNewsRelatedLinkserializedById_1,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var newsrelatedlinkCreate = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, newsrelatedlink_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = NewsRelatedLinkDataList.results;
                    logActions = NewsRelatedLinkDataList.logActions;
                    newCount = NewsRelatedLinkDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setNewsRelatedLinkDataList(tslib_1.__assign(tslib_1.__assign({}, NewsRelatedLinkDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var newsrelatedlinkRead = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newNewsRelatedLink, newNewsRelatedLinkserializedById_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, newsrelatedlink_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = NewsRelatedLinkDataList.results;
                    logActions = NewsRelatedLinkDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newNewsRelatedLink = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return tslib_1.__assign(tslib_1.__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newNewsRelatedLink.push(result_1.data);
                    }
                    newNewsRelatedLinkserializedById_2 = [];
                    newNewsRelatedLink.map(function (el) {
                        if (el.id) {
                            newNewsRelatedLinkserializedById_2[el.id] = el;
                        }
                    });
                    setNewsRelatedLinkDataList(tslib_1.__assign(tslib_1.__assign({}, NewsRelatedLinkDataList), { results: newNewsRelatedLinkserializedById_2 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var newsrelatedlinkUpdate = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newNewsRelatedLink, newNewsRelatedLinkserializedById_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, newsrelatedlink_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = NewsRelatedLinkDataList.results;
                    logActions = NewsRelatedLinkDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newNewsRelatedLink = void 0;
                    if (!Array.isArray(result_2.data))
                        newNewsRelatedLink = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newNewsRelatedLink = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    newNewsRelatedLinkserializedById_3 = [];
                    newNewsRelatedLink.map(function (el) {
                        if (el.id) {
                            newNewsRelatedLinkserializedById_3[el.id] = el;
                        }
                    });
                    setNewsRelatedLinkDataList(tslib_1.__assign(tslib_1.__assign({}, NewsRelatedLinkDataList), { results: newNewsRelatedLinkserializedById_3 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var newsrelatedlinkPartial = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newNewsRelatedLink, newNewsRelatedLinkserializedById_4;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, newsrelatedlink_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = NewsRelatedLinkDataList.results;
                    logActions = NewsRelatedLinkDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newNewsRelatedLink = void 0;
                    if (!Array.isArray(result_3.data))
                        newNewsRelatedLink = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newNewsRelatedLink = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    newNewsRelatedLinkserializedById_4 = [];
                    newNewsRelatedLink.map(function (el) {
                        if (el.id) {
                            newNewsRelatedLinkserializedById_4[el.id] = el;
                        }
                    });
                    setNewsRelatedLinkDataList(tslib_1.__assign(tslib_1.__assign({}, NewsRelatedLinkDataList), { results: newNewsRelatedLinkserializedById_4 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var newsrelatedlinkDelete = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newNewsRelatedLink, newNewsRelatedLinkserializedById_5;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, newsrelatedlink_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = NewsRelatedLinkDataList.results;
                    logActions = NewsRelatedLinkDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newNewsRelatedLink = prevStateResults.filter(function (el) { return el.id !== id; });
                    newNewsRelatedLinkserializedById_5 = [];
                    newNewsRelatedLink.map(function (el) {
                        if (el.id) {
                            newNewsRelatedLinkserializedById_5[el.id] = el;
                        }
                    });
                    setNewsRelatedLinkDataList(tslib_1.__assign(tslib_1.__assign({}, NewsRelatedLinkDataList), { results: newNewsRelatedLinkserializedById_5 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(exports.NewsrelatedlinkContext.Provider, tslib_1.__assign({ value: {
            count: NewsRelatedLinkDataList.count,
            next: NewsRelatedLinkDataList.next,
            previous: NewsRelatedLinkDataList.previous,
            logActions: NewsRelatedLinkDataList.logActions,
            loading: loading,
            newsrelatedlinkData: NewsRelatedLinkDataList.results,
            newsrelatedlinkListFuncProp: newsrelatedlinkList,
            newsrelatedlinkCreateFuncProp: newsrelatedlinkCreate,
            newsrelatedlinkReadFuncProp: newsrelatedlinkRead,
            newsrelatedlinkUpdateFuncProp: newsrelatedlinkUpdate,
            newsrelatedlinkPartialFuncProp: newsrelatedlinkPartial,
            newsrelatedlinkDeleteFuncProp: newsrelatedlinkDelete,
        } }, { children: children })));
};
exports.NewsrelatedlinkProvider = NewsrelatedlinkProvider;
//# sourceMappingURL=newsrelatedlink.js.map