"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffstage_delete = exports.staffstage_partial_update = exports.staffstage_update = exports.staffstage_read = exports.staffstage_create = exports.staffstage_list = void 0;
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const staffstage_list = async (data, headers) => {
    let endpoint = "/api/staffstage/";
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
exports.staffstage_list = staffstage_list;
const staffstage_create = async (data, headers) => {
    let endpoint = "/api/staffstage/";
    return await (0, axios_1.default)({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
exports.staffstage_create = staffstage_create;
const staffstage_read = async (id, headers) => {
    let endpoint = "/api/staffstage/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        headers,
    });
};
exports.staffstage_read = staffstage_read;
const staffstage_update = async (id, data, headers) => {
    let endpoint = "/api/staffstage/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
exports.staffstage_update = staffstage_update;
const staffstage_partial_update = async (id, data, headers) => {
    let endpoint = "/api/staffstage/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
exports.staffstage_partial_update = staffstage_partial_update;
const staffstage_delete = async (id, headers) => {
    let endpoint = "/api/staffstage/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "delete",
        url: endpoint,
        headers,
    });
};
exports.staffstage_delete = staffstage_delete;
//# sourceMappingURL=staffstage.js.map