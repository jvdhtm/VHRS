"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsProvider = exports.CommentsContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var models_1 = require("@vhrs/models");
var comments_list = models_1.Api.comments_list, comments_create = models_1.Api.comments_create, comments_read = models_1.Api.comments_read, comments_update = models_1.Api.comments_update, comments_partial_update = models_1.Api.comments_partial_update, comments_delete = models_1.Api.comments_delete;
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
    commentsListFuncProp: function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    commentsCreateFuncProp: function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    commentsReadFuncProp: function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    commentsUpdateFuncProp: function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    commentsPartialFuncProp: function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    commentsDeleteFuncProp: function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
exports.CommentsContext = (0, react_1.createContext)(defaultContextState);
var CommentsProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = (0, react_1.useState)(initialState), CommentsDataList = _b[0], setCommentsDataList = _b[1];
    /* prettier-ignore */
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var commentsList = function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newComments;
        return (0, tslib_1.__generator)(this, function (_a) {
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
                            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), preEl[0]);
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
    var commentsCreate = function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return (0, tslib_1.__generator)(this, function (_a) {
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
                    setCommentsDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, CommentsDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var commentsRead = function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newComments;
        return (0, tslib_1.__generator)(this, function (_a) {
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
                            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newComments = prevStateResults.concat(result_1.data);
                    }
                    setCommentsDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, CommentsDataList), { results: newComments }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var commentsUpdate = function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newComments;
        return (0, tslib_1.__generator)(this, function (_a) {
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
                            return el.id === result_2.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newComments = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_2.data) : el;
                        });
                    setCommentsDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, CommentsDataList), { results: newComments }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var commentsPartial = function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newComments;
        return (0, tslib_1.__generator)(this, function (_a) {
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
                            return el.id === result_3.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newComments = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_3.data) : el;
                        });
                    setCommentsDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, CommentsDataList), { results: newComments }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var commentsDelete = function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newComments;
        return (0, tslib_1.__generator)(this, function (_a) {
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
                    setCommentsDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, CommentsDataList), { results: newComments }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(exports.CommentsContext.Provider, (0, tslib_1.__assign)({ value: {
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
exports.CommentsProvider = CommentsProvider;
//# sourceMappingURL=comments.js.map