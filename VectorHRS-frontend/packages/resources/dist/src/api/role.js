import axios from "axios";
export const role_list = async (data, headers) => {
    let endpoint = "/api/role/";
    return await axios({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
export const role_create = async (data, headers) => {
    let endpoint = "/api/role/";
    return await axios({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
export const role_read = async (id, headers) => {
    let endpoint = "/api/role/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "get",
        url: endpoint,
        headers,
    });
};
export const role_update = async (id, data, headers) => {
    let endpoint = "/api/role/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
export const role_partial_update = async (id, data, headers) => {
    let endpoint = "/api/role/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
export const role_delete = async (id, headers) => {
    let endpoint = "/api/role/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "delete",
        url: endpoint,
        headers,
    });
};
//# sourceMappingURL=role.js.map