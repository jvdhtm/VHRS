"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app_delete = exports.app_partial_update = exports.app_update = exports.app_read = exports.app_create = exports.app_list = void 0;
var tslib_1 = require("tslib");
var instance_1 = require("../instance");
var app_list = function (data, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/app/";
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
exports.app_list = app_list;
var app_create = function (data, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/app/";
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
exports.app_create = app_create;
var app_read = function (id, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/app/{id}/";
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
exports.app_read = app_read;
var app_update = function (id, data, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/app/{id}/";
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
exports.app_update = app_update;
var app_partial_update = function (id, data, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/app/{id}/";
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
exports.app_partial_update = app_partial_update;
var app_delete = function (id, headers, _apiPrefix) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/app/{id}/";
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
exports.app_delete = app_delete;
//# sourceMappingURL=app.js.map