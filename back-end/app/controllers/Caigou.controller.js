const db = require("../models");
const Caigou = db.caigou;
const Op = db.Sequelize.Op;

// Create and Save a new pingji
exports.create = (req, res) => {
  // Validate request
  if (!req.body.qiye_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a pingji
  const caigou = {
        qiye_name:req.body.qiye_name,
        item_name:req.body.item_name,
        money: req.body.money,
        totalmoney : req.body.totalmoney ,
        statement:req.body.statement,
        delivery_note:req.body.delivery_note,
        bill:req.body.bill,
        money1:req.body.money1,
        money2:req.body.money2,
        money3:req.body.money3,
        money4:req.body.money4,
        current_process:req.body.current_process
  };

  // Save pingji in the database
  Caigou.create(caigou)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Caigou."
      });
    });
};

// Retrieve all pingji from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Caigou.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Caigou."
        });
      });
};

// Find a single pingji with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Caigou.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Caigou with id=" + id
        });
      });
};


// Update a pingji by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Caigou.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Caigou was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Caigou with id=${id}. Maybe Caigou was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Caigou with id=" + id
        });
      });
};

// Delete a pingji with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Caigou.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Caigou was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Caigou with id=${id}. Maybe Caigou was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Caigou with id=" + id
        });
      });
};
