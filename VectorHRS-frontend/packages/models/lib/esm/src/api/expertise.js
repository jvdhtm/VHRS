import { __awaiter, __generator } from "tslib";
import axios from "axios";
export var expertise_list = function (data, headers) { return __awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/expertise/";
                return [4 /*yield*/, axios({
                        method: "get",
                        url: endpoint,
                        data: data,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var expertise_create = function (data, headers) { return __awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/expertise/";
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
export var expertise_read = function (id, headers) { return __awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/expertise/{id}/";
                endpoint = endpoint.replace("{id}", id.toString());
                return [4 /*yield*/, axios({
                        method: "get",
                        url: endpoint,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var expertise_update = function (id, data, headers) { return __awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/expertise/{id}/";
                endpoint = endpoint.replace("{id}", id.toString());
                return [4 /*yield*/, axios({
                        method: "put",
                        url: endpoint,
                        data: data,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var expertise_partial_update = function (id, data, headers) { return __awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/expertise/{id}/";
                endpoint = endpoint.replace("{id}", id.toString());
                return [4 /*yield*/, axios({
                        method: "patch",
                        url: endpoint,
                        data: data,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
export var expertise_delete = function (id, headers) { return __awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/expertise/{id}/";
                endpoint = endpoint.replace("{id}", id.toString());
                return [4 /*yield*/, axios({
                        method: "delete",
                        url: endpoint,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
//# sourceMappingURL=expertise.js.map