"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.condition_delete = exports.condition_partial_update = exports.condition_update = exports.condition_read = exports.condition_create = exports.condition_list = void 0;
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const condition_list = async (data, headers) => {
    let endpoint = "/api/condition/";
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
exports.condition_list = condition_list;
const condition_create = async (data, headers) => {
    let endpoint = "/api/condition/";
    return await (0, axios_1.default)({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
exports.condition_create = condition_create;
const condition_read = async (id, headers) => {
    let endpoint = "/api/condition/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        headers,
    });
};
exports.condition_read = condition_read;
const condition_update = async (id, data, headers) => {
    let endpoint = "/api/condition/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
exports.condition_update = condition_update;
const condition_partial_update = async (id, data, headers) => {
    let endpoint = "/api/condition/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
exports.condition_partial_update = condition_partial_update;
const condition_delete = async (id, headers) => {
    let endpoint = "/api/condition/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "delete",
        url: endpoint,
        headers,
    });
};
exports.condition_delete = condition_delete;
//# sourceMappingURL=condition.js.map