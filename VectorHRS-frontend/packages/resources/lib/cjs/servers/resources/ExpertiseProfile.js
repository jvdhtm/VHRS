"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpertiseProfileResource = void 0;
var mockType = function () {
    return;
};
exports.ExpertiseProfileResource = {
    baseUrl: "/expertiseprofile/",
    relatedurls: ["/expertiseprofile/", "/expertiseprofile/{id}/"],
    name: "ExpertiseProfileResource",
    type: mockType,
    fields: {
        id: { title: "ID", type: "integer", readOnly: true },
        name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
        description: {
            title: "Description",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        person: {
            title: "Person",
            type: "integer",
            "x-vhrs-relatedResource": "people.Person",
        },
        expertise: {
            title: "Expertise",
            type: "integer",
            "x-vhrs-relatedResource": "people.Expertise",
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
    required: ["person", "expertise", "status"],
};
//# sourceMappingURL=ExpertiseProfile.js.map