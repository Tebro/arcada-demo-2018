import express from 'express';
import { Method, Route } from "./types";
import { createHandler, addRoutesToReceiver } from "./util";
import { FrontpageController } from "./features/frontpage";
import { VisitorDatabaseImpl } from "./database/VisitorDatabaseImpl";

const app = express();
const port = process.env.PORT || 3000;

const dbUrl = process.env.DATABASE_URL || 'postgres://postgres:postgresd@localhost:5432/postgres';

const db = new VisitorDatabaseImpl(dbUrl);

const routes: Route[] = [
  {
    method: Method.GET,
    path: '/',
    controller: new FrontpageController(db)
  }
];

try {
  addRoutesToReceiver(app, routes, createHandler);
} catch (e) {
  console.warn(`Unable to configure routes: ${e}`);
}


app.listen(port, () => console.log(`App starting on port: ${port}`));
