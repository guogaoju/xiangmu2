const db = require("../models");
const Addjinduwuliao = db.addjinduwuliao;
const Op = db.Sequelize.Op;

// Create and Save a new pingji
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a pingji
  const addjinduwuliao = {
        name: req.body.name,
        wname:req.body.wname,
        before_stock : req.body.before_stock ,
        consume:req.body.consume,
        after_stock:req.body.after_stock,
  };

  // Save pingji in the database
  Addjinduwuliao.create(addjinduwuliao)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Addjinduwuliao."
      });
    });
};

// Retrieve all pingji from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Addjinduwuliao.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Addjinduwuliao."
        });
      });
};

// Find a single pingji with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Addjinduwuliao.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Addjinduwuliao with id=" + id
        });
      });
};



