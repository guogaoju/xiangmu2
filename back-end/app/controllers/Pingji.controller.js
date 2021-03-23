const db = require("../models");
const Pingji = db.pingji;
const Op = db.Sequelize.Op;

// Create and Save a new pingji
exports.create = (req, res) => {
  // Validate request
  if (!req.body.supplier_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a pingji
  const pingji = {
    id:req.body.id,
    supplier_name:req.body.supplier_name,
    year:req.body.year,
    // score1:req.body.score1,
    // score2:req.body.score2,
    // score3:req.body.score3,
    // score4:req.body.score4,
    // score5:req.body.score5,
    quarter:req.body.quarter,
    quantify_points:req.body.quantify_points,
    qualitative_points:req.body.qualitative_points,
    total_points:req.body.total_points,
    current_process:req.body.current_process,
  };

  // Save pingji in the database
  Pingji.create(pingji)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the pingji."
      });
    });
};

// Retrieve all pingji from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Pingji.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving pingji."
        });
      });
};

// Find a single pingji with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Pingji.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving pingji with id=" + id
        });
      });
};


// Update a pingji by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Pingji.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "pingji was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update pingji with id=${id}. Maybe pingji was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating pingji with id=" + id
        });
      });
};

// Delete a pingji with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Pingji.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "pingji was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete pingji with id=${id}. Maybe pingji was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete pingji with id=" + id
        });
      });
};

// Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//   Core_firm.destroy({
//         where: {},
//         truncate: false
//       })
//         .then(nums => {
//           res.send({ message: `${nums} core_firm were deleted successfully!` });
//         })
//         .catch(err => {
//           res.status(500).send({
//             message:
//               err.message || "Some error occurred while removing all core_firm."
//           });
//         });
// };

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

