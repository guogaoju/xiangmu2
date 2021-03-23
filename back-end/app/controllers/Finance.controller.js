const db = require("../models");
const Finance = db.finance;
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
  const finance = {
            id:req.body.id,
            qiye_name: req.body.qiye_name,
            year: req.body.year,
            quarter: req.body.quarter,
            total_assets:req.body.total_assets,
            net_assets:req.body.net_assets,
            Loar:req.body.Loar,
            quick_ratio:req.body.quick_ratio,
            current_ratio:req.body.current_ratio,
            days_inventory:req.body.days_inventory,
            floating_debt:req.body.floating_debt,
            rate_margin:req.body.rate_margin,
            ROE:req.body.ROE,
            accounts_receivable:req.body.accounts_receivable,
            accounts_receivableDay:req.body.accounts_receivableDay,
            accounts_payable:req.body.accounts_payable,
            accounts_payableDay:req.body.accounts_payableDay,
            operating_income:req.body.operating_income,
            nonbusiness_income:req.body.nonbusiness_income,
            net_profits:req.body.net_profits,
            total_money:req.body.total_money,
            total_money1:req.body.total_money1,
            total_money2:req.body.total_money2,
            current_process:req.body.current_process
  };

  // Save pingji in the database
  Finance.create(finance)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Finance."
      });
    });
};

// Retrieve all pingji from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Finance.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Finance."
        });
      });
};

// Find a single pingji with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Finance.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Finance with id=" + id
        });
      });
};


// Update a pingji by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Finance.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Finance was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Finance with id=${id}. Maybe Finance was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Finance with id=" + id
        });
      });
};

// Delete a pingji with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Finance.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Finance was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Finance with id=${id}. Maybe Finance was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Finance with id=" + id
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

