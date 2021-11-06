# WeeveFullStack_Task_F001
***

## Prerequisite  :
 1. mySql
 2. Nodejs

## To run the project :
### Database
******
run the following query to create schema name `weevedatasource`

``CREATE DATABASE `weevedatasource` ``

To populate table run backend which creates table `data_services`, now run the following query:

```
INSERT INTO `weevedatasource`.`data_services`
(`id`,
`serviceName`,
`createdBy`,
`created`,
`modified`)
VALUES
(1,'PREDECTIVE MAINTENANCE','Employee A',curdate(), Null),
(2,'PAY-PER-USE','Employee A',curdate(),Null),
(3,'SENSOR TESTING','Employee A',curdate(),Null),
(4,'MONITORING','Employee A',curdate(),Null),
(5,'WAREHOUSE MANAGEMENT','Employee A',curdate(),Null),
(6,'DATA COLLECTION','Employee A',curdate(),Null),
(7,'DATA COLLECTION INHOUS','Employee A',curdate(),Null),
(8,'DATA COLLECTION 2','Employee A',curdate(),Null),
(9,'SENSOR TESTING','Employee A',curdate(),Null)
```

### Backend:
***
Change USER from file [backEnd/app/config/db.config.js](https://github.com/mithilaGhuge/WeeveFullStackAssignment/blob/main/backEnd/app/config/db.config.js#L3)

Change PASSWORD from file [backEnd/app/config/db.config.js](https://github.com/mithilaGhuge/WeeveFullStackAssignment/blob/main/backEnd/app/config/db.config.js#L4)
```
cd .\backEnd\
npm install
npm start
```

### Frontend
***
```
cd .\frontEnd\weeve-app\ 
npm install
npm start
```
