"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConditionResource = void 0;
var mockType = function () {
    return;
};
exports.ConditionResource = {
    baseUrl: "/condition/",
    relatedurls: ["/condition/", "/condition/{id}/"],
    name: "ConditionResource",
    type: mockType,
    fields: {
        id: { title: "ID", type: "integer", readOnly: true },
        severity: {
            title: "Severity",
            type: "string",
            enum: ["small", "mild", "sever"],
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
    required: ["severity", "status"],
};
//# sourceMappingURL=Condition.js.map