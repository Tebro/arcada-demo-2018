import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Request } from 'express';
import { RouteHandler, Route, Method, RouteReceiver, Controller, HandlerCreationHelper } from "./types";
import { addRoutesToReceiver } from "./util";


const dummyController: Controller = {
  prepare: async (req: Request | null) => {},
  render: async () => 'Dummy'
}


const testRoutes: Route[] = [
  {
    method: Method.GET,
    path: '/',
    controller: dummyController
  },
  {
    method: Method.POST,
    path: '/api',
    controller: dummyController
  }
];


class MockedReceiver implements RouteReceiver {
  public getRoutes: Map<string, RouteHandler> = new Map();
  public postRoutes: Map<string, RouteHandler> = new Map();

  public get(path: string, handler: RouteHandler) {
    this.getRoutes.set(path, handler);
  }

  public post(path: string, handler: RouteHandler) {
    this.postRoutes.set(path, handler);
  }
}

const dummyHandler: RouteHandler = (req, res) => {};
const dummyCreationHelper: HandlerCreationHelper = (ctrl) => dummyHandler;

describe('addRoutesToReceiver', () => {
  it('should map GET and POST routes correctly', () => {
    const app = new MockedReceiver();

    addRoutesToReceiver(app, testRoutes, dummyCreationHelper);
    
    expect(app.getRoutes.get('/')).to.equal(dummyHandler);
    expect(app.postRoutes.get('/api')).to.equal(dummyHandler);
  });

});

