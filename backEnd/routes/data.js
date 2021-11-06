let express = require("express");
let router = express.Router();

const db = require("../app/models");
const Data = db.data;
const Op = db.Sequelize.Op;

router.get("/", function (req, res, next) {
  Data.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error encountered while fetching resource.",
      });
    });
});

module.exports = router;
