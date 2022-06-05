"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stafflog_delete = exports.stafflog_partial_update = exports.stafflog_update = exports.stafflog_read = exports.stafflog_create = exports.stafflog_list = void 0;
var tslib_1 = require("tslib");
var instance_1 = require("../instance");
var stafflog_list = function (data, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/stafflog/";
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
exports.stafflog_list = stafflog_list;
var stafflog_create = function (data, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/stafflog/";
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
exports.stafflog_create = stafflog_create;
var stafflog_read = function (id, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/stafflog/{id}/";
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
exports.stafflog_read = stafflog_read;
var stafflog_update = function (id, data, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/stafflog/{id}/";
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
exports.stafflog_update = stafflog_update;
var stafflog_partial_update = function (id, data, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/stafflog/{id}/";
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
exports.stafflog_partial_update = stafflog_partial_update;
var stafflog_delete = function (id, headers) { return tslib_1.__awaiter(void 0, void 0, void 0, function () {
    var endpoint;
    return tslib_1.__generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                endpoint = "/api/stafflog/{id}/";
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
exports.stafflog_delete = stafflog_delete;
//# sourceMappingURL=stafflog.js.map