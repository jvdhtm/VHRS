"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person_delete = exports.person_partial_update = exports.person_update = exports.person_read = exports.person_create = exports.person_list = void 0;
const tslib_1 = require("tslib");
const axios_1 = (0, tslib_1.__importDefault)(require("axios"));
const person_list = async (data, headers) => {
    let endpoint = "/api/person/";
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
exports.person_list = person_list;
const person_create = async (data, headers) => {
    let endpoint = "/api/person/";
    return await (0, axios_1.default)({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
exports.person_create = person_create;
const person_read = async (id, headers) => {
    let endpoint = "/api/person/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "get",
        url: endpoint,
        headers,
    });
};
exports.person_read = person_read;
const person_update = async (id, data, headers) => {
    let endpoint = "/api/person/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
exports.person_update = person_update;
const person_partial_update = async (id, data, headers) => {
    let endpoint = "/api/person/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
exports.person_partial_update = person_partial_update;
const person_delete = async (id, headers) => {
    let endpoint = "/api/person/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await (0, axios_1.default)({
        method: "delete",
        url: endpoint,
        headers,
    });
};
exports.person_delete = person_delete;
//# sourceMappingURL=person.js.map