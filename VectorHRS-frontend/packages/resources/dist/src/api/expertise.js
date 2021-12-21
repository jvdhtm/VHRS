import axios from "axios";
export const expertise_list = async (data, headers) => {
    let endpoint = "/api/expertise/";
    return await axios({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
export const expertise_create = async (data, headers) => {
    let endpoint = "/api/expertise/";
    return await axios({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
export const expertise_read = async (id, headers) => {
    let endpoint = "/api/expertise/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "get",
        url: endpoint,
        headers,
    });
};
export const expertise_update = async (id, data, headers) => {
    let endpoint = "/api/expertise/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
export const expertise_partial_update = async (id, data, headers) => {
    let endpoint = "/api/expertise/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
export const expertise_delete = async (id, headers) => {
    let endpoint = "/api/expertise/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "delete",
        url: endpoint,
        headers,
    });
};
//# sourceMappingURL=expertise.js.map