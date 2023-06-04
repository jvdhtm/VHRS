"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.questionsrelatedlink_delete = exports.questionsrelatedlink_partial_update = exports.questionsrelatedlink_partial_updateFields = exports.questionsrelatedlink_update = exports.questionsrelatedlink_updateFields = exports.questionsrelatedlink_read = exports.questionsrelatedlink_create = exports.questionsrelatedlink_createFields = exports.questionsrelatedlink_list = exports.questionsrelatedlink_listFields = void 0;
var tslib_1 = require("tslib");
var instance_1 = require("../instance");
exports.questionsrelatedlink_listFields = [
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
var questionsrelatedlink_list = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/questionsrelatedlink/";
                    request = {
                        endpoint: endpoint,
                        name: "questionsrelatedlink",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data.query)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.questionsrelatedlink_list = questionsrelatedlink_list;
exports.questionsrelatedlink_createFields = {
    required: ["question"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        question: { title: "Question", type: "integer" },
        name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
        created_date_time: {
            title: "Created date time",
            type: "string",
            format: "date-time",
        },
    },
};
var questionsrelatedlink_create = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/questionsrelatedlink/";
                    request = {
                        endpoint: endpoint,
                        name: "questionsrelatedlink",
                        verb: "post",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.questionsrelatedlink_create = questionsrelatedlink_create;
var questionsrelatedlink_read = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/questionsrelatedlink/{id}/";
                    endpoint = endpoint.replace("{id}", id.toString());
                    request = {
                        endpoint: endpoint,
                        name: "questionsrelatedlink",
                        verb: "get",
                    };
                    return [4 /*yield*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
exports.questionsrelatedlink_read = questionsrelatedlink_read;
exports.questionsrelatedlink_updateFields = {
    required: ["question"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        question: { title: "Question", type: "integer" },
        name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
        created_date_time: {
            title: "Created date time",
            type: "string",
            format: "date-time",
        },
    },
};
var questionsrelatedlink_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/questionsrelatedlink/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "questionsrelatedlink",
                verb: "put",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.questionsrelatedlink_update = questionsrelatedlink_update;
exports.questionsrelatedlink_partial_updateFields = {
    required: ["question"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        question: { title: "Question", type: "integer" },
        name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
        created_date_time: {
            title: "Created date time",
            type: "string",
            format: "date-time",
        },
    },
};
var questionsrelatedlink_partial_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/questionsrelatedlink/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "questionsrelatedlink",
                verb: "patch",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
exports.questionsrelatedlink_partial_update = questionsrelatedlink_partial_update;
var questionsrelatedlink_delete = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return tslib_1.__awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return tslib_1.__generator(this, function (_a) {
            endpoint = _apiPrefix + "/questionsrelatedlink/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "questionsrelatedlink",
                verb: "delete",
            };
            return [2 /*return*/, instance_1.dataLayerObj.requestApi(request, headers, force)];
        });
    });
};
exports.questionsrelatedlink_delete = questionsrelatedlink_delete;
//# sourceMappingURL=questionsrelatedlink.js.map