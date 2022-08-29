"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffcommentProvider = exports.StaffcommentContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var models_1 = require("@vhrs/models");
var staffcomment_list = models_1.Api.staffcomment_list, staffcomment_create = models_1.Api.staffcomment_create, staffcomment_read = models_1.Api.staffcomment_read, staffcomment_update = models_1.Api.staffcomment_update, staffcomment_partial_update = models_1.Api.staffcomment_partial_update, staffcomment_delete = models_1.Api.staffcomment_delete;
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
    staffcommentListFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    staffcommentCreateFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    staffcommentReadFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    staffcommentUpdateFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    staffcommentPartialFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    staffcommentDeleteFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
exports.StaffcommentContext = (0, react_1.createContext)(defaultContextState);
var StaffcommentProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = (0, react_1.useState)(initialState), StaffCommentDataList = _b[0], setStaffCommentDataList = _b[1];
    /* prettier-ignore */
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var staffcommentList = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newStaffComment;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, staffcomment_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = StaffCommentDataList.results;
                    logActions = StaffCommentDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = StaffCommentDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newStaffComment = prevStateResults_1.map(function (el) {
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
                        newStaffComment = prevStateResults_1.concat(result.data.results);
                    }
                    setStaffCommentDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newStaffComment,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var staffcommentCreate = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, staffcomment_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = StaffCommentDataList.results;
                    logActions = StaffCommentDataList.logActions;
                    newCount = StaffCommentDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setStaffCommentDataList(tslib_1.__assign(tslib_1.__assign({}, StaffCommentDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var staffcommentRead = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newStaffComment;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, staffcomment_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = StaffCommentDataList.results;
                    logActions = StaffCommentDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newStaffComment = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return tslib_1.__assign(tslib_1.__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newStaffComment = prevStateResults.concat(result_1.data);
                    }
                    setStaffCommentDataList(tslib_1.__assign(tslib_1.__assign({}, StaffCommentDataList), { results: newStaffComment }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var staffcommentUpdate = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newStaffComment;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, staffcomment_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = StaffCommentDataList.results;
                    logActions = StaffCommentDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newStaffComment = void 0;
                    if (!Array.isArray(result_2.data))
                        newStaffComment = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newStaffComment = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    setStaffCommentDataList(tslib_1.__assign(tslib_1.__assign({}, StaffCommentDataList), { results: newStaffComment }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var staffcommentPartial = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newStaffComment;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, staffcomment_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = StaffCommentDataList.results;
                    logActions = StaffCommentDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newStaffComment = void 0;
                    if (!Array.isArray(result_3.data))
                        newStaffComment = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newStaffComment = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    setStaffCommentDataList(tslib_1.__assign(tslib_1.__assign({}, StaffCommentDataList), { results: newStaffComment }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var staffcommentDelete = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newStaffComment;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, staffcomment_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = StaffCommentDataList.results;
                    logActions = StaffCommentDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newStaffComment = prevStateResults.filter(function (el) { return el.id !== id; });
                    setStaffCommentDataList(tslib_1.__assign(tslib_1.__assign({}, StaffCommentDataList), { results: newStaffComment }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(exports.StaffcommentContext.Provider, tslib_1.__assign({ value: {
            count: StaffCommentDataList.count,
            next: StaffCommentDataList.next,
            previous: StaffCommentDataList.previous,
            logActions: StaffCommentDataList.logActions,
            loading: loading,
            staffcommentData: StaffCommentDataList.results,
            staffcommentListFuncProp: staffcommentList,
            staffcommentCreateFuncProp: staffcommentCreate,
            staffcommentReadFuncProp: staffcommentRead,
            staffcommentUpdateFuncProp: staffcommentUpdate,
            staffcommentPartialFuncProp: staffcommentPartial,
            staffcommentDeleteFuncProp: staffcommentDelete,
        } }, { children: children })));
};
exports.StaffcommentProvider = StaffcommentProvider;
//# sourceMappingURL=staffcomment.js.map