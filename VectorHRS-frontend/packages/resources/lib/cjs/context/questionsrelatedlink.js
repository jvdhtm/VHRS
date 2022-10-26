"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsrelatedlinkProvider = exports.QuestionsrelatedlinkContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var models_1 = require("@vhrs/models");
var questionsrelatedlink_list = models_1.Api.questionsrelatedlink_list, questionsrelatedlink_create = models_1.Api.questionsrelatedlink_create, questionsrelatedlink_read = models_1.Api.questionsrelatedlink_read, questionsrelatedlink_update = models_1.Api.questionsrelatedlink_update, questionsrelatedlink_partial_update = models_1.Api.questionsrelatedlink_partial_update, questionsrelatedlink_delete = models_1.Api.questionsrelatedlink_delete;
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
    questionsrelatedlinkListFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    questionsrelatedlinkCreateFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    questionsrelatedlinkReadFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    questionsrelatedlinkUpdateFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    questionsrelatedlinkPartialFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    questionsrelatedlinkDeleteFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
exports.QuestionsrelatedlinkContext = (0, react_1.createContext)(defaultContextState);
var QuestionsrelatedlinkProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = (0, react_1.useState)(initialState), QuestionsRelatedLinkDataList = _b[0], setQuestionsRelatedLinkDataList = _b[1];
    /* prettier-ignore */
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var questionsrelatedlinkList = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newQuestionsRelatedLink, newQuestionsRelatedLinkserializedById_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, questionsrelatedlink_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = QuestionsRelatedLinkDataList.results;
                    logActions = QuestionsRelatedLinkDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = QuestionsRelatedLinkDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newQuestionsRelatedLink = prevStateResults_1.map(function (el) {
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
                        newQuestionsRelatedLink = prevStateResults_1.concat(result.data.results);
                    }
                    newQuestionsRelatedLinkserializedById_1 = [];
                    newQuestionsRelatedLink.map(function (el) {
                        if (el.id) {
                            newQuestionsRelatedLinkserializedById_1[el.id] = el;
                        }
                    });
                    setQuestionsRelatedLinkDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newQuestionsRelatedLinkserializedById_1,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var questionsrelatedlinkCreate = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, questionsrelatedlink_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = QuestionsRelatedLinkDataList.results;
                    logActions = QuestionsRelatedLinkDataList.logActions;
                    newCount = QuestionsRelatedLinkDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setQuestionsRelatedLinkDataList(tslib_1.__assign(tslib_1.__assign({}, QuestionsRelatedLinkDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var questionsrelatedlinkRead = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newQuestionsRelatedLink, newQuestionsRelatedLinkserializedById_2;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, questionsrelatedlink_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = QuestionsRelatedLinkDataList.results;
                    logActions = QuestionsRelatedLinkDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newQuestionsRelatedLink = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return tslib_1.__assign(tslib_1.__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newQuestionsRelatedLink.push(result_1.data);
                    }
                    newQuestionsRelatedLinkserializedById_2 = [];
                    newQuestionsRelatedLink.map(function (el) {
                        if (el.id) {
                            newQuestionsRelatedLinkserializedById_2[el.id] = el;
                        }
                    });
                    setQuestionsRelatedLinkDataList(tslib_1.__assign(tslib_1.__assign({}, QuestionsRelatedLinkDataList), { results: newQuestionsRelatedLinkserializedById_2 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var questionsrelatedlinkUpdate = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newQuestionsRelatedLink, newQuestionsRelatedLinkserializedById_3;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, questionsrelatedlink_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = QuestionsRelatedLinkDataList.results;
                    logActions = QuestionsRelatedLinkDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newQuestionsRelatedLink = void 0;
                    if (!Array.isArray(result_2.data))
                        newQuestionsRelatedLink = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newQuestionsRelatedLink = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    newQuestionsRelatedLinkserializedById_3 = [];
                    newQuestionsRelatedLink.map(function (el) {
                        if (el.id) {
                            newQuestionsRelatedLinkserializedById_3[el.id] = el;
                        }
                    });
                    setQuestionsRelatedLinkDataList(tslib_1.__assign(tslib_1.__assign({}, QuestionsRelatedLinkDataList), { results: newQuestionsRelatedLinkserializedById_3 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var questionsrelatedlinkPartial = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newQuestionsRelatedLink, newQuestionsRelatedLinkserializedById_4;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, questionsrelatedlink_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = QuestionsRelatedLinkDataList.results;
                    logActions = QuestionsRelatedLinkDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newQuestionsRelatedLink = void 0;
                    if (!Array.isArray(result_3.data))
                        newQuestionsRelatedLink = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newQuestionsRelatedLink = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    newQuestionsRelatedLinkserializedById_4 = [];
                    newQuestionsRelatedLink.map(function (el) {
                        if (el.id) {
                            newQuestionsRelatedLinkserializedById_4[el.id] = el;
                        }
                    });
                    setQuestionsRelatedLinkDataList(tslib_1.__assign(tslib_1.__assign({}, QuestionsRelatedLinkDataList), { results: newQuestionsRelatedLinkserializedById_4 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var questionsrelatedlinkDelete = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newQuestionsRelatedLink, newQuestionsRelatedLinkserializedById_5;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, questionsrelatedlink_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = QuestionsRelatedLinkDataList.results;
                    logActions = QuestionsRelatedLinkDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newQuestionsRelatedLink = prevStateResults.filter(function (el) { return el.id !== id; });
                    newQuestionsRelatedLinkserializedById_5 = [];
                    newQuestionsRelatedLink.map(function (el) {
                        if (el.id) {
                            newQuestionsRelatedLinkserializedById_5[el.id] = el;
                        }
                    });
                    setQuestionsRelatedLinkDataList(tslib_1.__assign(tslib_1.__assign({}, QuestionsRelatedLinkDataList), { results: newQuestionsRelatedLinkserializedById_5 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(exports.QuestionsrelatedlinkContext.Provider, tslib_1.__assign({ value: {
            count: QuestionsRelatedLinkDataList.count,
            next: QuestionsRelatedLinkDataList.next,
            previous: QuestionsRelatedLinkDataList.previous,
            logActions: QuestionsRelatedLinkDataList.logActions,
            loading: loading,
            questionsrelatedlinkData: QuestionsRelatedLinkDataList.results,
            questionsrelatedlinkListFuncProp: questionsrelatedlinkList,
            questionsrelatedlinkCreateFuncProp: questionsrelatedlinkCreate,
            questionsrelatedlinkReadFuncProp: questionsrelatedlinkRead,
            questionsrelatedlinkUpdateFuncProp: questionsrelatedlinkUpdate,
            questionsrelatedlinkPartialFuncProp: questionsrelatedlinkPartial,
            questionsrelatedlinkDeleteFuncProp: questionsrelatedlinkDelete,
        } }, { children: children })));
};
exports.QuestionsrelatedlinkProvider = QuestionsrelatedlinkProvider;
//# sourceMappingURL=questionsrelatedlink.js.map