"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person_delete = exports.person_partial_update = exports.person_partial_updateFields = exports.person_update = exports.person_updateFields = exports.person_read = exports.person_create = exports.person_createFields = exports.person_list = exports.person_listFields = void 0;
var tslib_1 = require("tslib");
var instance_1 = require("../instance");
exports.person_listFields = [
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
var person_list = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/person/";
                    request = {
                        endpoint: endpoint,
                        name: "person",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data.query)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.person_list = person_list;
exports.person_createFields = {
    required: ["age", "status"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        firstname: {
            title: "Firstname",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        lastname: {
            title: "Lastname",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        age: { title: "Age", type: "integer" },
        nationalId: {
            title: "NationalId",
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
var person_create = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/person/";
                    request = {
                        endpoint: endpoint,
                        name: "person",
                        verb: "post",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.person_create = person_create;
var person_read = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/person/{id}/";
                    endpoint = endpoint.replace("{id}", id.toString());
                    request = {
                        endpoint: endpoint,
                        name: "person",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.person_read = person_read;
exports.person_updateFields = {
    required: ["age", "status"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        firstname: {
            title: "Firstname",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        lastname: {
            title: "Lastname",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        age: { title: "Age", type: "integer" },
        nationalId: {
            title: "NationalId",
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
var person_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/person/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "person",
                verb: "put",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.person_update = person_update;
exports.person_partial_updateFields = {
    required: ["age", "status"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        firstname: {
            title: "Firstname",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        lastname: {
            title: "Lastname",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        age: { title: "Age", type: "integer" },
        nationalId: {
            title: "NationalId",
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
var person_partial_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/person/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "person",
                verb: "patch",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.person_partial_update = person_partial_update;
var person_delete = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/person/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "person",
                verb: "delete",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
        });
    });
};
exports.person_delete = person_delete;
//# sourceMappingURL=person.js.map