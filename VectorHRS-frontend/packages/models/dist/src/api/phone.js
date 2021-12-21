"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phone_delete = exports.phone_partial_update = exports.phone_update = exports.phone_read = exports.phone_create = exports.phone_list = void 0;
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const phone_list = async (data, headers) => {
    let endpoint = "/api/phone/";
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
exports.phone_list = phone_list;
const phone_create = async (data, headers) => {
    let endpoint = "/api/phone/";
    return await (0, axios_1.default)({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
exports.phone_create = phone_create;
const phone_read = async (id, headers) => {
    let endpoint = "/api/phone/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        headers,
    });
};
exports.phone_read = phone_read;
const phone_update = async (id, data, headers) => {
    let endpoint = "/api/phone/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
exports.phone_update = phone_update;
const phone_partial_update = async (id, data, headers) => {
    let endpoint = "/api/phone/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
exports.phone_partial_update = phone_partial_update;
const phone_delete = async (id, headers) => {
    let endpoint = "/api/phone/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "delete",
        url: endpoint,
        headers,
    });
};
exports.phone_delete = phone_delete;
//# sourceMappingURL=phone.js.map