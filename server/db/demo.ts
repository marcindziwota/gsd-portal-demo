module.exports = function(client) {

    client.query('SELECT * FROM Account', function(error, data) {
      if (error !== null) {
          client.query(`DROP TABLE IF EXISTS Account`);

          client.query(`CREATE TABLE Account (
            id SERIAL NOT NULL,
            sfid CHARACTER VARYING(18) UNIQUE,
            name CHARACTER VARYING(80),
            GSD_HceFullBillingAddress__c CHARACTER VARYING(256),
            gsd_hcetype__c CHARACTER VARYING(20)
           );`);

           client.query(`INSERT INTO Account (sfid, name, GSD_HceFullBillingAddress__c, gsd_hcetype__c) VALUES ('sfid1', 'Berlin Hospital very long name extended', 	'Warschauer St 7,<br>31-155, Berlin,<br>Germany', 'HCO');`);
           client.query(`INSERT INTO Account (sfid, name, GSD_HceFullBillingAddress__c, gsd_hcetype__c) VALUES ('sfid2', 'London Hospital', 'Warsaw St 7,<br>31-155, London,<br>UK', 'PO');`);
           client.query(`INSERT INTO Account (sfid, name, GSD_HceFullBillingAddress__c, gsd_hcetype__c) VALUES ('sfid3', 'Warsaw Hospital', 'Al. Jerozolimskie 72,<br>31-155, Warsaw,<br>Poland', 'HCO');`);
           client.query(`INSERT INTO Account (sfid, name, GSD_HceFullBillingAddress__c, gsd_hcetype__c) VALUES ('sfid4', 'Paris Hospital', 'Champs Eysee 90,<br>31-155, Paris,<br>France', 'HCO');`);
           client.query(`INSERT INTO Account (sfid, name, GSD_HceFullBillingAddress__c, gsd_hcetype__c) VALUES ('sfid5', 'Cracow Hospital', 'Parkowa 34,<br>00-155, Cracow,<br>Poland', 'PO');`);
      }
    });

    client.query('SELECT * FROM GSD_Request__c', function(error, data) {
      if (error !== null) {
          client.query(`DROP TABLE IF EXISTS GSD_Request__c`);

          client.query(`CREATE TABLE GSD_Request__c (
            id SERIAL NOT NULL,
            sfid CHARACTER VARYING(18) UNIQUE,
            RequestTitle__c CHARACTER VARYING(80),
            TechnicalStatus__c CHARACTER VARYING(80),
            PublicDescription__c CHARACTER VARYING(80),
            HealthcareEntity__c CHARACTER VARYING(18) REFERENCES Account(sfid)
           );`);
      }
    });
};