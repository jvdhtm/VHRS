import axios from "axios";
export const expertiseprofile_list = async (data, headers) => {
    let endpoint = "/api/expertiseprofile/";
    return await axios({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
export const expertiseprofile_create = async (data, headers) => {
    let endpoint = "/api/expertiseprofile/";
    return await axios({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
export const expertiseprofile_read = async (id, headers) => {
    let endpoint = "/api/expertiseprofile/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "get",
        url: endpoint,
        headers,
    });
};
export const expertiseprofile_update = async (id, data, headers) => {
    let endpoint = "/api/expertiseprofile/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
export const expertiseprofile_partial_update = async (id, data, headers) => {
    let endpoint = "/api/expertiseprofile/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
export const expertiseprofile_delete = async (id, headers) => {
    let endpoint = "/api/expertiseprofile/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "delete",
        url: endpoint,
        headers,
    });
};
//# sourceMappingURL=expertiseprofile.js.map