import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Api } from "@vhrs/models";
var comments_list = Api.comments_list, comments_create = Api.comments_create, comments_read = Api.comments_read, comments_update = Api.comments_update, comments_partial_update = Api.comments_partial_update, comments_delete = Api.comments_delete;
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
    commentsListFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    commentsCreateFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    commentsReadFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    commentsUpdateFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    commentsPartialFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    commentsDeleteFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
export var CommentsContext = createContext(defaultContextState);
export var CommentsProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = useState(initialState), CommentsDataList = _b[0], setCommentsDataList = _b[1];
    /* prettier-ignore */
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var commentsList = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newComments;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, comments_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = CommentsDataList.results;
                    logActions = CommentsDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = CommentsDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newComments = prevStateResults_1.map(function (el) {
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
                        newComments = prevStateResults_1.concat(result.data.results);
                    }
                    setCommentsDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newComments,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var commentsCreate = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, comments_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = CommentsDataList.results;
                    logActions = CommentsDataList.logActions;
                    newCount = CommentsDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setCommentsDataList(__assign(__assign({}, CommentsDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var commentsRead = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newComments;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, comments_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = CommentsDataList.results;
                    logActions = CommentsDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newComments = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return __assign(__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newComments = prevStateResults.concat(result_1.data);
                    }
                    setCommentsDataList(__assign(__assign({}, CommentsDataList), { results: newComments }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var commentsUpdate = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newComments;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, comments_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = CommentsDataList.results;
                    logActions = CommentsDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newComments = void 0;
                    if (!Array.isArray(result_2.data))
                        newComments = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newComments = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    setCommentsDataList(__assign(__assign({}, CommentsDataList), { results: newComments }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var commentsPartial = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newComments;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, comments_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = CommentsDataList.results;
                    logActions = CommentsDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newComments = void 0;
                    if (!Array.isArray(result_3.data))
                        newComments = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newComments = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    setCommentsDataList(__assign(__assign({}, CommentsDataList), { results: newComments }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var commentsDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newComments;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, comments_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = CommentsDataList.results;
                    logActions = CommentsDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newComments = prevStateResults.filter(function (el) { return el.id !== id; });
                    setCommentsDataList(__assign(__assign({}, CommentsDataList), { results: newComments }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(CommentsContext.Provider, __assign({ value: {
            count: CommentsDataList.count,
            next: CommentsDataList.next,
            previous: CommentsDataList.previous,
            logActions: CommentsDataList.logActions,
            loading: loading,
            commentsData: CommentsDataList.results,
            commentsListFuncProp: commentsList,
            commentsCreateFuncProp: commentsCreate,
            commentsReadFuncProp: commentsRead,
            commentsUpdateFuncProp: commentsUpdate,
            commentsPartialFuncProp: commentsPartial,
            commentsDeleteFuncProp: commentsDelete,
        } }, { children: children }), void 0));
};
//# sourceMappingURL=comments.js.map