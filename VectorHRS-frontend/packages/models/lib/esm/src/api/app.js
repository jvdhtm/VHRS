import { __awaiter, __generator } from "tslib";
import { instance } from "../instance";
export var app_list = function (data, headers) { return __awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/app/";
                return [4 /*yield*/, instance({
                        method: "get",
                        url: endpoint,
                        params: data.query,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var app_create = function (data, headers) { return __awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/app/";
                return [4 /*yield*/, instance({
                        method: "post",
                        url: endpoint,
                        data: data,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var app_read = function (id, headers) { return __awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/app/{id}/";
                endpoint = endpoint.replace("{id}", id.toString());
                return [4 /*yield*/, instance({
                        method: "get",
                        url: endpoint,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var app_update = function (id, data, headers) { return __awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/app/{id}/";
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
}); };
export var app_partial_update = function (id, data, headers) { return __awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/app/{id}/";
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
}); };
export var app_delete = function (id, headers) { return __awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/app/{id}/";
                endpoint = endpoint.replace("{id}", id.toString());
                return [4 /*yield*/, instance({
                        method: "delete",
                        url: endpoint,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
//# sourceMappingURL=app.js.map