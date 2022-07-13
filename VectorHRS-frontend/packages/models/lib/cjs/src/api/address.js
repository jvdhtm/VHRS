"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.address_delete = exports.address_partial_update = exports.address_update = exports.address_read = exports.address_create = exports.address_list = void 0;
var tslib_1 = require("tslib");
var instance_1 = require("../instance");
var address_list = function (data, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/address/";
                    return [4 /*yield*/, (0, instance_1.instance)({
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
exports.address_list = address_list;
var address_create = function (data, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/address/";
                    return [4 /*yield*/, (0, instance_1.instance)({
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
exports.address_create = address_create;
var address_read = function (id, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/address/{id}/";
                    endpoint = endpoint.replace("{id}", id.toString());
                    return [4 /*yield*/, (0, instance_1.instance)({
                            method: "get",
                            url: endpoint,
                            headers: headers,
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.address_read = address_read;
var address_update = function (id, data, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/address/{id}/";
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
    });
};
exports.address_update = address_update;
var address_partial_update = function (id, data, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/address/{id}/";
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
    });
};
exports.address_partial_update = address_partial_update;
var address_delete = function (id, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/address/{id}/";
                    endpoint = endpoint.replace("{id}", id.toString());
                    return [4 /*yield*/, (0, instance_1.instance)({
                            method: "delete",
                            url: endpoint,
                            headers: headers,
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.address_delete = address_delete;
//# sourceMappingURL=address.js.map