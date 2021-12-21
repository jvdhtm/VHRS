import axios from "axios";
export const app_list = async (data, headers) => {
    let endpoint = "/api/app/";
    return await axios({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
export const app_create = async (data, headers) => {
    let endpoint = "/api/app/";
    return await axios({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
export const app_read = async (id, headers) => {
    let endpoint = "/api/app/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "get",
        url: endpoint,
        headers,
    });
};
export const app_update = async (id, data, headers) => {
    let endpoint = "/api/app/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
export const app_partial_update = async (id, data, headers) => {
    let endpoint = "/api/app/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
export const app_delete = async (id, headers) => {
    let endpoint = "/api/app/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "delete",
        url: endpoint,
        headers,
    });
};
//# sourceMappingURL=app.js.map