const db = require("../models");
const Addjianzhuwuliao = db.Addjianzhuwuliao;
const Op = db.Sequelize.Op;

// 新建物料controller层
exports.create = (req, res) => {
  // Validate request
  if (!req.body.item_name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
// 新增
  const addwuliao = {
    // supplier_name: req.body.supplier_name,
    item_name:req.body.item_name,
    wuliaoname:req.body.wuliaoname,
    danwei : req.body.danwei ,
    need:req.body.need,
    Supplied:req.body.Supplied,
    Supplieds:req.body.Supplieds,
    jianzhuId:req.body.jianzhuId,
  };
  Addjianzhuwuliao.create(addwuliao)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Addjianzhuwuliao."
      });
    });
};

//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
    const jianzhuId = req.query.jianzhuId;
    var condition = jianzhuId ? { jianzhuId: jianzhuId}  : null;
    Addjianzhuwuliao.findAll({
      where:condition
  })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Addjianzhuwuliao."
        });
      });
};
//根据id查找
exports.findOne = (req, res) => {
    const id = req.params.id;

    Addjianzhuwuliao.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Addjianzhuwuliao with id=" + id
        });
      });
};



