"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.role_delete = exports.role_partial_update = exports.role_update = exports.role_read = exports.role_create = exports.role_list = void 0;
var tslib_1 = require("tslib");
var instance_1 = require("../instance");
var role_list = function (data, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/role/";
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
exports.role_list = role_list;
var role_create = function (data, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/role/";
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
exports.role_create = role_create;
var role_read = function (id, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/role/{id}/";
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
exports.role_read = role_read;
var role_update = function (id, data, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/role/{id}/";
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
exports.role_update = role_update;
var role_partial_update = function (id, data, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/role/{id}/";
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
exports.role_partial_update = role_partial_update;
var role_delete = function (id, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/role/{id}/";
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
exports.role_delete = role_delete;
//# sourceMappingURL=role.js.map