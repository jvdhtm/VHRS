import axios from "axios";
export const stafflog_list = async (data, headers) => {
    let endpoint = "/api/stafflog/";
    return await axios({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
export const stafflog_create = async (data, headers) => {
    let endpoint = "/api/stafflog/";
    return await axios({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
export const stafflog_read = async (id, headers) => {
    let endpoint = "/api/stafflog/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "get",
        url: endpoint,
        headers,
    });
};
export const stafflog_update = async (id, data, headers) => {
    let endpoint = "/api/stafflog/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
export const stafflog_partial_update = async (id, data, headers) => {
    let endpoint = "/api/stafflog/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
export const stafflog_delete = async (id, headers) => {
    let endpoint = "/api/stafflog/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "delete",
        url: endpoint,
        headers,
    });
};
//# sourceMappingURL=stafflog.js.map