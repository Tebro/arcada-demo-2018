import { Request } from 'express';
import { Controller, VisitorDatabase } from "../types";

export class FrontpageController implements Controller {

  private db: VisitorDatabase;

  constructor(db: VisitorDatabase) {
    this.db = db;
  }

  public async prepare(req: Request | null): Promise<void> {
    await this.db.addVisitor({foo: "bar"});
    return;
  }

  public async render(): Promise<string> {
    const numVisitors = await this.db.countVisitors();
    return `Hello, you are visitor number ${numVisitors}`;
  }
}
