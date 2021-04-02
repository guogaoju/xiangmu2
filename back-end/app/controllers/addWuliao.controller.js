const db = require("../models");
const Addwuliao = db.addwuliao;
const Op = db.Sequelize.Op;

// 新建物料controller层
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
// 新增
  const addwuliao = {
        name: req.body.name,
        wname:req.body.wname,
        shu : req.body.shu ,
        shu1:req.body.shu1,
        shu2:req.body.shu2,
        output_value:req.body.output_value,
        wancheng:req.body.wancheng,
        stock:req.body.stock,
  };
  Addwuliao.create(addwuliao)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Addwuliao."
      });
    });
};

//从数据库查找所有,模糊查询
exports.findAll = (req, res) => {
    // const title = req.query.title;
    // var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Addwuliao.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Addwuliao."
        });
      });
};
//根据id查找
exports.findOne = (req, res) => {
    const id = req.params.id;

    Addwuliao.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving AddWuliao with id=" + id
        });
      });
};



