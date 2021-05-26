const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Dept = db.dept;
const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

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
      if (req.body.depts) {
        Dept.findAll({
          where: {
            name: {
              [Op.or]: req.body.depts
            }
          }
        }).then(depts => {
          user.setDepts(depts).then(() => {
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