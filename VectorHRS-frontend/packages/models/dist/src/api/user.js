"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_delete = exports.user_partial_update = exports.user_update = exports.user_read = exports.user_create = exports.user_list = void 0;
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const user_list = async (data, headers) => {
    let endpoint = "/api/user/";
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
exports.user_list = user_list;
const user_create = async (data, headers) => {
    let endpoint = "/api/user/";
    return await (0, axios_1.default)({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
exports.user_create = user_create;
const user_read = async (id, headers) => {
    let endpoint = "/api/user/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        headers,
    });
};
exports.user_read = user_read;
const user_update = async (id, data, headers) => {
    let endpoint = "/api/user/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
exports.user_update = user_update;
const user_partial_update = async (id, data, headers) => {
    let endpoint = "/api/user/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
exports.user_partial_update = user_partial_update;
const user_delete = async (id, headers) => {
    let endpoint = "/api/user/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "delete",
        url: endpoint,
        headers,
    });
};
exports.user_delete = user_delete;
//# sourceMappingURL=user.js.map