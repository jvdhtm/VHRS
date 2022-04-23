"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_delete = exports.user_partial_update = exports.user_update = exports.user_read = exports.user_create = exports.user_list = void 0;
var tslib_1 = require("tslib");
var axios_1 = tslib_1.__importDefault(require("axios"));
var user_list = function (data, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/user/";
                return [4 /*yield*/, (0, axios_1.default)({
                        method: "get",
                        url: endpoint,
                        data: data,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.user_list = user_list;
var user_create = function (data, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/user/";
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
exports.user_create = user_create;
var user_read = function (id, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/user/{id}/";
                endpoint = endpoint.replace("{id}", id.toString());
                return [4 /*yield*/, (0, axios_1.default)({
                        method: "get",
                        url: endpoint,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.user_read = user_read;
var user_update = function (id, data, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/user/{id}/";
                endpoint = endpoint.replace("{id}", id.toString());
                return [4 /*yield*/, (0, axios_1.default)({
                        method: "put",
                        url: endpoint,
                        data: data,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.user_update = user_update;
var user_partial_update = function (id, data, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/user/{id}/";
                endpoint = endpoint.replace("{id}", id.toString());
                return [4 /*yield*/, (0, axios_1.default)({
                        method: "patch",
                        url: endpoint,
                        data: data,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.user_partial_update = user_partial_update;
var user_delete = function (id, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/user/{id}/";
                endpoint = endpoint.replace("{id}", id.toString());
                return [4 /*yield*/, (0, axios_1.default)({
                        method: "delete",
                        url: endpoint,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.user_delete = user_delete;
//# sourceMappingURL=user.js.map