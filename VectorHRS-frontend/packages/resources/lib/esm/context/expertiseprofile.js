import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { Api } from "@vhrs/models";
var expertiseprofile_list = Api.expertiseprofile_list, expertiseprofile_create = Api.expertiseprofile_create, expertiseprofile_read = Api.expertiseprofile_read, expertiseprofile_update = Api.expertiseprofile_update, expertiseprofile_partial_update = Api.expertiseprofile_partial_update, expertiseprofile_delete = Api.expertiseprofile_delete;
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
    expertiseprofileListFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    expertiseprofileCreateFuncProp: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    expertiseprofileReadFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    expertiseprofileUpdateFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    expertiseprofilePartialFuncProp: function (id, data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    expertiseprofileDeleteFuncProp: function (id) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
export var ExpertiseprofileContext = createContext(defaultContextState);
export var ExpertiseprofileProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = useState(initialState), ExpertiseProfileDataList = _b[0], setExpertiseProfileDataList = _b[1];
    /* prettier-ignore */
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var expertiseprofileList = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newExpertiseProfile, newExpertiseProfileserializedById_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, expertiseprofile_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = ExpertiseProfileDataList.results;
                    logActions = ExpertiseProfileDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = ExpertiseProfileDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newExpertiseProfile = prevStateResults_1.map(function (el) {
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
                        newExpertiseProfile = prevStateResults_1.concat(result.data.results);
                    }
                    newExpertiseProfileserializedById_1 = [];
                    newExpertiseProfile.map(function (el) {
                        if (el.id) {
                            newExpertiseProfileserializedById_1[el.id] = el;
                        }
                    });
                    setExpertiseProfileDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newExpertiseProfileserializedById_1,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var expertiseprofileCreate = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, expertiseprofile_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = ExpertiseProfileDataList.results;
                    logActions = ExpertiseProfileDataList.logActions;
                    newCount = ExpertiseProfileDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setExpertiseProfileDataList(__assign(__assign({}, ExpertiseProfileDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var expertiseprofileRead = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newExpertiseProfile, newExpertiseProfileserializedById_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, expertiseprofile_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = ExpertiseProfileDataList.results;
                    logActions = ExpertiseProfileDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newExpertiseProfile = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return __assign(__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newExpertiseProfile.push(result_1.data);
                    }
                    newExpertiseProfileserializedById_2 = [];
                    newExpertiseProfile.map(function (el) {
                        if (el.id) {
                            newExpertiseProfileserializedById_2[el.id] = el;
                        }
                    });
                    setExpertiseProfileDataList(__assign(__assign({}, ExpertiseProfileDataList), { results: newExpertiseProfileserializedById_2 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var expertiseprofileUpdate = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newExpertiseProfile, newExpertiseProfileserializedById_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, expertiseprofile_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = ExpertiseProfileDataList.results;
                    logActions = ExpertiseProfileDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newExpertiseProfile = void 0;
                    if (!Array.isArray(result_2.data))
                        newExpertiseProfile = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newExpertiseProfile = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? __assign(__assign({}, el), result_2.data) : el;
                        });
                    newExpertiseProfileserializedById_3 = [];
                    newExpertiseProfile.map(function (el) {
                        if (el.id) {
                            newExpertiseProfileserializedById_3[el.id] = el;
                        }
                    });
                    setExpertiseProfileDataList(__assign(__assign({}, ExpertiseProfileDataList), { results: newExpertiseProfileserializedById_3 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var expertiseprofilePartial = function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newExpertiseProfile, newExpertiseProfileserializedById_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, expertiseprofile_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = ExpertiseProfileDataList.results;
                    logActions = ExpertiseProfileDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newExpertiseProfile = void 0;
                    if (!Array.isArray(result_3.data))
                        newExpertiseProfile = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newExpertiseProfile = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? __assign(__assign({}, el), result_3.data) : el;
                        });
                    newExpertiseProfileserializedById_4 = [];
                    newExpertiseProfile.map(function (el) {
                        if (el.id) {
                            newExpertiseProfileserializedById_4[el.id] = el;
                        }
                    });
                    setExpertiseProfileDataList(__assign(__assign({}, ExpertiseProfileDataList), { results: newExpertiseProfileserializedById_4 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var expertiseprofileDelete = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newExpertiseProfile, newExpertiseProfileserializedById_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, expertiseprofile_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = ExpertiseProfileDataList.results;
                    logActions = ExpertiseProfileDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newExpertiseProfile = prevStateResults.filter(function (el) { return el.id !== id; });
                    newExpertiseProfileserializedById_5 = [];
                    newExpertiseProfile.map(function (el) {
                        if (el.id) {
                            newExpertiseProfileserializedById_5[el.id] = el;
                        }
                    });
                    setExpertiseProfileDataList(__assign(__assign({}, ExpertiseProfileDataList), { results: newExpertiseProfileserializedById_5 }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx(ExpertiseprofileContext.Provider, __assign({ value: {
            count: ExpertiseProfileDataList.count,
            next: ExpertiseProfileDataList.next,
            previous: ExpertiseProfileDataList.previous,
            logActions: ExpertiseProfileDataList.logActions,
            loading: loading,
            expertiseprofileData: ExpertiseProfileDataList.results,
            expertiseprofileListFuncProp: expertiseprofileList,
            expertiseprofileCreateFuncProp: expertiseprofileCreate,
            expertiseprofileReadFuncProp: expertiseprofileRead,
            expertiseprofileUpdateFuncProp: expertiseprofileUpdate,
            expertiseprofilePartialFuncProp: expertiseprofilePartial,
            expertiseprofileDeleteFuncProp: expertiseprofileDelete,
        } }, { children: children })));
};
//# sourceMappingURL=expertiseprofile.js.map