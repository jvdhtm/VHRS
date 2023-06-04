"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.department_delete = exports.department_partial_update = exports.department_partial_updateFields = exports.department_update = exports.department_updateFields = exports.department_read = exports.department_create = exports.department_createFields = exports.department_list = exports.department_listFields = void 0;
var tslib_1 = require("tslib");
var instance_1 = require("../instance");
exports.department_listFields = [
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
var department_list = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/department/";
                    request = {
                        endpoint: endpoint,
                        name: "department",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data.query)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.department_list = department_list;
exports.department_createFields = {
    required: ["shape", "status"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
        parentId: { title: "ParentId", type: "integer", "x-nullable": true },
        description: {
            title: "Description",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        shape: {
            title: "Shape",
            type: "string",
            enum: ["circle", "square", "rectangle", "triangle"],
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
var department_create = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/department/";
                    request = {
                        endpoint: endpoint,
                        name: "department",
                        verb: "post",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.department_create = department_create;
var department_read = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/department/{id}/";
                    endpoint = endpoint.replace("{id}", id.toString());
                    request = {
                        endpoint: endpoint,
                        name: "department",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.department_read = department_read;
exports.department_updateFields = {
    required: ["shape", "status"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
        parentId: { title: "ParentId", type: "integer", "x-nullable": true },
        description: {
            title: "Description",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        shape: {
            title: "Shape",
            type: "string",
            enum: ["circle", "square", "rectangle", "triangle"],
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
var department_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/department/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "department",
                verb: "put",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.department_update = department_update;
exports.department_partial_updateFields = {
    required: ["shape", "status"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
        parentId: { title: "ParentId", type: "integer", "x-nullable": true },
        description: {
            title: "Description",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        shape: {
            title: "Shape",
            type: "string",
            enum: ["circle", "square", "rectangle", "triangle"],
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
var department_partial_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/department/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "department",
                verb: "patch",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.department_partial_update = department_partial_update;
var department_delete = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/department/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "department",
                verb: "delete",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
        });
    });
};
exports.department_delete = department_delete;
//# sourceMappingURL=department.js.map