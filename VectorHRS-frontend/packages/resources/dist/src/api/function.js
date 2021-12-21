import axios from "axios";
export const function_list = async (data, headers) => {
    let endpoint = "/api/function/";
    return await axios({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
export const function_create = async (data, headers) => {
    let endpoint = "/api/function/";
    return await axios({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
export const function_read = async (id, headers) => {
    let endpoint = "/api/function/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "get",
        url: endpoint,
        headers,
    });
};
export const function_update = async (id, data, headers) => {
    let endpoint = "/api/function/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
export const function_partial_update = async (id, data, headers) => {
    let endpoint = "/api/function/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
export const function_delete = async (id, headers) => {
    let endpoint = "/api/function/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "delete",
        url: endpoint,
        headers,
    });
};
//# sourceMappingURL=function.js.map