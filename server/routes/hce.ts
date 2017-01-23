import { Router, Response, Request } from "express";
import { myConfig }        from '../db/db.config';
var pg = require('pg');

const hceRouter: Router = Router();

hceRouter.get("/", (request: Request, response: Response) => {

 pg.client = myConfig.connection;

    pg.client.query('SELECT * FROM ' + myConfig.schema + 'Account', function(error, data) {
      if (error !== null) {
          console.log(error);
      }
      else {
          response.json(data.rows);
      }
    });
});

export { hceRouter };
