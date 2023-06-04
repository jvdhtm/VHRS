"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_delete = exports.user_partial_update = exports.user_partial_updateFields = exports.user_update = exports.user_updateFields = exports.user_read = exports.user_create = exports.user_createFields = exports.user_list = exports.user_listFields = void 0;
var tslib_1 = require("tslib");
var instance_1 = require("../instance");
exports.user_listFields = [
    { name: "id", in: "query", description: "", required: false, type: "number" },
    {
        name: "email",
        in: "query",
        description: "",
        required: false,
        type: "string",
    },
    {
        name: "passcode",
        in: "query",
        description: "",
        required: false,
        type: "string",
    },
    {
        name: "first_name",
        in: "query",
        description: "",
        required: false,
        type: "string",
    },
    {
        name: "last_name",
        in: "query",
        description: "",
        required: false,
        type: "string",
    },
    {
        name: "is_active",
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
var user_list = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/user/";
                    request = {
                        endpoint: endpoint,
                        name: "user",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data.query)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.user_list = user_list;
exports.user_createFields = {
    required: ["email", "passcode", "first_name", "last_name"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        email: {
            title: "Email address",
            type: "string",
            format: "email",
            maxLength: 255,
            minLength: 1,
        },
        passcode: {
            title: "Passcode",
            type: "string",
            maxLength: 1024,
            minLength: 1,
        },
        first_name: {
            title: "First name",
            type: "string",
            maxLength: 30,
            minLength: 1,
        },
        last_name: {
            title: "Last name",
            type: "string",
            maxLength: 30,
            minLength: 1,
        },
        is_active: { title: "Is active", type: "boolean" },
    },
};
var user_create = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/user/";
                    request = {
                        endpoint: endpoint,
                        name: "user",
                        verb: "post",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.user_create = user_create;
var user_read = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/user/{id}/";
                    endpoint = endpoint.replace("{id}", id.toString());
                    request = {
                        endpoint: endpoint,
                        name: "user",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.user_read = user_read;
exports.user_updateFields = {
    required: ["email", "passcode", "first_name", "last_name"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        email: {
            title: "Email address",
            type: "string",
            format: "email",
            maxLength: 255,
            minLength: 1,
        },
        passcode: {
            title: "Passcode",
            type: "string",
            maxLength: 1024,
            minLength: 1,
        },
        first_name: {
            title: "First name",
            type: "string",
            maxLength: 30,
            minLength: 1,
        },
        last_name: {
            title: "Last name",
            type: "string",
            maxLength: 30,
            minLength: 1,
        },
        is_active: { title: "Is active", type: "boolean" },
    },
};
var user_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/user/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "user",
                verb: "put",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.user_update = user_update;
exports.user_partial_updateFields = {
    required: ["email", "passcode", "first_name", "last_name"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        email: {
            title: "Email address",
            type: "string",
            format: "email",
            maxLength: 255,
            minLength: 1,
        },
        passcode: {
            title: "Passcode",
            type: "string",
            maxLength: 1024,
            minLength: 1,
        },
        first_name: {
            title: "First name",
            type: "string",
            maxLength: 30,
            minLength: 1,
        },
        last_name: {
            title: "Last name",
            type: "string",
            maxLength: 30,
            minLength: 1,
        },
        is_active: { title: "Is active", type: "boolean" },
    },
};
var user_partial_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/user/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "user",
                verb: "patch",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.user_partial_update = user_partial_update;
var user_delete = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/user/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "user",
                verb: "delete",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
        });
    });
};
exports.user_delete = user_delete;
//# sourceMappingURL=user.js.map