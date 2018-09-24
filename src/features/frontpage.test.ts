import { describe, it } from 'mocha';
import { expect } from 'chai';
import { VisitorDatabase } from "../types";
import { FrontpageController } from "./frontpage";


class VisitorDatabaseMockImpl implements VisitorDatabase {
  private numVisitors = 0;

  public async addVisitor(data: any) {
    this.numVisitors += 1;
  }

  public async countVisitors() {
    return this.numVisitors;
  }
}

describe('FrontpageController', () => {
  it('should return the number of visits as part of a string', async () => {
    const db = new VisitorDatabaseMockImpl(); 
    const ctrl = new FrontpageController(db);

    await ctrl.prepare(null);
    const res = await ctrl.render();

    expect(res).to.contain('1');
  });
});
