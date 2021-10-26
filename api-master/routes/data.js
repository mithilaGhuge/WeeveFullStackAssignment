var express = require('express');
var router = express.Router();

const db = require("../app/models");
const Data = db.data;
const Op = db.Sequelize.Op;

/* GET users listing. */
router.post("/", function (req, res, next) {

  // Validate request
  if (!req.body.serviceName) {
    res.status(400).send({
      message: "Name can not be empty!"
    });
    return;
  }
  if (!req.body.createdBy) {
    res.status(400).send({
      message: "Created By can not be empty!"
    });
    return;
  }


  // Create a data
  const record = {
    serviceName: req.body.serviceName,
    createdBy: req.body.createdBy
  };

  // Save data in the database
  Data.create(record)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(400).send({
        message:
          err.message || "Error encountered while creating resource."
      });
    });
});


router.get("/", function (req, res, next) {
  Data.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error encountered while fetching resource."
      });
    });

});

module.exports = router;
