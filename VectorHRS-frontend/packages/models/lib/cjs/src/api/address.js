"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.address_delete = exports.address_partial_update = exports.address_partial_updateFields = exports.address_update = exports.address_updateFields = exports.address_read = exports.address_create = exports.address_createFields = exports.address_list = exports.address_listFields = void 0;
var tslib_1 = require("tslib");
var instance_1 = require("../instance");
exports.address_listFields = [
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
var address_list = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/address/";
                    request = {
                        endpoint: endpoint,
                        name: "address",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data.query)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.address_list = address_list;
exports.address_createFields = {
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
        address1: {
            title: "Address1",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        address2: {
            title: "Address2",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        zip: { title: "Zip", type: "string", maxLength: 10, "x-nullable": true },
        city: { title: "City", type: "string", maxLength: 100, "x-nullable": true },
        country: {
            title: "Country",
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
var address_create = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/address/";
                    request = {
                        endpoint: endpoint,
                        name: "address",
                        verb: "post",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.address_create = address_create;
var address_read = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/address/{id}/";
                    endpoint = endpoint.replace("{id}", id.toString());
                    request = {
                        endpoint: endpoint,
                        name: "address",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.address_read = address_read;
exports.address_updateFields = {
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
        address1: {
            title: "Address1",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        address2: {
            title: "Address2",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        zip: { title: "Zip", type: "string", maxLength: 10, "x-nullable": true },
        city: { title: "City", type: "string", maxLength: 100, "x-nullable": true },
        country: {
            title: "Country",
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
var address_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/address/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "address",
                verb: "put",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.address_update = address_update;
exports.address_partial_updateFields = {
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
        address1: {
            title: "Address1",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        address2: {
            title: "Address2",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        zip: { title: "Zip", type: "string", maxLength: 10, "x-nullable": true },
        city: { title: "City", type: "string", maxLength: 100, "x-nullable": true },
        country: {
            title: "Country",
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
var address_partial_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/address/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "address",
                verb: "patch",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.address_partial_update = address_partial_update;
var address_delete = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/address/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "address",
                verb: "delete",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
        });
    });
};
exports.address_delete = address_delete;
//# sourceMappingURL=address.js.map