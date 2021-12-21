import axios from "axios";
export const staff_list = async (data, headers) => {
    let endpoint = "/api/staff/";
    return await axios({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
export const staff_create = async (data, headers) => {
    let endpoint = "/api/staff/";
    return await axios({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
export const staff_read = async (id, headers) => {
    let endpoint = "/api/staff/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "get",
        url: endpoint,
        headers,
    });
};
export const staff_update = async (id, data, headers) => {
    let endpoint = "/api/staff/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
export const staff_partial_update = async (id, data, headers) => {
    let endpoint = "/api/staff/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
export const staff_delete = async (id, headers) => {
    let endpoint = "/api/staff/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "delete",
        url: endpoint,
        headers,
    });
};
//# sourceMappingURL=staff.js.map