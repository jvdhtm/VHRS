import axios from "axios";
export const person_list = async (data, headers) => {
    let endpoint = "/api/person/";
    return await axios({
        method: "get",
        url: endpoint,
        data,
        headers,
    });
};
export const person_create = async (data, headers) => {
    let endpoint = "/api/person/";
    return await axios({
        method: "post",
        url: endpoint,
        data,
        headers,
    });
};
export const person_read = async (id, headers) => {
    let endpoint = "/api/person/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "get",
        url: endpoint,
        headers,
    });
};
export const person_update = async (id, data, headers) => {
    let endpoint = "/api/person/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "put",
        url: endpoint,
        data,
        headers,
    });
};
export const person_partial_update = async (id, data, headers) => {
    let endpoint = "/api/person/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "patch",
        url: endpoint,
        data,
        headers,
    });
};
export const person_delete = async (id, headers) => {
    let endpoint = "/api/person/{id}/";
    endpoint = endpoint.replace("{id}", id.toString());
    return await axios({
        method: "delete",
        url: endpoint,
        headers,
    });
};
//# sourceMappingURL=person.js.map