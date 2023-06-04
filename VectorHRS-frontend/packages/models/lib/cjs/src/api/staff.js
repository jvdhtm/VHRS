"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staff_delete = exports.staff_partial_update = exports.staff_partial_updateFields = exports.staff_update = exports.staff_updateFields = exports.staff_read = exports.staff_create = exports.staff_createFields = exports.staff_list = exports.staff_listFields = void 0;
var tslib_1 = require("tslib");
var instance_1 = require("../instance");
exports.staff_listFields = [
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
var staff_list = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/staff/";
                    request = {
                        endpoint: endpoint,
                        name: "staff",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data.query)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.staff_list = staff_list;
exports.staff_createFields = {
    required: ["department", "condition", "who", "x", "y", "level"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        department: { title: "Department", type: "integer" },
        condition: { title: "Condition", type: "integer" },
        title: {
            title: "Title",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        bossId: { title: "BossId", type: "integer", "x-nullable": true },
        who: { title: "Who", type: "integer" },
        x: { title: "X", type: "number" },
        y: { title: "Y", type: "number" },
        level: { title: "Level", type: "integer" },
    },
};
var staff_create = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/staff/";
                    request = {
                        endpoint: endpoint,
                        name: "staff",
                        verb: "post",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.staff_create = staff_create;
var staff_read = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/staff/{id}/";
                    endpoint = endpoint.replace("{id}", id.toString());
                    request = {
                        endpoint: endpoint,
                        name: "staff",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.staff_read = staff_read;
exports.staff_updateFields = {
    required: ["department", "condition", "who", "x", "y", "level"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        department: { title: "Department", type: "integer" },
        condition: { title: "Condition", type: "integer" },
        title: {
            title: "Title",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        bossId: { title: "BossId", type: "integer", "x-nullable": true },
        who: { title: "Who", type: "integer" },
        x: { title: "X", type: "number" },
        y: { title: "Y", type: "number" },
        level: { title: "Level", type: "integer" },
    },
};
var staff_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/staff/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "staff",
                verb: "put",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.staff_update = staff_update;
exports.staff_partial_updateFields = {
    required: ["department", "condition", "who", "x", "y", "level"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        department: { title: "Department", type: "integer" },
        condition: { title: "Condition", type: "integer" },
        title: {
            title: "Title",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        bossId: { title: "BossId", type: "integer", "x-nullable": true },
        who: { title: "Who", type: "integer" },
        x: { title: "X", type: "number" },
        y: { title: "Y", type: "number" },
        level: { title: "Level", type: "integer" },
    },
};
var staff_partial_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/staff/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "staff",
                verb: "patch",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.staff_partial_update = staff_partial_update;
var staff_delete = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/staff/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "staff",
                verb: "delete",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
        });
    });
};
exports.staff_delete = staff_delete;
//# sourceMappingURL=staff.js.map