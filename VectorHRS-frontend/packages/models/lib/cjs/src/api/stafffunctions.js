"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stafffunctions_delete = exports.stafffunctions_partial_update = exports.stafffunctions_update = exports.stafffunctions_read = exports.stafffunctions_create = exports.stafffunctions_list = void 0;
var tslib_1 = require("tslib");
var instance_1 = require("../instance");
var stafffunctions_list = function (data, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/stafffunctions/";
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
exports.stafffunctions_list = stafffunctions_list;
var stafffunctions_create = function (data, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/stafffunctions/";
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
exports.stafffunctions_create = stafffunctions_create;
var stafffunctions_read = function (id, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/stafffunctions/{id}/";
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
exports.stafffunctions_read = stafffunctions_read;
var stafffunctions_update = function (id, data, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/stafffunctions/{id}/";
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
exports.stafffunctions_update = stafffunctions_update;
var stafffunctions_partial_update = function (id, data, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/stafffunctions/{id}/";
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
exports.stafffunctions_partial_update = stafffunctions_partial_update;
var stafffunctions_delete = function (id, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/stafffunctions/{id}/";
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
exports.stafffunctions_delete = stafffunctions_delete;
//# sourceMappingURL=stafffunctions.js.map