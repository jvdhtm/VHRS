"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.answersResource = void 0;
var mockType = function () {
    return;
};
exports.answersResource = {
    baseUrl: "/answers/",
    relatedurls: ["/answers/", "/answers/{id}/"],
    name: "answersResource",
    type: mockType,
    fields: {
        id: { title: "ID", type: "integer", readOnly: true },
        name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
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
        question: {
            title: "Question",
            type: "integer",
            "x-vhrs-relatedResource": "questions.Question",
        },
    },
    required: ["autor", "status", "question"],
};
//# sourceMappingURL=answers.js.map