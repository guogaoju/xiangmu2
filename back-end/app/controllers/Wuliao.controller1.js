const db = require("../models");
const Wuliao1 = db.wuliao1;
const Op = db.Sequelize.Op;
const fs = require("fs");


// exports.uploadFiles = async (req, res) => {
//   try {
//     console.log(req.file);
//     if (req.file == undefined) {
//       return res.send(`You must select a file.`);
//     }
// Wuliao.create({
//       avatar:req.file.avatar,
//     }).then((image) => {
//       fs.writeFileSync(
//         __basedir + "/resources/static/assets/uploads/"
//       );

//       return res.send(`File has been uploaded.`);
//     });
//   } catch (error) {
//     console.log(error);
//     return res.send(`Error when trying upload images: ${error}`);
//   }
// };
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
  const wuliao1 = {
    name: req.body.name,
    Specification:req.body.Specification,
    wuliaotype: req.body.wuliaotype,
    danwei:req.body.danwei,
    avatar:req.body.avatar,
    remarks:req.body.remarks,
    current_process:req.body.current_process,
  };

  // Save Tutorial in the database
  Wuliao1.create(wuliao1)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Wuliao."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;
  
    Wuliao1.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Wuliao."
        });
      });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Wuliao1.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Wuliao with id=" + id
        });
      });
};


// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Wuliao1.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Wuliao was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Wuliao with id=${id}. Maybe Wuliao was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Wuliao with id=" + id
        });
      });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Wuliao1.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Wuliao was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Wuliao with id=${id}. Maybe Wuliao was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Wuliao with id=" + id
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Wuliao1.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Wuliao were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Wuliao."
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

