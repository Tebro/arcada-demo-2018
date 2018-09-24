import { Request } from "express";
import { Controller, VisitorDatabase } from "../../types";

export class VisitorCountApiController implements Controller {

  private db: VisitorDatabase;

  constructor(db: VisitorDatabase) {
    this.db = db;
  }

  public async prepare(req: Request | null): Promise<void> {
    return;
  }

  public async render(): Promise<string> {
    const count = await this.db.countVisitors();
    
    return JSON.stringify({
      count 
    });
  }
}
