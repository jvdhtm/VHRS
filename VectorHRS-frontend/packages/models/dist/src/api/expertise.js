"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expertise_delete = exports.expertise_partial_update = exports.expertise_update = exports.expertise_read = exports.expertise_create = exports.expertise_list = void 0;
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const expertise_list = async (data, headers) => {
    let endpoint = "/api/expertise/";
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
exports.expertise_list = expertise_list;
const expertise_create = async (data, headers) => {
    let endpoint = "/api/expertise/";
    return await (0, axios_1.default)({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
exports.expertise_create = expertise_create;
const expertise_read = async (id, headers) => {
    let endpoint = "/api/expertise/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        headers,
    });
};
exports.expertise_read = expertise_read;
const expertise_update = async (id, data, headers) => {
    let endpoint = "/api/expertise/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
exports.expertise_update = expertise_update;
const expertise_partial_update = async (id, data, headers) => {
    let endpoint = "/api/expertise/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
exports.expertise_partial_update = expertise_partial_update;
const expertise_delete = async (id, headers) => {
    let endpoint = "/api/expertise/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "delete",
        url: endpoint,
        headers,
    });
};
exports.expertise_delete = expertise_delete;
//# sourceMappingURL=expertise.js.map