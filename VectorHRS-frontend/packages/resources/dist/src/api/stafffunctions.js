import axios from "axios";
export const stafffunctions_list = async (data, headers) => {
    let endpoint = "/api/stafffunctions/";
    return await axios({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
export const stafffunctions_create = async (data, headers) => {
    let endpoint = "/api/stafffunctions/";
    return await axios({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
export const stafffunctions_read = async (id, headers) => {
    let endpoint = "/api/stafffunctions/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "get",
        url: endpoint,
        headers,
    });
};
export const stafffunctions_update = async (id, data, headers) => {
    let endpoint = "/api/stafffunctions/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
export const stafffunctions_partial_update = async (id, data, headers) => {
    let endpoint = "/api/stafffunctions/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
export const stafffunctions_delete = async (id, headers) => {
    let endpoint = "/api/stafffunctions/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "delete",
        url: endpoint,
        headers,
    });
};
//# sourceMappingURL=stafffunctions.js.map