const db = require("../models");
const Zhizao = db.zhizao;
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
  const zhizao = {
        qiye_name:req.body.qiye_name,
        item_name:req.body.item_name,
        time: req.body.time,
        jindu : req.body.jindu ,
        item_money:req.body.item_money,
        total_quota:req.body.total_quota,
        money:req.body.money,
        interest:req.body.interest,
        Return:req.body.Return,
        Rhuan_money:req.body.huan_money,
        fax:req.body.fax,
        current_process:req.body.current_process
  };

  // Save pingji in the database
  Zhizao.create(zhizao)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Zhizao."
      });
    });
};

// Retrieve all pingji from the database.
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Zhizao.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Zhizao."
        });
      });
};

// Find a single pingji with an id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Zhizao.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Zhizao with id=" + id
        });
      });
};


// Update a pingji by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;

    Zhizao.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Zhizao was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Zhizao with id=${id}. Maybe Zhizao was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Zhizao with id=" + id
        });
      });
};

// Delete a pingji with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;

    Zhizao.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Zhizao was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Zhizao with id=${id}. Maybe Zhizao was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Zhizao with id=" + id
        });
      });
};

