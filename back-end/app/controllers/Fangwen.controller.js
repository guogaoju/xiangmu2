const db = require("../models");
const Fangwen = db.fangwen;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.qiye_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const fangwen = {
    id:req.body.id,
    qiye_name: req.body.qiye_name,
    visit_type:req.body.visit_type,
    visit_time: req.body.visit_time,
    contract:req.body.contract,
    remarks:req.body.remarks,
    current_process:req.body.current_process,
  };

  // Save Tutorial in the database
  Fangwen.create(fangwen)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Fangwen."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Fangwen.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Fangwen."
        });
      });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Fangwen.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Fangwen with id=" + id
        });
      });
};


// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Fangwen.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Fangwen was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Fangwen with id=${id}. Maybe Fangwen was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Fangwen with id=" + id
        });
      });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Fangwen.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Fangwen was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Fangwen with id=${id}. Maybe Fangwen was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Fangwen with id=" + id
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Fangwen.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Fangwen were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Fangwen."
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

