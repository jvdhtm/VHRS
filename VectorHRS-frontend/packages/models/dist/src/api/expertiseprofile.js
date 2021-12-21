"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.expertiseprofile_delete = exports.expertiseprofile_partial_update = exports.expertiseprofile_update = exports.expertiseprofile_read = exports.expertiseprofile_create = exports.expertiseprofile_list = void 0;
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const expertiseprofile_list = async (data, headers) => {
    let endpoint = "/api/expertiseprofile/";
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
exports.expertiseprofile_list = expertiseprofile_list;
const expertiseprofile_create = async (data, headers) => {
    let endpoint = "/api/expertiseprofile/";
    return await (0, axios_1.default)({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
exports.expertiseprofile_create = expertiseprofile_create;
const expertiseprofile_read = async (id, headers) => {
    let endpoint = "/api/expertiseprofile/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        headers,
    });
};
exports.expertiseprofile_read = expertiseprofile_read;
const expertiseprofile_update = async (id, data, headers) => {
    let endpoint = "/api/expertiseprofile/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
exports.expertiseprofile_update = expertiseprofile_update;
const expertiseprofile_partial_update = async (id, data, headers) => {
    let endpoint = "/api/expertiseprofile/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
exports.expertiseprofile_partial_update = expertiseprofile_partial_update;
const expertiseprofile_delete = async (id, headers) => {
    let endpoint = "/api/expertiseprofile/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "delete",
        url: endpoint,
        headers,
    });
};
exports.expertiseprofile_delete = expertiseprofile_delete;
//# sourceMappingURL=expertiseprofile.js.map