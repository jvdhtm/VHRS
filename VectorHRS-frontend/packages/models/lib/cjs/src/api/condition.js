"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.condition_delete = exports.condition_partial_update = exports.condition_update = exports.condition_read = exports.condition_create = exports.condition_list = void 0;
var tslib_1 = require("tslib");
var instance_1 = require("../instance");
var condition_list = function (data, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/condition/";
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
exports.condition_list = condition_list;
var condition_create = function (data, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/condition/";
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
exports.condition_create = condition_create;
var condition_read = function (id, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/condition/{id}/";
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
exports.condition_read = condition_read;
var condition_update = function (id, data, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/condition/{id}/";
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
exports.condition_update = condition_update;
var condition_partial_update = function (id, data, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/condition/{id}/";
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
exports.condition_partial_update = condition_partial_update;
var condition_delete = function (id, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/condition/{id}/";
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
exports.condition_delete = condition_delete;
//# sourceMappingURL=condition.js.map