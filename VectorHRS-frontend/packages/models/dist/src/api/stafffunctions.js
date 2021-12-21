"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stafffunctions_delete = exports.stafffunctions_partial_update = exports.stafffunctions_update = exports.stafffunctions_read = exports.stafffunctions_create = exports.stafffunctions_list = void 0;
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const stafffunctions_list = async (data, headers) => {
    let endpoint = "/api/stafffunctions/";
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
exports.stafffunctions_list = stafffunctions_list;
const stafffunctions_create = async (data, headers) => {
    let endpoint = "/api/stafffunctions/";
    return await (0, axios_1.default)({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
exports.stafffunctions_create = stafffunctions_create;
const stafffunctions_read = async (id, headers) => {
    let endpoint = "/api/stafffunctions/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        headers,
    });
};
exports.stafffunctions_read = stafffunctions_read;
const stafffunctions_update = async (id, data, headers) => {
    let endpoint = "/api/stafffunctions/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
exports.stafffunctions_update = stafffunctions_update;
const stafffunctions_partial_update = async (id, data, headers) => {
    let endpoint = "/api/stafffunctions/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
exports.stafffunctions_partial_update = stafffunctions_partial_update;
const stafffunctions_delete = async (id, headers) => {
    let endpoint = "/api/stafffunctions/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "delete",
        url: endpoint,
        headers,
    });
};
exports.stafffunctions_delete = stafffunctions_delete;
//# sourceMappingURL=stafffunctions.js.map