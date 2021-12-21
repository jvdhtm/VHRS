import axios from "axios";
export const staffstage_list = async (data, headers) => {
    let endpoint = "/api/staffstage/";
    return await axios({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
export const staffstage_create = async (data, headers) => {
    let endpoint = "/api/staffstage/";
    return await axios({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
export const staffstage_read = async (id, headers) => {
    let endpoint = "/api/staffstage/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "get",
        url: endpoint,
        headers,
    });
};
export const staffstage_update = async (id, data, headers) => {
    let endpoint = "/api/staffstage/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
export const staffstage_partial_update = async (id, data, headers) => {
    let endpoint = "/api/staffstage/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
export const staffstage_delete = async (id, headers) => {
    let endpoint = "/api/staffstage/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "delete",
        url: endpoint,
        headers,
    });
};
//# sourceMappingURL=staffstage.js.map