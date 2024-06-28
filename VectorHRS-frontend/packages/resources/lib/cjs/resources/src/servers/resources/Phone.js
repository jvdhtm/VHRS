"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhoneResource = void 0;
var mockType = function () {
    return;
};
exports.PhoneResource = {
    baseUrl: "/phone/",
    relatedurls: ["/phone/", "/phone/{id}/"],
    name: "PhoneResource",
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
        phoneNumber: {
            title: "PhoneNumber",
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
//# sourceMappingURL=Phone.js.map