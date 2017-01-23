import { Router, Response, Request } from 'express';
import { myConfig }        from '../db/db.config';
var pg = require('pg');

const requestRouter: Router = Router();

requestRouter.post('/', (request: Request, response: Response) => {

var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/dreamhouse';
  var retVal = [];

  var client = new pg.Client(connectionString);
  client.connect();
 
    client.query(`INSERT INTO ' + myConfig.schema + 'GSD_Request__c (HealthcareEntity__c, RequestTitle__c, PublicDescription__c, TechnicalStatus__c) VALUES ($1, $2, $3, $4);`, 
                    [request.body.sfid, request.body.title, request.body.description, 'Draft'], function(error, data) {
      if (error !== null) {
          console.log('error');
          console.log(error);
      }
      else {
          response.json({
              text: 'success'
            });
      }
    });

     

});

export { requestRouter }
