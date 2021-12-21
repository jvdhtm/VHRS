import axios from "axios";
export const condition_list = async (data, headers) => {
    let endpoint = "/api/condition/";
    return await axios({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
export const condition_create = async (data, headers) => {
    let endpoint = "/api/condition/";
    return await axios({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
export const condition_read = async (id, headers) => {
    let endpoint = "/api/condition/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "get",
        url: endpoint,
        headers,
    });
};
export const condition_update = async (id, data, headers) => {
    let endpoint = "/api/condition/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
export const condition_partial_update = async (id, data, headers) => {
    let endpoint = "/api/condition/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
export const condition_delete = async (id, headers) => {
    let endpoint = "/api/condition/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "delete",
        url: endpoint,
        headers,
    });
};
//# sourceMappingURL=condition.js.map