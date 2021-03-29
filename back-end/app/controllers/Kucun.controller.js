const db = require("../models");
const Kucun = db.kucun;
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
  const kucun = {
        item_name:req.body.item_name,
        goods_type: req.body.goods_type,
        goods_danwei: req.body.goods_danwei ,
        before_stock:req.body.before_stock,
        after_stock:req.body.after_stock,
        current_process:req.body.current_process
  };

  // Save pingji in the database
  Kucun.create(kucun)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Kucun."
      });
    });
};

// Retrieve all pingji from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Kucun.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Kucun."
        });
      });
};

// Find a single pingji with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Kucun.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Kucun with id=" + id
        });
      });
};


// Update a pingji by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Kucun.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Kucun was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Kucun with id=${id}. Maybe Kucun was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Kucun with id=" + id
        });
      });
};

// Delete a pingji with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Kucun.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Kucun was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Kucun with id=${id}. Maybe Kucun was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Kucun with id=" + id
        });
      });
};
