import axios from "axios";
export const phone_list = async (data, headers) => {
    let endpoint = "/api/phone/";
    return await axios({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
export const phone_create = async (data, headers) => {
    let endpoint = "/api/phone/";
    return await axios({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
export const phone_read = async (id, headers) => {
    let endpoint = "/api/phone/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "get",
        url: endpoint,
        headers,
    });
};
export const phone_update = async (id, data, headers) => {
    let endpoint = "/api/phone/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
export const phone_partial_update = async (id, data, headers) => {
    let endpoint = "/api/phone/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
export const phone_delete = async (id, headers) => {
    let endpoint = "/api/phone/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "delete",
        url: endpoint,
        headers,
    });
};
//# sourceMappingURL=phone.js.map