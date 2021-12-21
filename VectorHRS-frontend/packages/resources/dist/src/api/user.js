import axios from "axios";
export const user_list = async (data, headers) => {
    let endpoint = "/api/user/";
    return await axios({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
export const user_create = async (data, headers) => {
    let endpoint = "/api/user/";
    return await axios({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
export const user_read = async (id, headers) => {
    let endpoint = "/api/user/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "get",
        url: endpoint,
        headers,
    });
};
export const user_update = async (id, data, headers) => {
    let endpoint = "/api/user/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
export const user_partial_update = async (id, data, headers) => {
    let endpoint = "/api/user/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
export const user_delete = async (id, headers) => {
    let endpoint = "/api/user/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "delete",
        url: endpoint,
        headers,
    });
};
//# sourceMappingURL=user.js.map