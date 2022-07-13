import { __awaiter, __generator } from "tslib";
import { dataLayerObj } from "../instance";
export var stafffunctions_list = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/stafffunctions/";
                    request = {
                        endpoint: endpoint,
                        name: "stafffunctions",
                        verb: "get",
                    };
                    return [4 /*yield*/, dataLayerObj.requestApi(request, headers, force, data.query)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
export var stafffunctions_create = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/stafffunctions/";
                    request = {
                        endpoint: endpoint,
                        name: "stafffunctions",
                        verb: "post",
                    };
                    return [4 /*yield*/, dataLayerObj.requestApi(request, headers, force, data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
export var stafffunctions_read = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/stafffunctions/{id}/";
                    endpoint = endpoint.replace("{id}", id.toString());
                    request = {
                        endpoint: endpoint,
                        name: "stafffunctions",
                        verb: "get",
                    };
                    return [4 /*yield*/, dataLayerObj.requestApi(request, headers, force)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
export var stafffunctions_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            endpoint = _apiPrefix + "/stafffunctions/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "stafffunctions",
                verb: "put",
            };
            return [2 /*return*/, dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
export var stafffunctions_partial_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            endpoint = _apiPrefix + "/stafffunctions/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "stafffunctions",
                verb: "patch",
            };
            return [2 /*return*/, dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
export var stafffunctions_delete = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            endpoint = _apiPrefix + "/stafffunctions/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "stafffunctions",
                verb: "delete",
            };
            return [2 /*return*/, dataLayerObj.requestApi(request, headers, force)];
        });
    });
};
//# sourceMappingURL=stafffunctions.js.map