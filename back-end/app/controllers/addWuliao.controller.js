const db = require("../models");
const Addwuliao = db.addwuliao;
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
  const addwuliao = {
        name: req.body.name,
        wname:req.body.wname,
        shu : req.body.shu ,
        shu1:req.body.shu1,
        shu2:req.body.shu2,
        output_value:req.body.output_value,
        wancheng:req.body.wancheng,
        stock:req.body.stock,
  };

  // Save pingji in the database
  Addwuliao.create(addwuliao)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Addwuliao."
      });
    });
};

// Retrieve all pingji from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Addwuliao.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Addwuliao."
        });
      });
};

// Find a single pingji with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Addwuliao.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving AddWuliao with id=" + id
        });
      });
};



