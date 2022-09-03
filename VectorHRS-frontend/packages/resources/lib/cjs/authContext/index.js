"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthProvider = exports.AuthContext = exports.auth = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var axios_1 = tslib_1.__importDefault(require("axios"));
var universal_cookie_1 = tslib_1.__importDefault(require("universal-cookie"));
var uuid_1 = require("uuid");
var auth = function (data, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/auth";
                return [4 /*yield*/, (0, axios_1.default)({
                        method: "post",
                        url: endpoint,
                        data: data,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.auth = auth;
var initialState = {
    logActions: [],
};
var defaultContextState = {
    loading: false,
    logActions: [],
    isAuth: false,
    AuthUser: function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () { return tslib_1.__generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
exports.AuthContext = (0, react_1.createContext)(defaultContextState);
var AuthProvider = function (_a) {
    /* prettier-ignore */
    var children = _a.children, headers = _a.headers;
    var _b = (0, react_1.useState)(initialState), UserData = _b[0], setUserData = _b[1];
    /* prettier-ignore */
    var _c = (0, react_1.useState)(false), loading = _c[0], setLoading = _c[1];
    var cookies = new universal_cookie_1.default();
    var AuthUser = function (data) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var result, logActions;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, (0, exports.auth)(data, headers)];
                case 1:
                    result = _a.sent();
                    logActions = UserData.logActions;
                    logActions.push({ verb: "get", user: result.data });
                    if (result.data && !cookies.get('session')) {
                        cookies.set("session", (0, uuid_1.v4)());
                    }
                    setUserData({
                        logActions: logActions,
                        user: result.data,
                    });
                    setLoading(false);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    return ((0, jsx_runtime_1.jsx)(exports.AuthContext.Provider, tslib_1.__assign({ value: {
            logActions: UserData.logActions,
            loading: loading,
            userData: UserData.user,
            isAuth: UserData.user || cookies.get('session'),
            AuthUser: AuthUser,
        } }, { children: children })));
};
exports.AuthProvider = AuthProvider;
//# sourceMappingURL=index.js.map