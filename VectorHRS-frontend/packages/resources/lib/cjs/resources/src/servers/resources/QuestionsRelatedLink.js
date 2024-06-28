"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionsRelatedLinkResource = void 0;
var mockType = function () {
    return;
};
exports.QuestionsRelatedLinkResource = {
    baseUrl: "/questionsrelatedlink/",
    relatedurls: ["/questionsrelatedlink/", "/questionsrelatedlink/{id}/"],
    name: "QuestionsRelatedLinkResource",
    type: mockType,
    fields: {
        id: { title: "ID", type: "integer", readOnly: true },
        question: {
            title: "Question",
            type: "integer",
            "x-vhrs-relatedResource": "questions.Question",
        },
        name: { title: "Name", type: "string", maxLength: 100, "x-nullable": true },
        created_date_time: {
            title: "Created date time",
            type: "string",
            format: "date-time",
        },
    },
    required: ["question"],
};
//# sourceMappingURL=QuestionsRelatedLink.js.map