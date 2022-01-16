"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonProvider = exports.PersonContext = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var models_1 = require("@vhrs/models");
var person_list = models_1.Api.person_list, person_create = models_1.Api.person_create, person_read = models_1.Api.person_read, person_update = models_1.Api.person_update, person_partial_update = models_1.Api.person_partial_update, person_delete = models_1.Api.person_delete;
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
    personListFuncProp: function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personCreateFuncProp: function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personReadFuncProp: function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personUpdateFuncProp: function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personPartialFuncProp: function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
    personDeleteFuncProp: function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () { return (0, tslib_1.__generator)(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
exports.PersonContext = (0, react_1.createContext)(defaultContextState);
var PersonProvider = function (_a) {
    var children = _a.children, headers = _a.headers;
    /* prettier-ignore */
    var _b = (0, react_1.useState)(initialState), PersonDataList = _b[0], setPersonDataList = _b[1];
    /* prettier-ignore */
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var personList = function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result, prevStateResults_1, logActions, found_1, newCount, newNext, newPrevious, newPerson;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, person_list(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults_1 = PersonDataList.results;
                    logActions = PersonDataList.logActions;
                    logActions.push({ verb: "get", results: result.data.results });
                    found_1 = false;
                    newCount = PersonDataList.count + result.data.count;
                    newNext = result.data.next;
                    newPrevious = result.data.previous;
                    newPerson = prevStateResults_1.map(function (el) {
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
                        newPerson = prevStateResults_1.concat(result.data.results);
                    }
                    setPersonDataList({
                        count: newCount,
                        next: newNext,
                        previous: newPrevious,
                        logActions: logActions,
                        results: newPerson,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personCreate = function (data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newCount;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, person_create(data, headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = PersonDataList.results;
                    logActions = PersonDataList.logActions;
                    newCount = PersonDataList.count;
                    logActions.push({ verb: "post", results: result.data });
                    if (!Array.isArray(result.data)) {
                        newCount = prevStateResults.push(result.data);
                    }
                    else {
                        prevStateResults = prevStateResults.concat(result.data);
                        newCount = prevStateResults.length;
                    }
                    setPersonDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, PersonDataList), { count: newCount, results: prevStateResults }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personRead = function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result_1, prevStateResults, logActions, found_2, newPerson;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, person_read(id.toString(), headers)];
                case 1:
                    result_1 = _a.sent();
                    prevStateResults = PersonDataList.results;
                    logActions = PersonDataList.logActions;
                    logActions.push({ verb: "get", results: result_1.data });
                    found_2 = false;
                    newPerson = prevStateResults.map(function (el) {
                        if (el.id === result_1.data.id) {
                            found_2 = true;
                            return (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_1.data);
                        }
                        else {
                            return el;
                        }
                    });
                    if (!found_2) {
                        newPerson = prevStateResults.concat(result_1.data);
                    }
                    setPersonDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, PersonDataList), { results: newPerson }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personUpdate = function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result_2, prevStateResults, logActions, newPerson;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, person_update(id.toString(), data, headers)];
                case 1:
                    result_2 = _a.sent();
                    prevStateResults = PersonDataList.results;
                    logActions = PersonDataList.logActions;
                    //update
                    logActions.push({ verb: "put", results: result_2.data });
                    newPerson = void 0;
                    if (!Array.isArray(result_2.data))
                        newPerson = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_2.data) : el;
                        });
                    //update bulk
                    else
                        newPerson = prevStateResults.map(function (el) {
                            return el.id === result_2.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_2.data) : el;
                        });
                    setPersonDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, PersonDataList), { results: newPerson }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personPartial = function (id, data) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result_3, prevStateResults, logActions, newPerson;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(id && data)) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, person_partial_update(id.toString(), data, headers)];
                case 1:
                    result_3 = _a.sent();
                    prevStateResults = PersonDataList.results;
                    logActions = PersonDataList.logActions;
                    //update
                    logActions.push({ verb: "patch", results: result_3.data });
                    newPerson = void 0;
                    if (!Array.isArray(result_3.data))
                        newPerson = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_3.data) : el;
                        });
                    //update bulk
                    else
                        newPerson = prevStateResults.map(function (el) {
                            return el.id === result_3.data.id ? (0, tslib_1.__assign)((0, tslib_1.__assign)({}, el), result_3.data) : el;
                        });
                    setPersonDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, PersonDataList), { results: newPerson }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    var personDelete = function (id) { return (0, tslib_1.__awaiter)(void 0, void 0, void 0, function () {
        var result, prevStateResults, logActions, newPerson;
        return (0, tslib_1.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, person_delete(id.toString(), headers)];
                case 1:
                    result = _a.sent();
                    prevStateResults = PersonDataList.results;
                    logActions = PersonDataList.logActions;
                    logActions.push({ verb: "delete", results: id });
                    newPerson = prevStateResults.filter(function (el) { return el.id !== id; });
                    setPersonDataList((0, tslib_1.__assign)((0, tslib_1.__assign)({}, PersonDataList), { results: newPerson }));
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(exports.PersonContext.Provider, (0, tslib_1.__assign)({ value: {
            count: PersonDataList.count,
            next: PersonDataList.next,
            previous: PersonDataList.previous,
            logActions: PersonDataList.logActions,
            loading: loading,
            personData: PersonDataList.results,
            personListFuncProp: personList,
            personCreateFuncProp: personCreate,
            personReadFuncProp: personRead,
            personUpdateFuncProp: personUpdate,
            personPartialFuncProp: personPartial,
            personDeleteFuncProp: personDelete,
        } }, { children: children }), void 0));
};
exports.PersonProvider = PersonProvider;
//# sourceMappingURL=person.js.map