const db = require("../models");
const Danwei = db.danwei;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!哈哈哈哈哈"
    });
    return;
  }

  // Create a Tutorial
  const danwei = {
    name: req.body.name,
    type: req.body.type,
    remarks:req.body.remarks,
    current_process:req.body.current_process,
  };

  // Save Tutorial in the database
  Danwei.create(danwei)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Danwei."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Danwei.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Danwei."
        });
      });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Danwei.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Danwei with id=" + id
        });
      });
};


// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Danwei.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Danwei was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Danwei with id=${id}. Maybe Danwei was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Danwei with id=" + id
        });
      });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Danwei.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Danwei was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Danwei with id=${id}. Maybe Danwei was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Danwei with id=" + id
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Danwei.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Danwei were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Danwei."
          });
        });
};

// Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//   Core_firm.findAll({ where: { published: true } })
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// };

