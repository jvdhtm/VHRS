import { __awaiter, __generator } from "tslib";
import { instance } from "../instance";
export var stafffunctions_list = function (data, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/stafffunctions/";
                    return [4 /*yield*/, instance({
                            method: "get",
                            url: endpoint,
                            params: data.query,
                            headers: headers,
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
export var stafffunctions_create = function (data, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/stafffunctions/";
                    return [4 /*yield*/, instance({
                            method: "post",
                            url: endpoint,
                            data: data,
                            headers: headers,
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
export var stafffunctions_read = function (id, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/stafffunctions/{id}/";
                    endpoint = endpoint.replace("{id}", id.toString());
                    return [4 /*yield*/, instance({
                            method: "get",
                            url: endpoint,
                            headers: headers,
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
export var stafffunctions_update = function (id, data, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/stafffunctions/{id}/";
                    endpoint = endpoint.replace("{id}", id.toString());
                    return [4 /*yield*/, instance({
                            method: "put",
                            url: endpoint,
                            data: data,
                            headers: headers,
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
export var stafffunctions_partial_update = function (id, data, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/stafffunctions/{id}/";
                    endpoint = endpoint.replace("{id}", id.toString());
                    return [4 /*yield*/, instance({
                            method: "patch",
                            url: endpoint,
                            data: data,
                            headers: headers,
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
export var stafffunctions_delete = function (id, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/stafffunctions/{id}/";
                    endpoint = endpoint.replace("{id}", id.toString());
                    return [4 /*yield*/, instance({
                            method: "delete",
                            url: endpoint,
                            headers: headers,
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
//# sourceMappingURL=stafffunctions.js.map