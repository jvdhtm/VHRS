"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phone_delete = exports.phone_partial_update = exports.phone_partial_updateFields = exports.phone_update = exports.phone_updateFields = exports.phone_read = exports.phone_create = exports.phone_createFields = exports.phone_list = exports.phone_listFields = void 0;
var tslib_1 = require("tslib");
var instance_1 = require("../instance");
exports.phone_listFields = [
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
var phone_list = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/phone/";
                    request = {
                        endpoint: endpoint,
                        name: "phone",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data.query)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.phone_list = phone_list;
exports.phone_createFields = {
    required: ["person", "status"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        person: { title: "Person", type: "integer" },
        description: {
            title: "Description",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        phoneNumber: {
            title: "PhoneNumber",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        status: {
            title: "Status",
            type: "string",
            enum: ["activated", "deactivated", "pending", "confirmed", "archived"],
        },
        created_date_time: {
            title: "Created date time",
            type: "string",
            format: "date-time",
        },
    },
};
var phone_create = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/phone/";
                    request = {
                        endpoint: endpoint,
                        name: "phone",
                        verb: "post",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.phone_create = phone_create;
var phone_read = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/phone/{id}/";
                    endpoint = endpoint.replace("{id}", id.toString());
                    request = {
                        endpoint: endpoint,
                        name: "phone",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.phone_read = phone_read;
exports.phone_updateFields = {
    required: ["person", "status"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        person: { title: "Person", type: "integer" },
        description: {
            title: "Description",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        phoneNumber: {
            title: "PhoneNumber",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        status: {
            title: "Status",
            type: "string",
            enum: ["activated", "deactivated", "pending", "confirmed", "archived"],
        },
        created_date_time: {
            title: "Created date time",
            type: "string",
            format: "date-time",
        },
    },
};
var phone_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/phone/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "phone",
                verb: "put",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.phone_update = phone_update;
exports.phone_partial_updateFields = {
    required: ["person", "status"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        person: { title: "Person", type: "integer" },
        description: {
            title: "Description",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        phoneNumber: {
            title: "PhoneNumber",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        status: {
            title: "Status",
            type: "string",
            enum: ["activated", "deactivated", "pending", "confirmed", "archived"],
        },
        created_date_time: {
            title: "Created date time",
            type: "string",
            format: "date-time",
        },
    },
};
var phone_partial_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/phone/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "phone",
                verb: "patch",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.phone_partial_update = phone_partial_update;
var phone_delete = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/phone/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "phone",
                verb: "delete",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
        });
    });
};
exports.phone_delete = phone_delete;
//# sourceMappingURL=phone.js.map