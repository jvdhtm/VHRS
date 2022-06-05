"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.function_delete = exports.function_partial_update = exports.function_update = exports.function_read = exports.function_create = exports.function_list = void 0;
var tslib_1 = require("tslib");
var instance_1 = require("../instance");
var function_list = function (data, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/function/";
                return [4 /*yield*/, (0, instance_1.instance)({
                        method: "get",
                        url: endpoint,
                        params: data.query,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.function_list = function_list;
var function_create = function (data, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/function/";
                return [4 /*yield*/, (0, instance_1.instance)({
                        method: "post",
                        url: endpoint,
                        data: data,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.function_create = function_create;
var function_read = function (id, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/function/{id}/";
                endpoint = endpoint.replace("{id}", id.toString());
                return [4 /*yield*/, (0, instance_1.instance)({
                        method: "get",
                        url: endpoint,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.function_read = function_read;
var function_update = function (id, data, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/function/{id}/";
                endpoint = endpoint.replace("{id}", id.toString());
                return [4 /*yield*/, (0, instance_1.instance)({
                        method: "put",
                        url: endpoint,
                        data: data,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.function_update = function_update;
var function_partial_update = function (id, data, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/function/{id}/";
                endpoint = endpoint.replace("{id}", id.toString());
                return [4 /*yield*/, (0, instance_1.instance)({
                        method: "patch",
                        url: endpoint,
                        data: data,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.function_partial_update = function_partial_update;
var function_delete = function (id, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/function/{id}/";
                endpoint = endpoint.replace("{id}", id.toString());
                return [4 /*yield*/, (0, instance_1.instance)({
                        method: "delete",
                        url: endpoint,
                        headers: headers,
                    })];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
exports.function_delete = function_delete;
//# sourceMappingURL=function.js.map