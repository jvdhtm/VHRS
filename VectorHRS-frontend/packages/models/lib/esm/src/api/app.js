import { __awaiter, __generator } from "tslib";
import { dataLayerObj } from "../instance";
export var app_listFields = [
    { name: "id", in: "query", description: "", required: false, type: "number" },
    {
        name: "title",
        in: "query",
        description: "",
        required: false,
        type: "string",
    },
    {
        name: "pathUrl",
        in: "query",
        description: "",
        required: false,
        type: "string",
    },
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
export var app_list = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/app/";
                    request = {
                        endpoint: endpoint,
                        name: "app",
                        verb: "get",
                    };
                    return [4 /*yield*/, dataLayerObj.requestApi(request, headers, force, data.query)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
export var app_createFields = {
    required: ["title", "pathUrl"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        title: { title: "Title", type: "string", maxLength: 30, minLength: 1 },
        pathUrl: { title: "PathUrl", type: "string", maxLength: 30, minLength: 1 },
    },
};
export var app_create = function (data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/app/";
                    request = {
                        endpoint: endpoint,
                        name: "app",
                        verb: "post",
                    };
                    return [4 /*yield*/, dataLayerObj.requestApi(request, headers, force, data)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
export var app_read = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    endpoint = _apiPrefix + "/app/{id}/";
                    endpoint = endpoint.replace("{id}", id.toString());
                    request = {
                        endpoint: endpoint,
                        name: "app",
                        verb: "get",
                    };
                    return [4 /*yield*/, dataLayerObj.requestApi(request, headers, force)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
export var app_updateFields = {
    required: ["title", "pathUrl"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        title: { title: "Title", type: "string", maxLength: 30, minLength: 1 },
        pathUrl: { title: "PathUrl", type: "string", maxLength: 30, minLength: 1 },
    },
};
export var app_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            endpoint = _apiPrefix + "/app/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "app",
                verb: "put",
            };
            return [2 /*return*/, dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
export var app_partial_updateFields = {
    required: ["title", "pathUrl"],
    type: "object",
    properties: {
        id: { title: "ID", type: "integer", readOnly: true },
        title: { title: "Title", type: "string", maxLength: 30, minLength: 1 },
        pathUrl: { title: "PathUrl", type: "string", maxLength: 30, minLength: 1 },
    },
};
export var app_partial_update = function (id, data, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            endpoint = _apiPrefix + "/app/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "app",
                verb: "patch",
            };
            return [2 /*return*/, dataLayerObj.requestApi(request, headers, force, data)];
        });
    });
};
export var app_delete = function (id, headers, _apiPrefix, force) {
    if (_apiPrefix === void 0) { _apiPrefix = "/api"; }
    if (force === void 0) { force = false; }
    return __awaiter(void 0, void 0, void 0, function () {
        var endpoint, request;
        return __generator(this, function (_a) {
            endpoint = _apiPrefix + "/app/{id}/";
            endpoint = endpoint.replace("{id}", id.toString());
            request = {
                endpoint: endpoint,
                name: "app",
                verb: "delete",
            };
            return [2 /*return*/, dataLayerObj.requestApi(request, headers, force)];
        });
    });
};
//# sourceMappingURL=app.js.map