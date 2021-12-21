"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.function_delete = exports.function_partial_update = exports.function_update = exports.function_read = exports.function_create = exports.function_list = void 0;
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const function_list = async (data, headers) => {
    let endpoint = "/api/function/";
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
exports.function_list = function_list;
const function_create = async (data, headers) => {
    let endpoint = "/api/function/";
    return await (0, axios_1.default)({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
exports.function_create = function_create;
const function_read = async (id, headers) => {
    let endpoint = "/api/function/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        headers,
    });
};
exports.function_read = function_read;
const function_update = async (id, data, headers) => {
    let endpoint = "/api/function/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
exports.function_update = function_update;
const function_partial_update = async (id, data, headers) => {
    let endpoint = "/api/function/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
exports.function_partial_update = function_partial_update;
const function_delete = async (id, headers) => {
    let endpoint = "/api/function/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "delete",
        url: endpoint,
        headers,
    });
};
exports.function_delete = function_delete;
//# sourceMappingURL=function.js.map