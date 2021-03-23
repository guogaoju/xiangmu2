const db = require("../models");
const Qiye = db.qiye;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.register_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const qiye = {
    id:req.body.id,
    register_name: req.body.register_name,
    introduction:req.body.introduction,
    trade: req.body.trade,
    credit_code:req.body.credit_code,
    juridical_person:req.body.juridical_person,
    register_money:req.body.register_money,
    hexinqiye:req.body.hexinqiye,
    address:req.body.address,
    business_term:req.body.business_term,
    business_scope:req.body.business_scope,
    post_code:req.body.post_code,
    phone:req.body.phone,
    email:req.body.email,
    fax:req.body.fax,
    account_type:req.body.account_type,
    bank_name:req.body.bank_name,
    bank_card:req.body.bank_card,
    create_time:req.body.create_time,
    current_process:req.body.current_process,
  };

  // Save Tutorial in the database
  Qiye.create(qiye)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the qiye."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Qiye.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Qiye."
        });
      });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Qiye.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Qiye with id=" + id
        });
      });
};


// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Qiye.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Qiye was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Qiye with id=${id}. Maybe Qiye was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Qiye with id=" + id
        });
      });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Qiye.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Qiye was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Qiye with id=${id}. Maybe Qiye was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Qiye with id=" + id
        });
      });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    Qiye.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Qiye were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Qiye."
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

