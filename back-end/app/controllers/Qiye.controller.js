const db = require("../models");
const Qiye = db.qiye;
const QiyeState = db.QiyeState;
const Op = db.Sequelize.Op;

// 新建controller层
exports.create = (req, res) => {
  // Validate request
  if (!req.body.register_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  const qiye = {
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
    // nodeName:req.body.nodeName,
  };
// 新建controller层
  Qiye.create(qiye)
    .then(qiye => {
      if (req.body.qiyeState) {
        QiyeState.findAll({
          where: {
            name: {
              [Op.or]: req.body.qiyeState
            }
          }
        }).then(qiyeState => {
          qiye.setQiyeState(qiyeState).then(() => {
          });
        });
      } else {
        // user role = 1
        qiye.setQiyeState([1]).then(() => {
        });
      };
      res.send(qiye);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the qiye."
      });
    });
};

//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
    const register_name = req.query.register_name;
    var condition = register_name  ? { register_name: { [Op.like]: `%${register_name}%` } } : null;
    Qiye.findAll({ where: condition,include : [QiyeState]} )
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

//根据id查找
exports.findOne = (req, res) => {
    Qiye.findOne({ where: { id: req.params.id },include : [QiyeState] })
      .then(data => {

        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Qiye with id=" + id
        });
      });
};


//修改
exports.update = (req, res) => {
    const id = req.params.id;
    Qiye.update(req.body, {
      where: { id: id }
    }).then(data =>{
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

//删除
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