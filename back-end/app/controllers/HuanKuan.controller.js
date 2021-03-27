const db = require("../models");
const HuanKuan = db.huankuan;
const Op = db.Sequelize.Op;

// Create and Save a new pingji
exports.create = (req, res) => {
  // Validate request
  if (!req.body.item_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a pingji
  const huankuan = {
        item_name:req.body.item_name,
        total_quota: req.body.total_quota,
        money: req.body.money ,
        huan_money:req.body.huan_money,
        huan_money1:req.body.huan_money1,
        huan_stream:req.body.huan_stream,
        current_process:req.body.current_process
  };

  // Save pingji in the database
  HuanKuan.create(huankuan)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the HuanKuan."
      });
    });
};

// Retrieve all pingji from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    HuanKuan.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving HuanKuan."
        });
      });
};

// Find a single pingji with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    HuanKuan.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving HuanKuan with id=" + id
        });
      });
};


// Update a pingji by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    HuanKuan.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "HuanKuan was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update HuanKuan with id=${id}. Maybe HuanKuan was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating HuanKuan with id=" + id
        });
      });
};

// Delete a pingji with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    HuanKuan.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "HuanKuan was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete HuanKuan with id=${id}. Maybe HuanKuan was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete HuanKuan with id=" + id
        });
      });
};
