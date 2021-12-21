"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app_delete = exports.app_partial_update = exports.app_update = exports.app_read = exports.app_create = exports.app_list = void 0;
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const app_list = async (data, headers) => {
    let endpoint = "/api/app/";
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
exports.app_list = app_list;
const app_create = async (data, headers) => {
    let endpoint = "/api/app/";
    return await (0, axios_1.default)({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
exports.app_create = app_create;
const app_read = async (id, headers) => {
    let endpoint = "/api/app/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        headers,
    });
};
exports.app_read = app_read;
const app_update = async (id, data, headers) => {
    let endpoint = "/api/app/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
exports.app_update = app_update;
const app_partial_update = async (id, data, headers) => {
    let endpoint = "/api/app/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
exports.app_partial_update = app_partial_update;
const app_delete = async (id, headers) => {
    let endpoint = "/api/app/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "delete",
        url: endpoint,
        headers,
    });
};
exports.app_delete = app_delete;
//# sourceMappingURL=app.js.map