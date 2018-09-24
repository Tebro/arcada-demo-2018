import { Request, Response } from 'express';

export type RouteHandler = (req: Request, res: Response) => void;

export type HandlerCreationHelper = (ctrl: Controller) => RouteHandler;

export enum Method {
  GET = 'get',
  POST = 'post',
}

export interface Route {
  method: Method;
  path: string;
  controller: Controller;
}

export interface RouteReceiver {
  get: (path: string, handler: RouteHandler) => void; 
  post: (path: string, handler: RouteHandler) => void;
}

export interface Controller {
  prepare: (req: Request | null) => Promise<void>;
  render: () => Promise<string>;
}

export interface VisitorDatabase {
  addVisitor: (data: any) => Promise<void>;
  countVisitors: () => Promise<number>;
}

