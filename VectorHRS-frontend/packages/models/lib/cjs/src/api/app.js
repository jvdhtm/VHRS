"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app_delete = exports.app_partial_update = exports.app_partial_updateFields = exports.app_update = exports.app_updateFields = exports.app_read = exports.app_create = exports.app_createFields = exports.app_list = exports.app_listFields = void 0;
var tslib_1 = require("tslib");
var instance_1 = require("../instance");
exports.app_listFields = [
    { name: "id", in: "query", description: "", required: false, type: "number" },
    {
        name: "title",
        in: "query",
        description: "",
        required: false,
        type: "string",
    },
    {
        name: "pathUrl",
        in: "query",
        description: "",
        required: false,
        type: "string",
    },
    {
        name: "page",
        in: "query",
        description: "A page number within the paginated result set.",
        required: false,
        type: "integer",
    },
    {
        name: "page_size",
        in: "query",
        description: "Number of results to return per page.",
        required: false,
        type: "integer",
    },
];
var app_list = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/app/";
                    request = {
                        endpoint: endpoint,
                        name: "app",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data.query)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.app_list = app_list;
exports.app_createFields = {
    required: ["title", "pathUrl"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        title: { title: "Title", type: "string", maxLength: 30, minLength: 1 },
        pathUrl: { title: "PathUrl", type: "string", maxLength: 30, minLength: 1 },
    },
};
var app_create = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/app/";
                    request = {
                        endpoint: endpoint,
                        name: "app",
                        verb: "post",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.app_create = app_create;
var app_read = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/app/{id}/";
                    endpoint = endpoint.replace("{id}", id.toString());
                    request = {
                        endpoint: endpoint,
                        name: "app",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.app_read = app_read;
exports.app_updateFields = {
    required: ["title", "pathUrl"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        title: { title: "Title", type: "string", maxLength: 30, minLength: 1 },
        pathUrl: { title: "PathUrl", type: "string", maxLength: 30, minLength: 1 },
    },
};
var app_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/app/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "app",
                verb: "put",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.app_update = app_update;
exports.app_partial_updateFields = {
    required: ["title", "pathUrl"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        title: { title: "Title", type: "string", maxLength: 30, minLength: 1 },
        pathUrl: { title: "PathUrl", type: "string", maxLength: 30, minLength: 1 },
    },
};
var app_partial_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/app/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "app",
                verb: "patch",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.app_partial_update = app_partial_update;
var app_delete = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/app/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "app",
                verb: "delete",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
        });
    });
};
exports.app_delete = app_delete;
//# sourceMappingURL=app.js.map