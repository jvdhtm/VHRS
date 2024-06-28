"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffFunctionsResource = void 0;
var mockType = function () {
    return;
};
exports.StaffFunctionsResource = {
    baseUrl: "/stafffunctions/",
    relatedurls: ["/stafffunctions/", "/stafffunctions/{id}/"],
    name: "StaffFunctionsResource",
    type: mockType,
    fields: {
        id: { title: "ID", type: "integer", readOnly: true },
        function: {
            title: "Function",
            type: "integer",
            "x-vhrs-relatedResource": "staff_api.Function",
        },
        staff: {
            title: "Staff",
            type: "integer",
            "x-vhrs-relatedResource": "staff_api.Staff",
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
    required: ["function", "staff", "status"],
};
//# sourceMappingURL=StaffFunctions.js.map