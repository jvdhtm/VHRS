import axios from "axios";
export const comments_list = async (data, headers) => {
    let endpoint = "/api/comments/";
    return await axios({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
export const comments_create = async (data, headers) => {
    let endpoint = "/api/comments/";
    return await axios({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
export const comments_read = async (id, headers) => {
    let endpoint = "/api/comments/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "get",
        url: endpoint,
        headers,
    });
};
export const comments_update = async (id, data, headers) => {
    let endpoint = "/api/comments/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
export const comments_partial_update = async (id, data, headers) => {
    let endpoint = "/api/comments/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
export const comments_delete = async (id, headers) => {
    let endpoint = "/api/comments/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "delete",
        url: endpoint,
        headers,
    });
};
//# sourceMappingURL=comments.js.map