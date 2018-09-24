import { RouteReceiver, Route, HandlerCreationHelper } from "./types";

export const addRoutesToReceiver = (receiver: RouteReceiver, routes: Route[], creator: HandlerCreationHelper) =>  {
  for (const route of routes) {
    if (receiver[route.method]) {
      receiver[route.method](route.path, creator(route.controller));
    } else {
      throw new Error(`Invalid route method for route: ${route.path}`);
    }
  }
}

export const createHandler: HandlerCreationHelper = (view) => {
  return async (req, res) => {
    await view.prepare(req);
    res.send(await view.render());
  }
}
