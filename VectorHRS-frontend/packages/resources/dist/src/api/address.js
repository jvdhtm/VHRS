import axios from "axios";
export const address_list = async (data, headers) => {
    let endpoint = "/api/address/";
    return await axios({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
export const address_create = async (data, headers) => {
    let endpoint = "/api/address/";
    return await axios({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
export const address_read = async (id, headers) => {
    let endpoint = "/api/address/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "get",
        url: endpoint,
        headers,
    });
};
export const address_update = async (id, data, headers) => {
    let endpoint = "/api/address/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
export const address_partial_update = async (id, data, headers) => {
    let endpoint = "/api/address/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
export const address_delete = async (id, headers) => {
    let endpoint = "/api/address/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "delete",
        url: endpoint,
        headers,
    });
};
//# sourceMappingURL=address.js.map