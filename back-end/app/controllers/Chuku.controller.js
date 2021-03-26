const db = require("../models");
const Chuku = db.chuku;
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
  const chuku = {
            item_name:req.body.item_name,
            goods_name: req.body.goods_name,
            goods_danwei:req.body.goods_danwei,
            chuku_number:req.body.chuku_number,
            before_stock:req.body.before_stock,
            after_stock:req.body.after_stock,
            current_process:req.body.current_process
  };

  // Save pingji in the database
  Chuku.create(chuku)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Chuku."
      });
    });
};

// Retrieve all pingji from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Chuku.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Chuku."
        });
      });
};

// Find a single pingji with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Chuku.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Chuku with id=" + id
        });
      });
};


// Update a pingji by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Chuku.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Chuku was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Chuku with id=${id}. Maybe Chuku was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Chuku with id=" + id
        });
      });
};

// Delete a pingji with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Chuku.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Chuku was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Chuku with id=${id}. Maybe Chuku was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Chuku with id=" + id
        });
      });
};
