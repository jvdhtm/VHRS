import {
  ResourceContext,
  Display,
  ActionPropType,
  Action,
  Colors,
} from "../types"; // Adjust imports as per your project structure

/**
 * Utility function to add context to components or handlers.
 * @param components - Components or handlers to which context should be added.
 * @param resource - The resource object.
 * @returns Components or handlers wrapped with context.
 */
export const addContext = (
  components: { [key: string]: Function } | undefined,
  resource: any
): { [key: string]: Function } => {
  const componentsWithContext: any = {};
  if (components) {
    for (const methodName in components) {
      if (Object.prototype.hasOwnProperty.call(components, methodName)) {
        const method: Function =
          components[methodName as keyof typeof components];
        if (method) {
          componentsWithContext[methodName as keyof typeof components] = (
            data: any,
            context: ResourceContext | undefined
          ) => {
            if (context) return method(data, context);
            else return method(data, { resource, props: {} });
          };
        }
      }
    }
  }
  return componentsWithContext;
};

export const addContextToActions = (
  actions: Action[] | undefined,
  resource: any
): Action[] => {
  if (!actions) return [];

  return actions.map((actionFn: Action) => {
    const action = (data?: any, context?: ResourceContext) => {
      if (context) return actionFn(data, context);
      else return actionFn(data, { resource, props: {} });
    };

    return action;
  });
};
