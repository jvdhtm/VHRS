import { __awaiter, __generator } from "tslib";
import { dataLayerObj } from "../instance";
export var condition_listFields = [
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
export var condition_list = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/condition/";
                    request = {
                        endpoint: endpoint,
                        name: "condition",
                        verb: "get",
                    };
                    return [4 /*yield*/, dataLayerObj.requestApi(request, headers, force, data.query)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
export var condition_createFields = {
    required: ["severity", "status"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        severity: {
            title: "Severity",
            type: "string",
            enum: ["small", "mild", "sever"],
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
export var condition_create = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/condition/";
                    request = {
                        endpoint: endpoint,
                        name: "condition",
                        verb: "post",
                    };
                    return [4 /*yield*/, dataLayerObj.requestApi(request, headers, force, data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
export var condition_read = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/condition/{id}/";
                    endpoint = endpoint.replace("{id}", id.toString());
                    request = {
                        endpoint: endpoint,
                        name: "condition",
                        verb: "get",
                    };
                    return [4 /*yield*/, dataLayerObj.requestApi(request, headers, force)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
export var condition_updateFields = {
    required: ["severity", "status"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        severity: {
            title: "Severity",
            type: "string",
            enum: ["small", "mild", "sever"],
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
export var condition_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            endpoint = _apiPrefix + "/condition/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "condition",
                verb: "put",
            };
            return [2 /*return*/, dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
export var condition_partial_updateFields = {
    required: ["severity", "status"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        severity: {
            title: "Severity",
            type: "string",
            enum: ["small", "mild", "sever"],
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
export var condition_partial_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            endpoint = _apiPrefix + "/condition/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "condition",
                verb: "patch",
            };
            return [2 /*return*/, dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
export var condition_delete = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            endpoint = _apiPrefix + "/condition/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "condition",
                verb: "delete",
            };
            return [2 /*return*/, dataLayerObj.requestApi(request, headers, force)];
        });
    });
};
//# sourceMappingURL=condition.js.map