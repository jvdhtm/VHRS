"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.role_delete = exports.role_partial_update = exports.role_update = exports.role_read = exports.role_create = exports.role_list = void 0;
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const role_list = async (data, headers) => {
    let endpoint = "/api/role/";
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
exports.role_list = role_list;
const role_create = async (data, headers) => {
    let endpoint = "/api/role/";
    return await (0, axios_1.default)({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
exports.role_create = role_create;
const role_read = async (id, headers) => {
    let endpoint = "/api/role/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        headers,
    });
};
exports.role_read = role_read;
const role_update = async (id, data, headers) => {
    let endpoint = "/api/role/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
exports.role_update = role_update;
const role_partial_update = async (id, data, headers) => {
    let endpoint = "/api/role/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
exports.role_partial_update = role_partial_update;
const role_delete = async (id, headers) => {
    let endpoint = "/api/role/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "delete",
        url: endpoint,
        headers,
    });
};
exports.role_delete = role_delete;
//# sourceMappingURL=role.js.map