"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stafflog_delete = exports.stafflog_partial_update = exports.stafflog_update = exports.stafflog_read = exports.stafflog_create = exports.stafflog_list = void 0;
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const stafflog_list = async (data, headers) => {
    let endpoint = "/api/stafflog/";
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
exports.stafflog_list = stafflog_list;
const stafflog_create = async (data, headers) => {
    let endpoint = "/api/stafflog/";
    return await (0, axios_1.default)({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
exports.stafflog_create = stafflog_create;
const stafflog_read = async (id, headers) => {
    let endpoint = "/api/stafflog/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        headers,
    });
};
exports.stafflog_read = stafflog_read;
const stafflog_update = async (id, data, headers) => {
    let endpoint = "/api/stafflog/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
exports.stafflog_update = stafflog_update;
const stafflog_partial_update = async (id, data, headers) => {
    let endpoint = "/api/stafflog/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
exports.stafflog_partial_update = stafflog_partial_update;
const stafflog_delete = async (id, headers) => {
    let endpoint = "/api/stafflog/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "delete",
        url: endpoint,
        headers,
    });
};
exports.stafflog_delete = stafflog_delete;
//# sourceMappingURL=stafflog.js.map