import * as Knex from 'knex';
import { VisitorDatabase } from "../types";

export class VisitorDatabaseImpl implements VisitorDatabase {

  private knex: Knex;

  constructor(dbUrl: string) {
    this.knex = require('knex')({
      client: 'pg', 
      connection: process.env.DATABASE_URL || {
        database: 'postgres',
        user:     'postgres',
        password: 'postgres'
      }
    });
  }
  
  public async addVisitor(data: any) {
    await this.knex('visitors').insert({data: JSON.stringify(data)});
  }

  public async countVisitors() {
    const res = await this.knex('visitors').count('id');
    return parseInt(res[0].count, 10);
  }

}
