"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppResource = void 0;
var mockType = function () {
    return;
};
exports.AppResource = {
    baseUrl: "/app/",
    relatedurls: ["/app/", "/app/{id}/"],
    name: "AppResource",
    type: mockType,
    fields: {
        id: { title: "ID", type: "integer", readOnly: true },
        title: { title: "Title", type: "string", maxLength: 30, minLength: 1 },
        pathUrl: { title: "PathUrl", type: "string", maxLength: 30, minLength: 1 },
    },
    required: ["title", "pathUrl"],
};
//# sourceMappingURL=App.js.map