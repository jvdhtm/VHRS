"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.address_delete = exports.address_partial_update = exports.address_update = exports.address_read = exports.address_create = exports.address_list = void 0;
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const address_list = async (data, headers) => {
    let endpoint = "/api/address/";
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
exports.address_list = address_list;
const address_create = async (data, headers) => {
    let endpoint = "/api/address/";
    return await (0, axios_1.default)({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
exports.address_create = address_create;
const address_read = async (id, headers) => {
    let endpoint = "/api/address/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        headers,
    });
};
exports.address_read = address_read;
const address_update = async (id, data, headers) => {
    let endpoint = "/api/address/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
exports.address_update = address_update;
const address_partial_update = async (id, data, headers) => {
    let endpoint = "/api/address/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
exports.address_partial_update = address_partial_update;
const address_delete = async (id, headers) => {
    let endpoint = "/api/address/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "delete",
        url: endpoint,
        headers,
    });
};
exports.address_delete = address_delete;
//# sourceMappingURL=address.js.map