"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpertiseprofileProvider = exports.ExpertiseprofileContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var models_1 = require("@vhrs/models");
var expertiseprofile_list = models_1.Api.expertiseprofile_list, expertiseprofile_create = models_1.Api.expertiseprofile_create, expertiseprofile_read = models_1.Api.expertiseprofile_read, expertiseprofile_update = models_1.Api.expertiseprofile_update, expertiseprofile_partial_update = models_1.Api.expertiseprofile_partial_update, expertiseprofile_delete = models_1.Api.expertiseprofile_delete;
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
    expertiseprofileListFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    expertiseprofileCreateFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    expertiseprofileReadFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    expertiseprofileUpdateFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    expertiseprofilePartialFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    expertiseprofileDeleteFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
exports.ExpertiseprofileContext = (0, react_1.createContext)(defaultContextState);
var ExpertiseprofileProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = (0, react_1.useState)(initialState), ExpertiseProfileDataList = _b[0], setExpertiseProfileDataList = _b[1];
    /* prettier-ignore */
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var expertiseprofileList = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newExpertiseProfile;
        return tslib_1.__generator(this, function (_a) {
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
                            return tslib_1.__assign(tslib_1.__assign({}, el), preEl[0]);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_1) {
                        newExpertiseProfile = prevStateResults_1.concat(result.data.results);
                    }
                    setExpertiseProfileDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newExpertiseProfile,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var expertiseprofileCreate = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return tslib_1.__generator(this, function (_a) {
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
                    setExpertiseProfileDataList(tslib_1.__assign(tslib_1.__assign({}, ExpertiseProfileDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var expertiseprofileRead = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newExpertiseProfile;
        return tslib_1.__generator(this, function (_a) {
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
                            return tslib_1.__assign(tslib_1.__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newExpertiseProfile = prevStateResults.concat(result_1.data);
                    }
                    setExpertiseProfileDataList(tslib_1.__assign(tslib_1.__assign({}, ExpertiseProfileDataList), { results: newExpertiseProfile }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var expertiseprofileUpdate = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newExpertiseProfile;
        return tslib_1.__generator(this, function (_a) {
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
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newExpertiseProfile = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    setExpertiseProfileDataList(tslib_1.__assign(tslib_1.__assign({}, ExpertiseProfileDataList), { results: newExpertiseProfile }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var expertiseprofilePartial = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newExpertiseProfile;
        return tslib_1.__generator(this, function (_a) {
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
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newExpertiseProfile = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    setExpertiseProfileDataList(tslib_1.__assign(tslib_1.__assign({}, ExpertiseProfileDataList), { results: newExpertiseProfile }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var expertiseprofileDelete = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newExpertiseProfile;
        return tslib_1.__generator(this, function (_a) {
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
                    setExpertiseProfileDataList(tslib_1.__assign(tslib_1.__assign({}, ExpertiseProfileDataList), { results: newExpertiseProfile }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(exports.ExpertiseprofileContext.Provider, tslib_1.__assign({ value: {
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
exports.ExpertiseprofileProvider = ExpertiseprofileProvider;
//# sourceMappingURL=expertiseprofile.js.map