"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.personlog_delete = exports.personlog_partial_update = exports.personlog_update = exports.personlog_read = exports.personlog_create = exports.personlog_list = void 0;
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const personlog_list = async (data, headers) => {
    let endpoint = "/api/personlog/";
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
exports.personlog_list = personlog_list;
const personlog_create = async (data, headers) => {
    let endpoint = "/api/personlog/";
    return await (0, axios_1.default)({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
exports.personlog_create = personlog_create;
const personlog_read = async (id, headers) => {
    let endpoint = "/api/personlog/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        headers,
    });
};
exports.personlog_read = personlog_read;
const personlog_update = async (id, data, headers) => {
    let endpoint = "/api/personlog/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
exports.personlog_update = personlog_update;
const personlog_partial_update = async (id, data, headers) => {
    let endpoint = "/api/personlog/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
exports.personlog_partial_update = personlog_partial_update;
const personlog_delete = async (id, headers) => {
    let endpoint = "/api/personlog/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "delete",
        url: endpoint,
        headers,
    });
};
exports.personlog_delete = personlog_delete;
//# sourceMappingURL=personlog.js.map