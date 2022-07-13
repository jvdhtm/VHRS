import { __awaiter, __generator } from "tslib";
import { instance } from "../instance";
export var staff_list = function (data, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/staff/";
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
export var staff_create = function (data, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/staff/";
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
export var staff_read = function (id, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/staff/{id}/";
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
export var staff_update = function (id, data, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/staff/{id}/";
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
export var staff_partial_update = function (id, data, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/staff/{id}/";
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
export var staff_delete = function (id, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/staff/{id}/";
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
//# sourceMappingURL=staff.js.map