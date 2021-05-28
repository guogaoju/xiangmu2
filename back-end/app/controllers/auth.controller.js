const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Dept = db.dept;
const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { dept } = require("../models");

exports.signup = (req, res) => {
  // 数据库添加用户表
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
        });
      };
      //添加部门信息
      if (req.body.dept) {
        Dept.findAll({
          where: {
            name: {
              [Op.or]: req.body.dept
            }
          }
        }).then(dept => {
          user.setDepts(dept).then(() => {
            res.send({ message: "用户注册成功！" });
          });
        });
      } else {
        // 部门可以为空
        res.send({ message: "用户注册成功！" });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
//根据id查找
exports.findOne = (req, res) => {
  const id = req.params.userid;
  User.findByPk(id)
  .then(user => {
        user.getRoles().then(roles => {
          console.log(roles)
        });
    //查找部门信息
        user.getDepts().then(dept => {
          console.log(dept)
        });
        user.roles=role.name
        user.dept=dept.name
        console.log(user);
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
    });
};
//查找全部信息
exports.findAll = (req, res) => {
  User.findAll()
  .then(user => {
        user.getRoles().then(() => {
        });
    //查找部门信息
        user.getDepts().then(() => {
          
        });
        res.send(user);
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
    });
};
exports.update = (req, res) => {
  const id = req.params.userid;
  //修改
  User.update(req.body, {
    where: { id: id }
  }).catch(err => {
    res.status(500).send({ message: err.message });
  });

  User.findByPk(id)
  .then(user => {
    if (req.body.roles) {
      Role.findAll({
        where: {
          name: {
            [Op.or]: req.body.roles
          }
        }
      }).then(roles => {
        user.setRoles(roles).then(() => {
        });
      });
    } else {
      // user role = 1
      user.setRoles([1]).then(() => {
      });
    };
    //修改部门信息
    if (req.body.dept) {
      Dept.findAll({
        where: {
          name: {
            [Op.or]: req.body.dept
          }
        }
      }).then(dept => {
        user.setDepts(dept).then(() => {
          res.send({ message: "用户修改成功！" });
        });
      });
    } else {
      // 部门可以为空
      res.send({ message: "用户修改成功！" });
    }
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
    });
};
//删除
exports.delete = (req, res) => {
  const id = req.params.userid;
  User.destroy({
    where: { id: id }
  })
  .then(num => {
    if (num == 1) {
      res.send({
        message: "deleted successfully!"
      });
    } else {
      res.send({
        message: `Cannot delete bumen with id=${id}. Maybe bumen was not found!`
      });
    }
  }).catch(err => {
    res.status(500).send({ message: err.message });
  });
  User.findByPk(id)
  .then(user => {
    //删除角色中间表信息
        user.setRoles([])
    //删除部门中间表信息
        user.setDepts([])
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
    });
};
exports.signin = (req, res) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  })
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "用户名找不到" });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          // accessToken: null,
          message: "密码错误"
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400 // 24 hours
      });

      var authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
          accessToken: token
        });
      });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};