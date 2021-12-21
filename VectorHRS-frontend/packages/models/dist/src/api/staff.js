"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staff_delete = exports.staff_partial_update = exports.staff_update = exports.staff_read = exports.staff_create = exports.staff_list = void 0;
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const staff_list = async (data, headers) => {
    let endpoint = "/api/staff/";
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
exports.staff_list = staff_list;
const staff_create = async (data, headers) => {
    let endpoint = "/api/staff/";
    return await (0, axios_1.default)({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
exports.staff_create = staff_create;
const staff_read = async (id, headers) => {
    let endpoint = "/api/staff/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        headers,
    });
};
exports.staff_read = staff_read;
const staff_update = async (id, data, headers) => {
    let endpoint = "/api/staff/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
exports.staff_update = staff_update;
const staff_partial_update = async (id, data, headers) => {
    let endpoint = "/api/staff/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
exports.staff_partial_update = staff_partial_update;
const staff_delete = async (id, headers) => {
    let endpoint = "/api/staff/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "delete",
        url: endpoint,
        headers,
    });
};
exports.staff_delete = staff_delete;
//# sourceMappingURL=staff.js.map