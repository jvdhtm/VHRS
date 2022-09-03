import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Api } from "@vhrs/models";
var newsrelatedlink_list = Api.newsrelatedlink_list, newsrelatedlink_create = Api.newsrelatedlink_create, newsrelatedlink_read = Api.newsrelatedlink_read, newsrelatedlink_update = Api.newsrelatedlink_update, newsrelatedlink_partial_update = Api.newsrelatedlink_partial_update, newsrelatedlink_delete = Api.newsrelatedlink_delete;
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
    newsrelatedlinkListFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    newsrelatedlinkCreateFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    newsrelatedlinkReadFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    newsrelatedlinkUpdateFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    newsrelatedlinkPartialFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    newsrelatedlinkDeleteFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
export var NewsrelatedlinkContext = createContext(defaultContextState);
export var NewsrelatedlinkProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = useState(initialState), NewsRelatedLinkDataList = _b[0], setNewsRelatedLinkDataList = _b[1];
    /* prettier-ignore */
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var newsrelatedlinkList = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newNewsRelatedLink;
        return __generator(this, function (_a) {
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
                            return __assign(__assign({}, el), preEl[0]);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_1) {
                        newNewsRelatedLink = prevStateResults_1.concat(result.data.results);
                    }
                    setNewsRelatedLinkDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newNewsRelatedLink,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var newsrelatedlinkCreate = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return __generator(this, function (_a) {
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
                    setNewsRelatedLinkDataList(__assign(__assign({}, NewsRelatedLinkDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var newsrelatedlinkRead = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newNewsRelatedLink;
        return __generator(this, function (_a) {
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
                            return __assign(__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newNewsRelatedLink = prevStateResults.concat(result_1.data);
                    }
                    setNewsRelatedLinkDataList(__assign(__assign({}, NewsRelatedLinkDataList), { results: newNewsRelatedLink }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var newsrelatedlinkUpdate = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newNewsRelatedLink;
        return __generator(this, function (_a) {
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
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newNewsRelatedLink = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    setNewsRelatedLinkDataList(__assign(__assign({}, NewsRelatedLinkDataList), { results: newNewsRelatedLink }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var newsrelatedlinkPartial = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newNewsRelatedLink;
        return __generator(this, function (_a) {
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
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newNewsRelatedLink = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    setNewsRelatedLinkDataList(__assign(__assign({}, NewsRelatedLinkDataList), { results: newNewsRelatedLink }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var newsrelatedlinkDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newNewsRelatedLink;
        return __generator(this, function (_a) {
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
                    setNewsRelatedLinkDataList(__assign(__assign({}, NewsRelatedLinkDataList), { results: newNewsRelatedLink }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(NewsrelatedlinkContext.Provider, __assign({ value: {
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
//# sourceMappingURL=newsrelatedlink.js.map