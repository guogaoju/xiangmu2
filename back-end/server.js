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
const { response } = require("express");
db.sequelize.sync().then(() =>{
  //  initial();
});
const Role = db.role;
const Dept = db.dept;
const QiyeState = db.QiyeState;
const operate = db.operate;
const QiyepingjiState = db.QiyepingjiState;
const FinanceState = db.FinanceState;
const FangwenState = db.FangwenState;
const CailiaoState = db.CailiaoState;
const PingjiState = db.PingjiState;
const corefirmState = db.corefirmState;
const JianzhuState = db.JianzhuState;
const ZhizaoState = db.ZhizaoState;
const CaigouState = db.CaigouState;
const HuankuanState = db.HuankuanState;
const JinduState = db.JinduState;
const RukuState = db.RukuState;
const ChukuState = db.ChukuState;
const KucunState = db.ChukuState;
const WuliaoState = db.ChukuState;
const WuliaoTypeState = db.ChukuState;
const DanweiState = db.ChukuState;
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
  // qiyestate_dept.create({
  //   qiyestateId:1,
  //   deptId: "1",
  // });
  // qiyestate_dept.create({
  //   qiyestateId:2,
  //   deptId: "2",
  // });
  // qiyestate_dept.create({
  //   qiyestateId:2,
  //   deptId: "2",
  // });
  operate.create({
    id:1,
    operate_name: "新增",
  });
  operate.create({
    id:2,
    operate_name: "修改",
  });
  operate.create({
    id:3,
    operate_name: "删除",
  });
  operate.create({
    id:4,
    operate_name: "审批流程",
  });
  QiyeState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  QiyeState.create({
    id:2,
    nodeName: "审核",
    nodebutton: "审核",
    nextStateid: 3,
    lastone:0
  }).then(data=>{
    data.setDepts([1,2]).then(()=>{
    })
  });
  QiyeState.create({
    id:3,
    nodeName: "审批",
    nodebutton: "审批",
    lastone:1
  }).then(data=>{
    data.setDepts([2]).then(()=>{
    })
  });;
  QiyepingjiState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  QiyepingjiState.create({
    id:2,
    nodeName: "审核",
    nodebutton: "审核",
    nextStateid: 3,
    lastone:0
  }).then(data=>{
    data.setDepts([1,2]).then(()=>{
    })
  });
  QiyepingjiState.create({
    id:3,
    nodeName: "审批",
    nodebutton: "审批",
    lastone:1
  }).then(data=>{
    data.setDepts([2]).then(()=>{
    })
  });;

  FinanceState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  FinanceState.create({
    id:2,
    nodeName: "审核",
    nodebutton: "审核",
    nextStateid: 3,
    lastone:0
  }).then(data=>{
    data.setDepts([1,2]).then(()=>{
    })
  });
  FinanceState.create({
    id:3,
    nodeName: "审批",
    nodebutton: "审批",
    lastone:1
  }).then(data=>{
    data.setDepts([2]).then(()=>{
    })
  });;

  FangwenState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  FangwenState.create({
    id:2,
    nodeName: "审核",
    nodebutton: "审核",
    nextStateid: 3,
    lastone:0
  }).then(data=>{
    data.setDepts([1,2]).then(()=>{
    })
  });
  FangwenState.create({
    id:3,
    nodeName: "审批",
    nodebutton: "审批",
    lastone:1
  }).then(data=>{
    data.setDepts([2]).then(()=>{
    })
  });;

  CailiaoState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  CailiaoState.create({
    id:2,
    nodeName: "审核",
    nodebutton: "审核",
    nextStateid: 3,
    lastone:0
  }).then(data=>{
    data.setDepts([1,2]).then(()=>{
    })
  });
  CailiaoState.create({
    id:3,
    nodeName: "审批",
    nodebutton: "审批",
    lastone:1
  }).then(data=>{
    data.setDepts([2]).then(()=>{
    })
  });;

  PingjiState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  PingjiState.create({
    id:2,
    nodeName: "审核",
    nodebutton: "审核",
    nextStateid: 3,
    lastone:0
  }).then(data=>{
    data.setDepts([1,2]).then(()=>{
    })
  });
  PingjiState.create({
    id:3,
    nodeName: "审批",
    nodebutton: "审批",
    lastone:1
  }).then(data=>{
    data.setDepts([2]).then(()=>{
    })
  });;

  corefirmState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  corefirmState.create({
    id:2,
    nodeName: "审核",
    nodebutton: "审核",
    nextStateid: 3,
    lastone:0
  }).then(data=>{
    data.setDepts([1,2]).then(()=>{
    })
  });
  corefirmState.create({
    id:3,
    nodeName: "审批",
    nodebutton: "审批",
    lastone:1
  }).then(data=>{
    data.setDepts([2]).then(()=>{
    })
  });;

  JianzhuState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  JianzhuState.create({
    id:2,
    nodeName: "审核",
    nodebutton: "审核",
    nextStateid: 3,
    lastone:0
  }).then(data=>{
    data.setDepts([1,2]).then(()=>{
    })
  });
  JianzhuState.create({
    id:3,
    nodeName: "审批",
    nodebutton: "审批",
    lastone:1
  }).then(data=>{
    data.setDepts([2]).then(()=>{
    })
  });;

  ZhizaoState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  ZhizaoState.create({
    id:2,
    nodeName: "审核",
    nodebutton: "审核",
    nextStateid: 3,
    lastone:0
  }).then(data=>{
    data.setDepts([1,2]).then(()=>{
    })
  });
  ZhizaoState.create({
    id:3,
    nodeName: "审批",
    nodebutton: "审批",
    lastone:1
  }).then(data=>{
    data.setDepts([2]).then(()=>{
    })
  });;

  CaigouState.create({
    id:1,
    nodeName: "采购申请",
    nodebutton: "提交",
    nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  CaigouState.create({
    id:2,
    nodeName: "采购审核",
    nodebutton: "审核",
    nextStateid: 3,
    lastone:0
  }).then(data=>{
    data.setDepts([1,2]).then(()=>{
    })
  });
  CaigouState.create({
    id:3,
    nodeName: "采购审批",
    nodebutton: "审批",
    nextStateid: 4,
    lastone:0
  }).then(data=>{
    data.setDepts([2]).then(()=>{
    })
  });;
  CaigouState.create({
    id:4,
    nodeName: "付款申请",
    nodebutton: "申请",
    nextStateid: 5,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  CaigouState.create({
    id:5,
    nodeName: "付款审核",
    nodebutton: "审核",
    nextStateid: 6,
    lastone:0
  }).then(data=>{
    data.setDepts([1,2]).then(()=>{
    })
  });
  CaigouState.create({
    id:6,
    nodeName: "付款审批",
    nodebutton: "审批",
    lastone:1
  }).then(data=>{
    data.setDepts([2]).then(()=>{
    })
  });;

  HuankuanState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  HuankuanState.create({
    id:2,
    nodeName: "审核",
    nodebutton: "审核",
    nextStateid: 3,
    lastone:0
  }).then(data=>{
    data.setDepts([1,2]).then(()=>{
    })
  });
  HuankuanState.create({
    id:3,
    nodeName: "审批",
    nodebutton: "审批",
    lastone:1
  }).then(data=>{
    data.setDepts([2]).then(()=>{
    })
  });;

  JinduState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  JinduState.create({
    id:2,
    nodeName: "审核",
    nodebutton: "审核",
    nextStateid: 3,
    lastone:0
  }).then(data=>{
    data.setDepts([1,2]).then(()=>{
    })
  });
  JinduState.create({
    id:3,
    nodeName: "审批",
    nodebutton: "审批",
    lastone:1
  }).then(data=>{
    data.setDepts([2]).then(()=>{
    })
  });;

  ChukuState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  ChukuState.create({
    id:2,
    nodeName: "审核",
    nodebutton: "审核",
    nextStateid: 3,
    lastone:0
  }).then(data=>{
    data.setDepts([1,2]).then(()=>{
    })
  });
  ChukuState.create({
    id:3,
    nodeName: "审批",
    nodebutton: "审批",
    lastone:1
  }).then(data=>{
    data.setDepts([2]).then(()=>{
    })
  });;

  RukuState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  RukuState.create({
    id:2,
    nodeName: "审核",
    nodebutton: "审核",
    nextStateid: 3,
    lastone:0
  }).then(data=>{
    data.setDepts([1,2]).then(()=>{
    })
  });
  RukuState.create({
    id:3,
    nodeName: "审批",
    nodebutton: "审批",
    lastone:1
  }).then(data=>{
    data.setDepts([2]).then(()=>{
    })
  });;


  KucunState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  KucunState.create({
    id:2,
    nodeName: "审核",
    nodebutton: "审核",
    nextStateid: 3,
    lastone:0
  }).then(data=>{
    data.setDepts([1,2]).then(()=>{
    })
  });
  KucunState.create({
    id:3,
    nodeName: "审批",
    nodebutton: "审批",
    lastone:1
  }).then(data=>{
    data.setDepts([2]).then(()=>{
    })
  });;


  WuliaoState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  WuliaoState.create({
    id:2,
    nodeName: "审核",
    nodebutton: "审核",
    nextStateid: 3,
    lastone:0
  }).then(data=>{
    data.setDepts([1,2]).then(()=>{
    })
  });
  WuliaoState.create({
    id:3,
    nodeName: "审批",
    nodebutton: "审批",
    lastone:1
  }).then(data=>{
    data.setDepts([2]).then(()=>{
    })
  });;

  DanweiState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  DanweiState.create({
    id:2,
    nodeName: "审核",
    nodebutton: "审核",
    nextStateid: 3,
    lastone:0
  }).then(data=>{
    data.setDepts([1,2]).then(()=>{
    })
  });
  DanweiState.create({
    id:3,
    nodeName: "审批",
    nodebutton: "审批",
    lastone:1
  }).then(data=>{
    data.setDepts([2]).then(()=>{
    })
  });;

  WuliaoTypeState.create({
    id:1,
    nodeName: "提交",
    nodebutton: "提交",
    nextStateid: 2,
    lastone:0
  }).then(data=>{
    data.setDepts([1]).then(()=>{
    })
  });
  WuliaoTypeState.create({
    id:2,
    nodeName: "审核",
    nodebutton: "审核",
    nextStateid: 3,
    lastone:0
  }).then(data=>{
    data.setDepts([1,2]).then(()=>{
    })
  });
  WuliaoTypeState.create({
    id:3,
    nodeName: "审批",
    nodebutton: "审批",
    lastone:1
  }).then(data=>{
    data.setDepts([2]).then(()=>{
    })
  });;
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
require("./app/routes/operateType.routes")(app);
require("./app/routes/QiyepingjiState.routes")(app);
require("./app/routes/QiyepingjiStatelog.routes")(app);
require("./app/routes/FinanceStatelog.routes")(app);
require("./app/routes/FinanceState.routes")(app);
require("./app/routes/FangwenState.routes")(app);
require("./app/routes/FangwenStatelog.routes")(app);
require("./app/routes/CailiaoState.routes")(app);
require("./app/routes/CailiaoStatelog.routes")(app);
require("./app/routes/PingjiStatelog.routes")(app);
require("./app/routes/PingjiState.routes")(app);
require("./app/routes/corefirmState.routes")(app);
require("./app/routes/corefirmStatelog.routes")(app);
require("./app/routes/JianzhuStatelog.routes")(app);
require("./app/routes/JianzhuState.routes")(app);
require("./app/routes/ZhizaoState.routes")(app);
require("./app/routes/ZhizaoStatelog.routes")(app);
require("./app/routes/CaigouStatelog.routes")(app);
require("./app/routes/CaigouState.routes")(app);
require("./app/routes/HuankuanState.routes")(app);
require("./app/routes/HuankuanStatelog.routes")(app);
require("./app/routes/JinduStatelog.routes")(app);
require("./app/routes/JinduState.routes")(app);
require("./app/routes/RukuState.routes")(app);
require("./app/routes/RukuStatelog.routes")(app);
require("./app/routes/ChukuState.routes")(app);
require("./app/routes/ChukuStatelog.routes")(app);
require("./app/routes/KucunStatelog.routes")(app);
require("./app/routes/KucunState.routes")(app);
require("./app/routes/WuliaoState.routes")(app);
require("./app/routes/WuliaoStatelog.routes")(app);
require("./app/routes/DanweiStatelog.routes")(app);
require("./app/routes/DanweiState.routes")(app);
require("./app/routes/WuliaoTypeStatelog.routes")(app);
require("./app/routes/WuliaoTypeState.routes")(app);
require("./app/routes/Rongzi.routes")(app);
require("./app/routes/Addjianzhuwuliao.routes")(app);
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});