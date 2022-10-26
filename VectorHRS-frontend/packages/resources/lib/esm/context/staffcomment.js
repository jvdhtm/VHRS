import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Api } from "@vhrs/models";
var staffcomment_list = Api.staffcomment_list, staffcomment_create = Api.staffcomment_create, staffcomment_read = Api.staffcomment_read, staffcomment_update = Api.staffcomment_update, staffcomment_partial_update = Api.staffcomment_partial_update, staffcomment_delete = Api.staffcomment_delete;
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
    staffcommentListFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    staffcommentCreateFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    staffcommentReadFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    staffcommentUpdateFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    staffcommentPartialFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    staffcommentDeleteFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
export var StaffcommentContext = createContext(defaultContextState);
export var StaffcommentProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = useState(initialState), StaffCommentDataList = _b[0], setStaffCommentDataList = _b[1];
    /* prettier-ignore */
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var staffcommentList = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newStaffComment, newStaffCommentserializedById_1;
        return __generator(this, function (_a) {
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
                            return __assign(__assign({}, el), preEl[0]);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_1) {
                        newStaffComment = prevStateResults_1.concat(result.data.results);
                    }
                    newStaffCommentserializedById_1 = [];
                    newStaffComment.map(function (el) {
                        if (el.id) {
                            newStaffCommentserializedById_1[el.id] = el;
                        }
                    });
                    setStaffCommentDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newStaffCommentserializedById_1,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var staffcommentCreate = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return __generator(this, function (_a) {
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
                    setStaffCommentDataList(__assign(__assign({}, StaffCommentDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var staffcommentRead = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newStaffComment, newStaffCommentserializedById_2;
        return __generator(this, function (_a) {
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
                            return __assign(__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newStaffComment.push(result_1.data);
                    }
                    newStaffCommentserializedById_2 = [];
                    newStaffComment.map(function (el) {
                        if (el.id) {
                            newStaffCommentserializedById_2[el.id] = el;
                        }
                    });
                    setStaffCommentDataList(__assign(__assign({}, StaffCommentDataList), { results: newStaffCommentserializedById_2 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var staffcommentUpdate = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newStaffComment, newStaffCommentserializedById_3;
        return __generator(this, function (_a) {
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
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newStaffComment = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    newStaffCommentserializedById_3 = [];
                    newStaffComment.map(function (el) {
                        if (el.id) {
                            newStaffCommentserializedById_3[el.id] = el;
                        }
                    });
                    setStaffCommentDataList(__assign(__assign({}, StaffCommentDataList), { results: newStaffCommentserializedById_3 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var staffcommentPartial = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newStaffComment, newStaffCommentserializedById_4;
        return __generator(this, function (_a) {
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
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newStaffComment = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    newStaffCommentserializedById_4 = [];
                    newStaffComment.map(function (el) {
                        if (el.id) {
                            newStaffCommentserializedById_4[el.id] = el;
                        }
                    });
                    setStaffCommentDataList(__assign(__assign({}, StaffCommentDataList), { results: newStaffCommentserializedById_4 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var staffcommentDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newStaffComment, newStaffCommentserializedById_5;
        return __generator(this, function (_a) {
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
                    newStaffCommentserializedById_5 = [];
                    newStaffComment.map(function (el) {
                        if (el.id) {
                            newStaffCommentserializedById_5[el.id] = el;
                        }
                    });
                    setStaffCommentDataList(__assign(__assign({}, StaffCommentDataList), { results: newStaffCommentserializedById_5 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(StaffcommentContext.Provider, __assign({ value: {
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
//# sourceMappingURL=staffcomment.js.map