import axios from "axios";
export const department_list = async (data, headers) => {
    let endpoint = "/api/department/";
    return await axios({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
export const department_create = async (data, headers) => {
    let endpoint = "/api/department/";
    return await axios({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
export const department_read = async (id, headers) => {
    let endpoint = "/api/department/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "get",
        url: endpoint,
        headers,
    });
};
export const department_update = async (id, data, headers) => {
    let endpoint = "/api/department/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
export const department_partial_update = async (id, data, headers) => {
    let endpoint = "/api/department/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
export const department_delete = async (id, headers) => {
    let endpoint = "/api/department/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "delete",
        url: endpoint,
        headers,
    });
};
//# sourceMappingURL=department.js.map