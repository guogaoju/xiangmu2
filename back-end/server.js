const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const multer = require("multer");
const moment = require('moment');
const fs=require('fs');
const path=require('path');

global.__basedir = __dirname;

app.use(express.urlencoded({ extended: true }));

app.use(express.static('./resources/static/assets/uploads'));
app.use(express.static('./resources/static/assets/img'));
app.use(express.static('./resources/static/assets/imgs'));
const db = require("./app/models");
db.sequelize.sync().then(() =>{
   //initial();
});
const Role = db.role;
const Dept = db.dept;
const QiyeState = db.QiyeState;
function initial() {
  // Role.create({
  //   id: 1,
  //   name: "user"
  // });
 
  // Role.create({
  //   id: 2,
  //   name: "moderator"
  // });
 
  // Role.create({
  //   id: 3,
  //   name: "admin"
  // });

  // Dept.create({
  //   id: 1,
  //   name: "风控部"
  // });
  // Dept.create({
  //   id: 2,
  //   name: "财务部"
  // });
  QiyeState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    nextStateid: 2
  });
  QiyeState.create({
    id:2,
    nodeName: "审核",
    nodebutton: "审核",
    nextStateid: 3
  });
  QiyeState.create({
    id:3,
    nodeName: "审批",
    nodebutton: "审批",
  });
}

//清空数据库 db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
//   });

var corsOptions = {
  origin: "http://localhost:8081"
};
app.use('/uploads', express(__dirname + '/uploads'))
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });
require("./app/routes/core.routes")(app);
require("./app/routes/Pingji.routes")(app);
require("./app/routes/Cailiaogys.routes")(app);
require("./app/routes/Qiye.routes")(app);
require("./app/routes/Fangwen.routes")(app);
require("./app/routes/Qiyepingji.routes")(app);
require("./app/routes/Finance.routes")(app);
require("./app/routes/Wuliao.routes")(app);
require("./app/routes/Danwei.routes")(app);
require("./app/routes/WuliaoType.routes")(app);
// require("./app/routes/web.js")(app);
require("./app/routes/Jianzhu.routes")(app);
require("./app/routes/Addwuliao.routes")(app);
require("./app/routes/Zhizao.routes")(app);
require("./app/routes/Caigou.routes")(app);
require("./app/routes/CaiGouwuliao.routes")(app);
require("./app/routes/HuanKuan.routes")(app);
require("./app/routes/Jindu.routes")(app);
require("./app/routes/Addjinduwuliao.routes")(app);
require("./app/routes/Ruku.routes")(app);
require("./app/routes/Chuku.routes")(app);
require("./app/routes/Kucun.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/auth.routes")(app);
require("./app/routes/general.routes")(app);
require("./app/routes/Bumen.routes")(app);
require("./app/routes/Dept.routes")(app);
require("./app/routes/Role.routes")(app);
require("./app/routes/QiyeState.routes")(app);
require("./app/routes/Statelog.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});