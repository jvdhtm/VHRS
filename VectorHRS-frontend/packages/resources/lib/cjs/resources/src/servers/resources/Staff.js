"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffResource = void 0;
var mockType = function () {
    return;
};
exports.StaffResource = {
    baseUrl: "/staff/",
    relatedurls: ["/staff/", "/staff/{id}/"],
    name: "StaffResource",
    type: mockType,
    fields: {
        id: { title: "ID", type: "integer", readOnly: true },
        department: {
            title: "Department",
            type: "integer",
            "x-vhrs-relatedResource": "staff_api.Department",
        },
        condition: {
            title: "Condition",
            type: "integer",
            "x-vhrs-relatedResource": "staff_api.Condition",
        },
        title: {
            title: "Title",
            type: "string",
            maxLength: 100,
            "x-nullable": true,
        },
        bossId: {
            title: "BossId",
            type: "integer",
            "x-vhrs-relatedResource": "staff_api.Staff",
            "x-nullable": true,
        },
        who: {
            title: "Who",
            type: "integer",
            "x-vhrs-relatedResource": "people.Person",
        },
        x: { title: "X", type: "number" },
        y: { title: "Y", type: "number" },
        level: { title: "Level", type: "integer" },
    },
    required: ["department", "condition", "who", "x", "y", "level"],
};
//# sourceMappingURL=Staff.js.map