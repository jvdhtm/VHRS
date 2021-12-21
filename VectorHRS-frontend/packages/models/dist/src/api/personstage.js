"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personstage_delete = exports.personstage_partial_update = exports.personstage_update = exports.personstage_read = exports.personstage_create = exports.personstage_list = void 0;
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const personstage_list = async (data, headers) => {
    let endpoint = "/api/personstage/";
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
exports.personstage_list = personstage_list;
const personstage_create = async (data, headers) => {
    let endpoint = "/api/personstage/";
    return await (0, axios_1.default)({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
exports.personstage_create = personstage_create;
const personstage_read = async (id, headers) => {
    let endpoint = "/api/personstage/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        headers,
    });
};
exports.personstage_read = personstage_read;
const personstage_update = async (id, data, headers) => {
    let endpoint = "/api/personstage/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
exports.personstage_update = personstage_update;
const personstage_partial_update = async (id, data, headers) => {
    let endpoint = "/api/personstage/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
exports.personstage_partial_update = personstage_partial_update;
const personstage_delete = async (id, headers) => {
    let endpoint = "/api/personstage/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "delete",
        url: endpoint,
        headers,
    });
};
exports.personstage_delete = personstage_delete;
//# sourceMappingURL=personstage.js.map