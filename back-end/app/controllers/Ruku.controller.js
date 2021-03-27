const db = require("../models");
const Ruku = db.ruku;
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
  const ruku = {
            item_name:req.body.item_name,
            supplier: req.body.supplier,
            goods_name: req.body.goods_name,
            goods_danwei:req.body.goods_danwei,
            ruku_number:req.body.ruku_number,
            before_stock:req.body.before_stock,
            after_stock:req.body.after_stock,
            before_supply:req.body.before_supply,
            after_supply:req.body.after_supply,
            current_process:req.body.current_process
  };

  // Save pingji in the database
  Ruku.create(ruku)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Ruku."
      });
    });
};

// Retrieve all pingji from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Ruku.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Ruku."
        });
      });
};

// Find a single pingji with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Ruku.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Ruku with id=" + id
        });
      });
};


// Update a pingji by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Ruku.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Ruku was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Ruku with id=${id}. Maybe Ruku was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Ruku with id=" + id
        });
      });
};

// Delete a pingji with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Ruku.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Ruku was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Ruku with id=${id}. Maybe Ruku was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Ruku with id=" + id
        });
      });
};
