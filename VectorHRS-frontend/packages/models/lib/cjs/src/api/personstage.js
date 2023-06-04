"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personstage_delete = exports.personstage_partial_update = exports.personstage_partial_updateFields = exports.personstage_update = exports.personstage_updateFields = exports.personstage_read = exports.personstage_create = exports.personstage_createFields = exports.personstage_list = exports.personstage_listFields = void 0;
var tslib_1 = require("tslib");
var instance_1 = require("../instance");
exports.personstage_listFields = [
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
var personstage_list = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/personstage/";
                    request = {
                        endpoint: endpoint,
                        name: "personstage",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data.query)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.personstage_list = personstage_list;
exports.personstage_createFields = {
    required: ["step", "x", "status"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
        description: {
            title: "Description",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        step: {
            title: "Step",
            type: "string",
            enum: [
                "communication",
                "answers",
                "pending",
                "interview",
                "contract",
                "rejection",
                "refusal",
                "recommendation",
                "questions",
                "invitations",
            ],
        },
        x: { title: "X", type: "number" },
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
var personstage_create = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/personstage/";
                    request = {
                        endpoint: endpoint,
                        name: "personstage",
                        verb: "post",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.personstage_create = personstage_create;
var personstage_read = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/personstage/{id}/";
                    endpoint = endpoint.replace("{id}", id.toString());
                    request = {
                        endpoint: endpoint,
                        name: "personstage",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.personstage_read = personstage_read;
exports.personstage_updateFields = {
    required: ["step", "x", "status"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
        description: {
            title: "Description",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        step: {
            title: "Step",
            type: "string",
            enum: [
                "communication",
                "answers",
                "pending",
                "interview",
                "contract",
                "rejection",
                "refusal",
                "recommendation",
                "questions",
                "invitations",
            ],
        },
        x: { title: "X", type: "number" },
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
var personstage_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/personstage/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "personstage",
                verb: "put",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.personstage_update = personstage_update;
exports.personstage_partial_updateFields = {
    required: ["step", "x", "status"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
        description: {
            title: "Description",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        step: {
            title: "Step",
            type: "string",
            enum: [
                "communication",
                "answers",
                "pending",
                "interview",
                "contract",
                "rejection",
                "refusal",
                "recommendation",
                "questions",
                "invitations",
            ],
        },
        x: { title: "X", type: "number" },
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
var personstage_partial_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/personstage/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "personstage",
                verb: "patch",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.personstage_partial_update = personstage_partial_update;
var personstage_delete = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/personstage/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "personstage",
                verb: "delete",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
        });
    });
};
exports.personstage_delete = personstage_delete;
//# sourceMappingURL=personstage.js.map