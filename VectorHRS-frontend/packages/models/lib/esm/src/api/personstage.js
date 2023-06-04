import { __awaiter, __generator } from "tslib";
import { dataLayerObj } from "../instance";
export var personstage_listFields = [
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
export var personstage_list = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/personstage/";
                    request = {
                        endpoint: endpoint,
                        name: "personstage",
                        verb: "get",
                    };
                    return [4 /*yield*/, dataLayerObj.requestApi(request, headers, force, data.query)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
export var personstage_createFields = {
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
export var personstage_create = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/personstage/";
                    request = {
                        endpoint: endpoint,
                        name: "personstage",
                        verb: "post",
                    };
                    return [4 /*yield*/, dataLayerObj.requestApi(request, headers, force, data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
export var personstage_read = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/personstage/{id}/";
                    endpoint = endpoint.replace("{id}", id.toString());
                    request = {
                        endpoint: endpoint,
                        name: "personstage",
                        verb: "get",
                    };
                    return [4 /*yield*/, dataLayerObj.requestApi(request, headers, force)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
export var personstage_updateFields = {
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
export var personstage_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            endpoint = _apiPrefix + "/personstage/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "personstage",
                verb: "put",
            };
            return [2 /*return*/, dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
export var personstage_partial_updateFields = {
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
export var personstage_partial_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            endpoint = _apiPrefix + "/personstage/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "personstage",
                verb: "patch",
            };
            return [2 /*return*/, dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
export var personstage_delete = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            endpoint = _apiPrefix + "/personstage/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "personstage",
                verb: "delete",
            };
            return [2 /*return*/, dataLayerObj.requestApi(request, headers, force)];
        });
    });
};
//# sourceMappingURL=personstage.js.map