"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addContextToActions = exports.addContext = void 0;
/**
 * Utility function to add context to components or handlers.
 * @param components - Components or handlers to which context should be added.
 * @param resource - The resource object.
 * @returns Components or handlers wrapped with context.
 */
var addContext = function (components, resource) {
    var componentsWithContext = {};
    if (components) {
        var _loop_1 = function (methodName) {
            if (Object.prototype.hasOwnProperty.call(components, methodName)) {
                var method_1 = components[methodName];
                if (method_1) {
                    componentsWithContext[methodName] = function (data, context) {
                        if (context)
                            return method_1(data, context);
                        else
                            return method_1(data, { resource: resource, props: {} });
                    };
                }
            }
        };
        for (var methodName in components) {
            _loop_1(methodName);
        }
    }
    return componentsWithContext;
};
exports.addContext = addContext;
var addContextToActions = function (actions, resource) {
    if (!actions)
        return [];
    return actions.map(function (actionFn) {
        var action = function (data, context) {
            if (context)
                return actionFn(data, context);
            else
                return actionFn(data, { resource: resource, props: {} });
        };
        return action;
    });
};
exports.addContextToActions = addContextToActions;
//# sourceMappingURL=addContext.js.map