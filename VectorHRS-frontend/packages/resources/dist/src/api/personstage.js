import axios from "axios";
export const personstage_list = async (data, headers) => {
    let endpoint = "/api/personstage/";
    return await axios({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
export const personstage_create = async (data, headers) => {
    let endpoint = "/api/personstage/";
    return await axios({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
export const personstage_read = async (id, headers) => {
    let endpoint = "/api/personstage/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "get",
        url: endpoint,
        headers,
    });
};
export const personstage_update = async (id, data, headers) => {
    let endpoint = "/api/personstage/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
export const personstage_partial_update = async (id, data, headers) => {
    let endpoint = "/api/personstage/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
export const personstage_delete = async (id, headers) => {
    let endpoint = "/api/personstage/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "delete",
        url: endpoint,
        headers,
    });
};
//# sourceMappingURL=personstage.js.map