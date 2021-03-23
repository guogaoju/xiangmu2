const db = require("../models");
const WuliaoType = db.wuliaotype;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const wuliaotype = {
    id:req.body.id,
    name: req.body.name,
    type: req.body.type,
    remarks:req.body.remarks,
    current_process:req.body.current_process,
  };

  // Save Tutorial in the database
  WuliaoType.create(wuliaotype)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the WuliaoType."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    WuliaoType.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving WuliaoType."
        });
      });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    WuliaoType.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving WuliaoType with id=" + id
        });
      });
};


// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    WuliaoType.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "WuliaoType was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update WuliaoType with id=${id}. Maybe WuliaoType was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating WuliaoType with id=" + id
        });
      });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    WuliaoType.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "WuliaoType was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete WuliaoType with id=${id}. Maybe WuliaoType was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete WuliaoType with id=" + id
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    WuliaoType.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} WuliaoType were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all WuliaoType."
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

