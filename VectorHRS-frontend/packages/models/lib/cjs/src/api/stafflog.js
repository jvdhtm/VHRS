"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stafflog_delete = exports.stafflog_partial_update = exports.stafflog_partial_updateFields = exports.stafflog_update = exports.stafflog_updateFields = exports.stafflog_read = exports.stafflog_create = exports.stafflog_createFields = exports.stafflog_list = exports.stafflog_listFields = void 0;
var tslib_1 = require("tslib");
var instance_1 = require("../instance");
exports.stafflog_listFields = [
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
var stafflog_list = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/stafflog/";
                    request = {
                        endpoint: endpoint,
                        name: "stafflog",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data.query)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.stafflog_list = stafflog_list;
exports.stafflog_createFields = {
    required: ["stage", "status"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        description: {
            title: "Description",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        stage: { title: "Stage", type: "integer" },
        with_person: { title: "With person", type: "integer", "x-nullable": true },
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
var stafflog_create = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/stafflog/";
                    request = {
                        endpoint: endpoint,
                        name: "stafflog",
                        verb: "post",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.stafflog_create = stafflog_create;
var stafflog_read = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/stafflog/{id}/";
                    endpoint = endpoint.replace("{id}", id.toString());
                    request = {
                        endpoint: endpoint,
                        name: "stafflog",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.stafflog_read = stafflog_read;
exports.stafflog_updateFields = {
    required: ["stage", "status"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        description: {
            title: "Description",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        stage: { title: "Stage", type: "integer" },
        with_person: { title: "With person", type: "integer", "x-nullable": true },
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
var stafflog_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/stafflog/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "stafflog",
                verb: "put",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.stafflog_update = stafflog_update;
exports.stafflog_partial_updateFields = {
    required: ["stage", "status"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        description: {
            title: "Description",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        stage: { title: "Stage", type: "integer" },
        with_person: { title: "With person", type: "integer", "x-nullable": true },
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
var stafflog_partial_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/stafflog/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "stafflog",
                verb: "patch",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.stafflog_partial_update = stafflog_partial_update;
var stafflog_delete = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/stafflog/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "stafflog",
                verb: "delete",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
        });
    });
};
exports.stafflog_delete = stafflog_delete;
//# sourceMappingURL=stafflog.js.map