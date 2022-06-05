import { __assign, __awaiter, __generator } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useState } from "react";
import axios from "axios";
import Cookies from 'universal-cookie';
import { v4 as uuidv4 } from 'uuid';
export var auth = function (data, headers) { return __awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/auth";
                return [4 /*yield*/, axios({
                        method: "post",
                        url: endpoint,
                        data: data,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
var initialState = {
    logActions: [],
};
var defaultContextState = {
    loading: false,
    logActions: [],
    isAuth: false,
    AuthUser: function (data) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
        return [2 /*return*/];
    }); }); },
};
/* prettier-ignore */
export var AuthContext = createContext(defaultContextState);
export var AuthProvider = function (_a) {
    /* prettier-ignore */
    var children = _a.children, headers = _a.headers;
    var _b = useState(initialState), UserData = _b[0], setUserData = _b[1];
    /* prettier-ignore */
    var _c = useState(false), loading = _c[0], setLoading = _c[1];
    var cookies = new Cookies();
    var AuthUser = function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, logActions;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!data) return [3 /*break*/, 2];
                    setLoading(true);
                    return [4 /*yield*/, auth(data, headers)];
                case 1:
                    result = _a.sent();
                    logActions = UserData.logActions;
                    logActions.push({ verb: "get", user: result.data });
                    if (result.data && !cookies.get('session')) {
                        cookies.set("session", uuidv4());
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
    return (_jsx(AuthContext.Provider, __assign({ value: {
            logActions: UserData.logActions,
            loading: loading,
            userData: UserData.user,
            isAuth: UserData.user || cookies.get('session'),
            AuthUser: AuthUser,
        } }, { children: children })));
};
//# sourceMappingURL=index.js.map