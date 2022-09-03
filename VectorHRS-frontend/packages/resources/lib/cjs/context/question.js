"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionProvider = exports.QuestionContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var models_1 = require("@vhrs/models");
var question_list = models_1.Api.question_list, question_create = models_1.Api.question_create, question_read = models_1.Api.question_read, question_update = models_1.Api.question_update, question_partial_update = models_1.Api.question_partial_update, question_delete = models_1.Api.question_delete;
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
    questionListFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    questionCreateFuncProp: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    questionReadFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    questionUpdateFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    questionPartialFuncProp: function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    questionDeleteFuncProp: function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
exports.QuestionContext = (0, react_1.createContext)(defaultContextState);
var QuestionProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = (0, react_1.useState)(initialState), QuestionDataList = _b[0], setQuestionDataList = _b[1];
    /* prettier-ignore */
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var questionList = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newQuestion;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, question_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = QuestionDataList.results;
                    logActions = QuestionDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = QuestionDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newQuestion = prevStateResults_1.map(function (el) {
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
                        newQuestion = prevStateResults_1.concat(result.data.results);
                    }
                    setQuestionDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newQuestion,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var questionCreate = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, question_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = QuestionDataList.results;
                    logActions = QuestionDataList.logActions;
                    newCount = QuestionDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setQuestionDataList(tslib_1.__assign(tslib_1.__assign({}, QuestionDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var questionRead = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newQuestion;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, question_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = QuestionDataList.results;
                    logActions = QuestionDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newQuestion = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return tslib_1.__assign(tslib_1.__assign({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newQuestion = prevStateResults.concat(result_1.data);
                    }
                    setQuestionDataList(tslib_1.__assign(tslib_1.__assign({}, QuestionDataList), { results: newQuestion }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var questionUpdate = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newQuestion;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, question_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = QuestionDataList.results;
                    logActions = QuestionDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newQuestion = void 0;
                    if (!Array.isArray(result_2.data))
                        newQuestion = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newQuestion = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_2.data) : el;
                        });
                    setQuestionDataList(tslib_1.__assign(tslib_1.__assign({}, QuestionDataList), { results: newQuestion }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var questionPartial = function (id, data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newQuestion;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, question_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = QuestionDataList.results;
                    logActions = QuestionDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newQuestion = void 0;
                    if (!Array.isArray(result_3.data))
                        newQuestion = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newQuestion = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? tslib_1.__assign(tslib_1.__assign({}, el), result_3.data) : el;
                        });
                    setQuestionDataList(tslib_1.__assign(tslib_1.__assign({}, QuestionDataList), { results: newQuestion }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var questionDelete = function (id) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newQuestion;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, question_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = QuestionDataList.results;
                    logActions = QuestionDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newQuestion = prevStateResults.filter(function (el) { return el.id !== id; });
                    setQuestionDataList(tslib_1.__assign(tslib_1.__assign({}, QuestionDataList), { results: newQuestion }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(exports.QuestionContext.Provider, tslib_1.__assign({ value: {
            count: QuestionDataList.count,
            next: QuestionDataList.next,
            previous: QuestionDataList.previous,
            logActions: QuestionDataList.logActions,
            loading: loading,
            questionData: QuestionDataList.results,
            questionListFuncProp: questionList,
            questionCreateFuncProp: questionCreate,
            questionReadFuncProp: questionRead,
            questionUpdateFuncProp: questionUpdate,
            questionPartialFuncProp: questionPartial,
            questionDeleteFuncProp: questionDelete,
        } }, { children: children })));
};
exports.QuestionProvider = QuestionProvider;
//# sourceMappingURL=question.js.map