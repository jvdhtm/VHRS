"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsLetterResource = void 0;
var mockType = function () {
    return;
};
exports.NewsLetterResource = {
    baseUrl: "/newsletter/",
    relatedurls: ["/newsletter/", "/newsletter/{id}/"],
    name: "NewsLetterResource",
    type: mockType,
    fields: {
        id: { title: "ID", type: "integer", readOnly: true },
        name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
        description: {
            title: "Description",
            type: "string",
            maxLength: 500,
            "x-nullable": true,
        },
        html: { title: "Html", type: "string", "x-nullable": true },
        autor: {
            title: "Autor",
            type: "integer",
            "x-vhrs-relatedResource": "people.Person",
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
    required: ["autor", "status"],
};
//# sourceMappingURL=NewsLetter.js.map