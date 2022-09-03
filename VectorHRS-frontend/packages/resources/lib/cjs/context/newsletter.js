"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsletterProvider = exports.NewsletterContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var models_1 = require("@vhrs/models");
var newsletter_list = models_1.Api.newsletter_list, newsletter_create = models_1.Api.newsletter_create, newsletter_read = models_1.Api.newsletter_read, newsletter_update = models_1.Api.newsletter_update, newsletter_partial_update = models_1.Api.newsletter_partial_update, newsletter_delete = models_1.Api.newsletter_delete;
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
    newsletterListFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    newsletterCreateFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    newsletterReadFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    newsletterUpdateFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    newsletterPartialFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    newsletterDeleteFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
exports.NewsletterContext = (0, react_1.createContext)(defaultContextState);
var NewsletterProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = (0, react_1.useState)(initialState), NewsLetterDataList = _b[0], setNewsLetterDataList = _b[1];
    /* prettier-ignore */
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var newsletterList = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newNewsLetter;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, newsletter_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = NewsLetterDataList.results;
                    logActions = NewsLetterDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = NewsLetterDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newNewsLetter = prevStateResults_1.map(function (el) {
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
                        newNewsLetter = prevStateResults_1.concat(result.data.results);
                    }
                    setNewsLetterDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newNewsLetter,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var newsletterCreate = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, newsletter_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = NewsLetterDataList.results;
                    logActions = NewsLetterDataList.logActions;
                    newCount = NewsLetterDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setNewsLetterDataList(tslib_1.__assign(tslib_1.__assign({}, NewsLetterDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var newsletterRead = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newNewsLetter;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, newsletter_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = NewsLetterDataList.results;
                    logActions = NewsLetterDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newNewsLetter = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return tslib_1.__assign(tslib_1.__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newNewsLetter = prevStateResults.concat(result_1.data);
                    }
                    setNewsLetterDataList(tslib_1.__assign(tslib_1.__assign({}, NewsLetterDataList), { results: newNewsLetter }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var newsletterUpdate = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newNewsLetter;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, newsletter_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = NewsLetterDataList.results;
                    logActions = NewsLetterDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newNewsLetter = void 0;
                    if (!Array.isArray(result_2.data))
                        newNewsLetter = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newNewsLetter = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    setNewsLetterDataList(tslib_1.__assign(tslib_1.__assign({}, NewsLetterDataList), { results: newNewsLetter }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var newsletterPartial = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newNewsLetter;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, newsletter_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = NewsLetterDataList.results;
                    logActions = NewsLetterDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newNewsLetter = void 0;
                    if (!Array.isArray(result_3.data))
                        newNewsLetter = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newNewsLetter = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    setNewsLetterDataList(tslib_1.__assign(tslib_1.__assign({}, NewsLetterDataList), { results: newNewsLetter }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var newsletterDelete = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newNewsLetter;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, newsletter_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = NewsLetterDataList.results;
                    logActions = NewsLetterDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newNewsLetter = prevStateResults.filter(function (el) { return el.id !== id; });
                    setNewsLetterDataList(tslib_1.__assign(tslib_1.__assign({}, NewsLetterDataList), { results: newNewsLetter }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(exports.NewsletterContext.Provider, tslib_1.__assign({ value: {
            count: NewsLetterDataList.count,
            next: NewsLetterDataList.next,
            previous: NewsLetterDataList.previous,
            logActions: NewsLetterDataList.logActions,
            loading: loading,
            newsletterData: NewsLetterDataList.results,
            newsletterListFuncProp: newsletterList,
            newsletterCreateFuncProp: newsletterCreate,
            newsletterReadFuncProp: newsletterRead,
            newsletterUpdateFuncProp: newsletterUpdate,
            newsletterPartialFuncProp: newsletterPartial,
            newsletterDeleteFuncProp: newsletterDelete,
        } }, { children: children })));
};
exports.NewsletterProvider = NewsletterProvider;
//# sourceMappingURL=newsletter.js.map