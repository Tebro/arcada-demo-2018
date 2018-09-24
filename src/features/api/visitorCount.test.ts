import { describe, it } from 'mocha';
import { expect } from 'chai';
import { VisitorDatabaseMockImpl } from "../frontpage.test";
import { VisitorCountApiController } from "./visitorCount";

describe('VisitorCountApiController', () => {
  it('should return the right number of visitors', async () => {
    const db = new VisitorDatabaseMockImpl(); 
    const ctrl = new VisitorCountApiController(db); 

    const res = await ctrl.render();

    expect(JSON.parse(res).count).to.equal(0);
  });
});
