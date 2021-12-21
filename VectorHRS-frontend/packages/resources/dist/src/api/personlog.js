import axios from "axios";
export const personlog_list = async (data, headers) => {
    let endpoint = "/api/personlog/";
    return await axios({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
export const personlog_create = async (data, headers) => {
    let endpoint = "/api/personlog/";
    return await axios({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
export const personlog_read = async (id, headers) => {
    let endpoint = "/api/personlog/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "get",
        url: endpoint,
        headers,
    });
};
export const personlog_update = async (id, data, headers) => {
    let endpoint = "/api/personlog/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
export const personlog_partial_update = async (id, data, headers) => {
    let endpoint = "/api/personlog/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
export const personlog_delete = async (id, headers) => {
    let endpoint = "/api/personlog/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "delete",
        url: endpoint,
        headers,
    });
};
//# sourceMappingURL=personlog.js.map