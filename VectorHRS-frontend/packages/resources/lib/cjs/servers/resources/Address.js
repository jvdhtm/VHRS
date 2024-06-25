"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressResource = void 0;
var mockType = function () {
    return;
};
exports.AddressResource = {
    baseUrl: "/address/",
    relatedurls: ["/address/", "/address/{id}/"],
    name: "AddressResource",
    type: mockType,
    fields: {
        id: { title: "ID", type: "integer", readOnly: true },
        person: {
            title: "Person",
            type: "integer",
            "x-vhrs-relatedResource": "people.Person",
        },
        description: {
            title: "Description",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        address1: {
            title: "Address1",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        address2: {
            title: "Address2",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        zip: { title: "Zip", type: "string", maxLength: 10, "x-nullable": true },
        city: { title: "City", type: "string", maxLength: 100, "x-nullable": true },
        country: {
            title: "Country",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        status: {
            title: "Status",
            type: "string",
            enum: ["activated", "deactivated", "pending", "confirmed", "archived"],
        },
        created_date_time: {
            title: "Created date time",
            type: "string",
            format: "date-time",
        },
    },
    required: ["person", "status"],
};
//# sourceMappingURL=Address.js.map