"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.department_delete = exports.department_partial_update = exports.department_update = exports.department_read = exports.department_create = exports.department_list = void 0;
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const department_list = async (data, headers) => {
    let endpoint = "/api/department/";
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
exports.department_list = department_list;
const department_create = async (data, headers) => {
    let endpoint = "/api/department/";
    return await (0, axios_1.default)({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
exports.department_create = department_create;
const department_read = async (id, headers) => {
    let endpoint = "/api/department/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        headers,
    });
};
exports.department_read = department_read;
const department_update = async (id, data, headers) => {
    let endpoint = "/api/department/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
exports.department_update = department_update;
const department_partial_update = async (id, data, headers) => {
    let endpoint = "/api/department/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
exports.department_partial_update = department_partial_update;
const department_delete = async (id, headers) => {
    let endpoint = "/api/department/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "delete",
        url: endpoint,
        headers,
    });
};
exports.department_delete = department_delete;
//# sourceMappingURL=department.js.map