"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comments_delete = exports.comments_partial_update = exports.comments_update = exports.comments_read = exports.comments_create = exports.comments_list = void 0;
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const comments_list = async (data, headers) => {
    let endpoint = "/api/comments/";
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
exports.comments_list = comments_list;
const comments_create = async (data, headers) => {
    let endpoint = "/api/comments/";
    return await (0, axios_1.default)({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
exports.comments_create = comments_create;
const comments_read = async (id, headers) => {
    let endpoint = "/api/comments/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        headers,
    });
};
exports.comments_read = comments_read;
const comments_update = async (id, data, headers) => {
    let endpoint = "/api/comments/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
exports.comments_update = comments_update;
const comments_partial_update = async (id, data, headers) => {
    let endpoint = "/api/comments/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
exports.comments_partial_update = comments_partial_update;
const comments_delete = async (id, headers) => {
    let endpoint = "/api/comments/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "delete",
        url: endpoint,
        headers,
    });
};
exports.comments_delete = comments_delete;
//# sourceMappingURL=comments.js.map