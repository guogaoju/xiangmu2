const db = require("../models");
const Cailiaogys = db.cailiaogys;
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
  const cailiaogys = {
    id:req.body.id,
    supplier_name:req.body.supplier_name,
    trade:req.body.trade,
    address:req.body.address,
    contact_person:req.body.contact_person,
    phone:req.body.phone,
    fax:req.body.fax,
    post_code:req.body.post_code,
    juridical_person:req.body.juridical_person,
    bank_name:req.body.bank_name,
    bank_card:req.body.bank_card,
    tax_card:req.body.tax_card,
    vat:req.body.vat,
    email:req.body.email,
    supplier_type:req.body.supplier_type,
    discount:req.body.discount,
    registered_trademark:req.body.registered_trademark,
    business_license:req.body.business_license,
    remarks:req.body.remarks,
    grade:req.body.grade,
    current_process:req.body.current_process,
  };

  // Save pingji in the database
  Cailiaogys.create(cailiaogys)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Cailiaogys."
      });
    });
};

// Retrieve all pingji from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Cailiaogys.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Cailiaogys."
        });
      });
};

// Find a single pingji with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Cailiaogys.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Cailiaogys with id=" + id
        });
      });
};


// Update a pingji by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Cailiaogys.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Cailiaogys was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Cailiaogys with id=${id}. Maybe Cailiaogys was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Cailiaogys with id=" + id
        });
      });
};

// Delete a pingji with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Cailiaogys.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Cailiaogys was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Cailiaogys with id=${id}. Maybe Cailiaogys was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Cailiaogys with id=" + id
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

