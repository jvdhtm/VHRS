"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.role_delete = exports.role_partial_update = exports.role_partial_updateFields = exports.role_update = exports.role_updateFields = exports.role_read = exports.role_create = exports.role_createFields = exports.role_list = exports.role_listFields = void 0;
var tslib_1 = require("tslib");
var instance_1 = require("../instance");
exports.role_listFields = [
    { name: "id", in: "query", description: "", required: false, type: "number" },
    {
        name: "title",
        in: "query",
        description: "",
        required: false,
        type: "string",
    },
    {
        name: "user",
        in: "query",
        description: "",
        required: false,
        type: "string",
    },
    {
        name: "permission",
        in: "query",
        description: "",
        required: false,
        type: "string",
    },
    {
        name: "app",
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
var role_list = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/role/";
                    request = {
                        endpoint: endpoint,
                        name: "role",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data.query)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.role_list = role_list;
exports.role_createFields = {
    required: ["title", "user", "app"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        title: { title: "Title", type: "string", maxLength: 30, minLength: 1 },
        user: { title: "User", type: "integer" },
        permission: {
            title: "Permission",
            type: "string",
            enum: ["R", "W", "RW", "RWD"],
        },
        app: { title: "App", type: "integer" },
    },
};
var role_create = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/role/";
                    request = {
                        endpoint: endpoint,
                        name: "role",
                        verb: "post",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.role_create = role_create;
var role_read = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/role/{id}/";
                    endpoint = endpoint.replace("{id}", id.toString());
                    request = {
                        endpoint: endpoint,
                        name: "role",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.role_read = role_read;
exports.role_updateFields = {
    required: ["title", "user", "app"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        title: { title: "Title", type: "string", maxLength: 30, minLength: 1 },
        user: { title: "User", type: "integer" },
        permission: {
            title: "Permission",
            type: "string",
            enum: ["R", "W", "RW", "RWD"],
        },
        app: { title: "App", type: "integer" },
    },
};
var role_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/role/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "role",
                verb: "put",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.role_update = role_update;
exports.role_partial_updateFields = {
    required: ["title", "user", "app"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        title: { title: "Title", type: "string", maxLength: 30, minLength: 1 },
        user: { title: "User", type: "integer" },
        permission: {
            title: "Permission",
            type: "string",
            enum: ["R", "W", "RW", "RWD"],
        },
        app: { title: "App", type: "integer" },
    },
};
var role_partial_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/role/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "role",
                verb: "patch",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.role_partial_update = role_partial_update;
var role_delete = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/role/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "role",
                verb: "delete",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
        });
    });
};
exports.role_delete = role_delete;
//# sourceMappingURL=role.js.map