const db = require("../models");
const Jindu = db.jindu;
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
  const jindu = {
        item_name:req.body.item_name,
        before_jindu: req.body.before_jindu,
        after_jindu: req.body.after_jindu ,
        photo:req.body.photo,
        current_process:req.body.current_process
  };

  // Save pingji in the database
  Jindu.create(jindu)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Jindu."
      });
    });
};

// Retrieve all pingji from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Jindu.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Jindu."
        });
      });
};

// Find a single pingji with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Jindu.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Jindu with id=" + id
        });
      });
};


// Update a pingji by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Jindu.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Jindu was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Jindu with id=${id}. Maybe Jindu was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Jindu with id=" + id
        });
      });
};

// Delete a pingji with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Jindu.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Jindu was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Jindu with id=${id}. Maybe Jindu was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Jindu with id=" + id
        });
      });
};
