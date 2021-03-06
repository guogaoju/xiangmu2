const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.core_firm = require("./core_firm.model.js")(sequelize, Sequelize);
db.pingji = require("./Pingji.model.js")(sequelize, Sequelize);
db.cailiaogys = require("./Cailiaogys.model.js")(sequelize, Sequelize);
db.qiye = require("./Qiye.model.js")(sequelize, Sequelize);
db.fangwen = require("./Fangwen.model.js")(sequelize, Sequelize);
db.qiyepingji = require("./Qiyepingji.model.js")(sequelize, Sequelize);
db.finance = require("./Finance.model.js")(sequelize, Sequelize);
db.wuliao = require("./Wuliao.model.js")(sequelize, Sequelize);
db.danwei = require("./Danwei.model.js")(sequelize, Sequelize);
db.wuliaotype = require("./WuliaoType.model.js")(sequelize, Sequelize);
db.images = require("./image.model.js")(sequelize, Sequelize);
db.jianzhu = require("./Jianzhu.model.js")(sequelize, Sequelize);
db.addwuliao = require("./Addwuliao.model.js")(sequelize, Sequelize);
db.zhizao = require("./Zhizao.model.js")(sequelize, Sequelize);
db.caigou = require("./Caigou.model.js")(sequelize, Sequelize);
db.caigouwuliao = require("./CaiGouwuliao.model.js")(sequelize, Sequelize);
db.huankuan = require("./HuanKuan.model.js")(sequelize, Sequelize);
db.jindu = require("./Jindu.model.js")(sequelize, Sequelize);
db.addjinduwuliao = require("./Addjinduwuliao.model.js")(sequelize, Sequelize);
db.ruku = require("./Ruku.model.js")(sequelize, Sequelize);
db.chuku = require("./Chuku.model.js")(sequelize, Sequelize);
db.kucun = require("./Kucun.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.bumen = require("./Bumen.model.js")(sequelize, Sequelize);
db.dept = require("./Dept.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.QiyeState = require("./QiyeState.model.js")(sequelize, Sequelize);
db.Statelog = require("./Statelog.model.js")(sequelize, Sequelize);
db.operate = require("./operateType.model.js")(sequelize, Sequelize);
db.QiyepingjiState = require("./QiyepingjiState.model.js")(sequelize, Sequelize);
db.QiyepingjiStatelog = require("./QiyepingjiStatelog.model.js")(sequelize, Sequelize);
db.FinanceState = require("./FinanceState.model.js")(sequelize, Sequelize);
db.FinanceStatelog = require("./FinanceStatelog.model.js")(sequelize, Sequelize);
db.FangwenStatelog = require("./FangwenStatelog.model.js")(sequelize, Sequelize);
db.FangwenState = require("./FangwenState.model.js")(sequelize, Sequelize);
db.CailiaoState = require("./CailiaoState.model.js")(sequelize, Sequelize);
db.CailiaoStatelog = require("./CailiaoStatelog.model.js")(sequelize, Sequelize);
db.PingjiStatelog = require("./PingjiStatelog.model.js")(sequelize, Sequelize);
db.PingjiState = require("./PingjiState.model.js")(sequelize, Sequelize);
db.corefirmState = require("./corefirmState.model.js")(sequelize, Sequelize);
db.corefirmStatelog = require("./corefirmStatelog.model.js")(sequelize, Sequelize);
db.JianzhuStatelog = require("./JianzhuStatelog.model.js")(sequelize, Sequelize);
db.JianzhuState = require("./JianzhuState.model.js")(sequelize, Sequelize);
db.ZhizaoState = require("./ZhizaoState.model.js")(sequelize, Sequelize);
db.ZhizaoStatelog = require("./ZhizaoStatelog.model.js")(sequelize, Sequelize);
db.CaigouStatelog = require("./CaigouStatelog.model.js")(sequelize, Sequelize);
db.CaigouState = require("./CaigouState.model.js")(sequelize, Sequelize);
db.HuankuanState = require("./HuankuanState.model.js")(sequelize, Sequelize);
db.HuankuanStatelog = require("./HuankuanStatelog.model.js")(sequelize, Sequelize);
db.JinduStatelog = require("./JinduStatelog.model.js")(sequelize, Sequelize);
db.JinduState = require("./JinduState.model.js")(sequelize, Sequelize);
db.RukuState = require("./RukuState.model.js")(sequelize, Sequelize);
db.RukuStatelog = require("./RukuStatelog.model.js")(sequelize, Sequelize);
db.ChukuStatelog = require("./ChukuStatelog.model.js")(sequelize, Sequelize);
db.ChukuState = require("./ChukuState.model.js")(sequelize, Sequelize);
db.KucunState = require("./KucunState.model.js")(sequelize, Sequelize);
db.KucunStatelog = require("./KucunStatelog.model.js")(sequelize, Sequelize);
db.WuliaoStatelog = require("./WuliaoStatelog.model.js")(sequelize, Sequelize);
db.WuliaoState = require("./WuliaoState.model.js")(sequelize, Sequelize);
db.DanweiState = require("./DanweiState.model.js")(sequelize, Sequelize);
db.DanweiStatelog = require("./DanweiStatelog.model.js")(sequelize, Sequelize);
db.WuliaoTypeState = require("./WuliaoTypeState.model.js")(sequelize, Sequelize);
db.WuliaoTypeStatelog = require("./WuliaoTypeStatelog.model.js")(sequelize, Sequelize);
db.Rongzi = require("./Rongzi.model.js")(sequelize, Sequelize);
db.Addjianzhuwuliao = require("./Addjianzhuwuliao.model.js")(sequelize, Sequelize);
db.Daiban = require("./Daiban.model.js")(sequelize, Sequelize);
db.Code = require("./code.model.js")(sequelize, Sequelize);
db.FukuanState = require("./FukuanState.model.js")(sequelize, Sequelize);
db.FukuanStatelog = require("./FukuanStatelog.model.js")(sequelize, Sequelize);
db.Fukuan = require("./Fukuan.model.js")(sequelize, Sequelize);
db.Fukuanwuliao = require("./Fukuanwuliao.model.js")(sequelize, Sequelize);
db.CaigouImage = require("./CaigouImage.model.js")(sequelize, Sequelize);
db.FukuanImage = require("./FukuanImage.model.js")(sequelize, Sequelize);
db.HuankuanImage = require("./HuankuanImage.model.js")(sequelize, Sequelize);
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});
db.user.belongsToMany(db.dept, {
  through: "user_dept",
  foreignKey: "userId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.user, {
  through: "user_dept",
  foreignKey: "deptId",
  otherKey: "userId"
});
db.QiyeState.hasMany(db.qiye);
db.qiye.belongsTo(db.QiyeState);

//????????????user???
db.user.hasMany(db.Statelog, {
  foreignKey: "userId",
});
db.Statelog.belongsTo(db.user);
//????????????qiye???
db.qiye.hasMany(db.Statelog, {
  foreignKey: "qiyeId",
});
db.Statelog.belongsTo(db.qiye);
//????????????State???
db.QiyeState.hasMany(db.Statelog, {
  as:"oldstate",
  foreignKey: "oldstateid"
});
db.QiyeState.hasMany(db.Statelog, {
  as:"newstate",
  foreignKey: "newstateid"
});
//?????????????????????
db.QiyeState.belongsToMany(db.dept, {
  through: "qiyestate_dept",
  foreignKey: "qiyestateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.QiyeState, {
  through: "qiyestate_dept",
  foreignKey: "deptId",
  otherKey: "qiyestateId"
});
//???????????????????????????
db.operate.hasMany(db.Statelog, {
  foreignKey: "operateId",
});
db.Statelog.belongsTo(db.operate);


//???????????????????????????????????????
db.QiyepingjiState.hasMany(db.qiyepingji);
db.qiyepingji.belongsTo(db.QiyepingjiState);
//?????????????????????????????????
db.QiyepingjiState.belongsToMany(db.dept, {
  through: "QiyepingjiState_dept",
  foreignKey: "QiyepingjiStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.QiyepingjiState, {
  through: "QiyepingjiState_dept",
  foreignKey: "deptId",
  otherKey: "QiyepingjiStateId"
});
//qiyepingji????????????user???
db.user.hasMany(db.QiyepingjiStatelog, {
  foreignKey: "userId",
});
db.QiyepingjiStatelog.belongsTo(db.user);
//????????????qiyepingji???
db.qiyepingji.hasMany(db.QiyepingjiStatelog, {
  foreignKey: "qiyepingjiId",
});
db.QiyepingjiStatelog.belongsTo(db.qiyepingji);
//????????????qiyepingjiState???
db.QiyepingjiState.hasMany(db.QiyepingjiStatelog, {
  foreignKey: "oldstateid"
});
db.QiyepingjiState.hasMany(db.QiyepingjiStatelog, {
  foreignKey: "newstateid"
});
//???????????????????????????
db.operate.hasMany(db.QiyepingjiStatelog, {
  foreignKey: "operateId",
});
//?????????????????????
db.jindu.hasMany(db.images, {
  foreignKey: "jinduId",
});
db.images.belongsTo(db.jindu);

//finance??????finance?????????
db.FinanceState.hasMany(db.finance);
db.finance.belongsTo(db.FinanceState);
//finance?????????????????????
db.FinanceState.belongsToMany(db.dept, {
  through: "FinanceState_dept",
  foreignKey: "FinanceStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.FinanceState, {
  through: "FinanceState_dept",
  foreignKey: "deptId",
  otherKey: "FinanceStateId"
});
//FinanceStatelog????????????user???
db.user.hasMany(db.FinanceStatelog, {
  foreignKey: "userId",
});
db.FinanceStatelog.belongsTo(db.user);
//????????????finance???
db.finance.hasMany(db.FinanceStatelog, {
  foreignKey: "financeId",
});
db.FinanceStatelog.belongsTo(db.finance);
//????????????qiyepingjiState???
db.FinanceState.hasMany(db.FinanceStatelog, {
  foreignKey: "oldstateid"
});
db.FinanceState.hasMany(db.FinanceStatelog, {
  foreignKey: "newstateid"
});
//???????????????????????????
db.operate.hasMany(db.FinanceStatelog, {
  foreignKey: "operateId",
});


//fangwen??????fangwen?????????
db.FangwenState.hasMany(db.fangwen);
db.fangwen.belongsTo(db.FangwenState);
//fangwen?????????????????????
db.FangwenState.belongsToMany(db.dept, {
  through: "FangwenState_dept",
  foreignKey: "FangwenStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.FangwenState, {
  through: "FangwenState_dept",
  foreignKey: "deptId",
  otherKey: "FangwenStateId"
});
//fangwenStatelog????????????user???
db.user.hasMany(db.FangwenStatelog, {
  foreignKey: "userId",
});
db.FangwenStatelog.belongsTo(db.user);
//????????????fangwen???
db.fangwen.hasMany(db.FangwenStatelog, {
  foreignKey: "fangwenId",
});
db.FangwenStatelog.belongsTo(db.fangwen);
//????????????fangwenState???
db.FangwenState.hasMany(db.FangwenStatelog, {
  foreignKey: "oldstateid"
});
db.FangwenState.hasMany(db.FangwenStatelog, {
  foreignKey: "newstateid"
});
//???????????????????????????
db.operate.hasMany(db.FangwenStatelog, {
  foreignKey: "operateId",
});


//Cailiaogys??????Cailiao?????????
db.CailiaoState.hasMany(db.cailiaogys);
db.cailiaogys.belongsTo(db.CailiaoState);
//cailiaogys?????????????????????
db.CailiaoState.belongsToMany(db.dept, {
  through: "CailiaoState_dept",
  foreignKey: "CailiaoStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.CailiaoState, {
  through: "CailiaoState_dept",
  foreignKey: "deptId",
  otherKey: "CailiaoStateId"
});
//CailiaoStatelog????????????user???
db.user.hasMany(db.CailiaoStatelog, {
  foreignKey: "userId",
});
db.CailiaoStatelog.belongsTo(db.user);
//CailiaoStatelog????????????cailiaogys???
db.cailiaogys.hasMany(db.CailiaoStatelog, {
  foreignKey: "cailiaogyId",
});
db.CailiaoStatelog.belongsTo(db.cailiaogys);
//????????????qiyepingjiState???
db.CailiaoState.hasMany(db.CailiaoStatelog, {
  foreignKey: "oldstateid"
});
db.CailiaoState.hasMany(db.CailiaoStatelog, {
  foreignKey: "newstateid"
});
//???????????????????????????
db.operate.hasMany(db.CailiaoStatelog, {
  foreignKey: "operateId",
});


//Pingji??????PingjiState?????????
db.PingjiState.hasMany(db.pingji);
db.pingji.belongsTo(db.PingjiState);
//cailiaogys?????????????????????
db.PingjiState.belongsToMany(db.dept, {
  through: "PingjiState_dept",
  foreignKey: "PingjiStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.PingjiState, {
  through: "PingjiState_dept",
  foreignKey: "deptId",
  otherKey: "PingjiStateId"
});
//CailiaoStatelog????????????user???
db.user.hasMany(db.PingjiStatelog, {
  foreignKey: "userId",
});
db.PingjiStatelog.belongsTo(db.user);
//CailiaoStatelog????????????cailiaogys???
db.pingji.hasMany(db.PingjiStatelog, {
  foreignKey: "pingjiId",
});
db.PingjiStatelog.belongsTo(db.pingji);
//????????????qiyepingjiState???
db.PingjiState.hasMany(db.PingjiStatelog, {
  foreignKey: "oldstateid"
});
db.PingjiState.hasMany(db.PingjiStatelog, {
  foreignKey: "newstateid"
});
//???????????????????????????
db.operate.hasMany(db.PingjiStatelog, {
  foreignKey: "operateId",
});


//core_firm??????corefirmState?????????
db.corefirmState.hasMany(db.core_firm);
db.core_firm.belongsTo(db.corefirmState);
//corefirmState?????????????????????
db.corefirmState.belongsToMany(db.dept, {
  through: "corefirmState_dept",
  foreignKey: "corefirmStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.corefirmState, {
  through: "corefirmState_dept",
  foreignKey: "deptId",
  otherKey: "corefirmStateId"
});
//corefirmStatelog????????????user???
db.user.hasMany(db.corefirmStatelog, {
  foreignKey: "userId",
});
db.corefirmStatelog.belongsTo(db.user);
//corefirmStatelog????????????cailiaogys???
db.core_firm.hasMany(db.corefirmStatelog, {
  foreignKey: "core_firmId",
});
db.corefirmStatelog.belongsTo(db.core_firm);
//????????????qiyepingjiState???
db.corefirmState.hasMany(db.corefirmStatelog, {
  foreignKey: "oldstateid"
});
db.corefirmState.hasMany(db.corefirmStatelog, {
  foreignKey: "newstateid"
});
//???????????????????????????
db.operate.hasMany(db.corefirmStatelog, {
  foreignKey: "operateId",
});


//jianzhu??????JianzhuState?????????
db.JianzhuState.hasMany(db.jianzhu);
db.jianzhu.belongsTo(db.JianzhuState);
//JianzhuState?????????????????????
db.JianzhuState.belongsToMany(db.dept, {
  through: "JianzhuState_dept",
  foreignKey: "JianzhuStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.JianzhuState, {
  through: "JianzhuState_dept",
  foreignKey: "deptId",
  otherKey: "JianzhuStateId"
});
//JianzhuStatelog????????????user???
db.user.hasMany(db.JianzhuStatelog, {
  foreignKey: "userId",
});
db.JianzhuStatelog.belongsTo(db.user);
//JianzhuStatelog????????????jianzhu???
db.jianzhu.hasMany(db.JianzhuStatelog, {
  foreignKey: "jianzhuId",
});
db.JianzhuStatelog.belongsTo(db.jianzhu);
//????????????qiyepingjiState???
db.JianzhuState.hasMany(db.JianzhuStatelog, {
  foreignKey: "oldstateid"
});
db.JianzhuState.hasMany(db.JianzhuStatelog, {
  foreignKey: "newstateid"
});
//???????????????????????????
db.operate.hasMany(db.JianzhuStatelog, {
  foreignKey: "operateId",
});


//zhizao??????ZhizaoState?????????
db.ZhizaoState.hasMany(db.zhizao);
db.zhizao.belongsTo(db.ZhizaoState);
//ZhizaoState?????????????????????
db.ZhizaoState.belongsToMany(db.dept, {
  through: "ZhizaoState_dept",
  foreignKey: "ZhizaoStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.ZhizaoState, {
  through: "ZhizaoState_dept",
  foreignKey: "deptId",
  otherKey: "ZhizaoStateId"
});
//ZhizaoStatelog????????????user???
db.user.hasMany(db.ZhizaoStatelog, {
  foreignKey: "userId",
});
db.ZhizaoStatelog.belongsTo(db.user);
//ZhizaoStatelog????????????zhizao???
db.zhizao.hasMany(db.ZhizaoStatelog, {
  foreignKey: "zhizaoId",
});
db.ZhizaoStatelog.belongsTo(db.zhizao);
//????????????ZhizaoState???
db.ZhizaoState.hasMany(db.ZhizaoStatelog, {
  foreignKey: "oldstateid"
});
db.ZhizaoState.hasMany(db.ZhizaoStatelog, {
  foreignKey: "newstateid"
});
//???????????????????????????
db.operate.hasMany(db.ZhizaoStatelog, {
  foreignKey: "operateId",
});


//caigou??????CaigouState?????????
db.CaigouState.hasMany(db.caigou);
db.caigou.belongsTo(db.CaigouState);
//CaigouState?????????????????????
db.CaigouState.belongsToMany(db.dept, {
  through: "CaigouState_dept",
  foreignKey: "CaigouStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.CaigouState, {
  through: "CaigouState_dept",
  foreignKey: "deptId",
  otherKey: "CaigouStateId"
});
//CaigouStatelog????????????user???
db.user.hasMany(db.CaigouStatelog, {
  foreignKey: "userId",
});
db.CaigouStatelog.belongsTo(db.user);
//CaigouStatelog????????????caigou???
db.caigou.hasMany(db.CaigouStatelog, {
  foreignKey: "caigouId",
});
db.CaigouStatelog.belongsTo(db.caigou);
//????????????ZhizaoState???
db.CaigouState.hasMany(db.CaigouStatelog, {
  foreignKey: "oldstateid"
});
db.CaigouState.hasMany(db.CaigouStatelog, {
  foreignKey: "newstateid"
});
//???????????????????????????
db.operate.hasMany(db.CaigouStatelog, {
  foreignKey: "operateId",
});


//huankuan??????HuankuanState?????????
db.HuankuanState.hasMany(db.huankuan);
db.huankuan.belongsTo(db.HuankuanState);
//HuankuanState?????????????????????
db.HuankuanState.belongsToMany(db.dept, {
  through: "HuankuanState_dept",
  foreignKey: "HuankuanStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.HuankuanState, {
  through: "HuankuanState_dept",
  foreignKey: "deptId",
  otherKey: "HuankuanStateId"
});
//HuankuanStatelog????????????user???
db.user.hasMany(db.HuankuanStatelog, {
  foreignKey: "userId",
});
db.HuankuanStatelog.belongsTo(db.user);
//HuankuanStatelog????????????huankuan???
db.huankuan.hasMany(db.HuankuanStatelog, {
  foreignKey: "huankuanId",
});
db.HuankuanStatelog.belongsTo(db.huankuan);
//????????????ZhizaoState???
db.HuankuanState.hasMany(db.HuankuanStatelog, {
  foreignKey: "oldstateid"
});
db.HuankuanState.hasMany(db.HuankuanStatelog, {
  foreignKey: "newstateid"
});
//???????????????????????????
db.operate.hasMany(db.HuankuanStatelog, {
  foreignKey: "operateId",
});


//jindu??????JinduState?????????
db.JinduState.hasMany(db.jindu);
db.jindu.belongsTo(db.JinduState);
//JinduState?????????????????????
db.JinduState.belongsToMany(db.dept, {
  through: "JinduState_dept",
  foreignKey: "JinduStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.JinduState, {
  through: "JinduState_dept",
  foreignKey: "deptId",
  otherKey: "JinduStateId"
});
//JinduStatelog????????????user???
db.user.hasMany(db.JinduStatelog, {
  foreignKey: "userId",
});
db.JinduStatelog.belongsTo(db.user);
//JinduStatelog????????????jindu???
db.jindu.hasMany(db.JinduStatelog, {
  foreignKey: "jinduId",
});
db.JinduStatelog.belongsTo(db.jindu);
//????????????JinduState???
db.JinduState.hasMany(db.JinduStatelog, {
  foreignKey: "oldstateid"
});
db.JinduState.hasMany(db.JinduStatelog, {
  foreignKey: "newstateid"
});
//???????????????????????????
db.operate.hasMany(db.JinduStatelog, {
  foreignKey: "operateId",
});


//ruku??????RukuState?????????
db.RukuState.hasMany(db.ruku);
db.ruku.belongsTo(db.RukuState);
//RukuState?????????????????????
db.RukuState.belongsToMany(db.dept, {
  through: "RukuState_dept",
  foreignKey: "RukuStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.RukuState, {
  through: "RukuState_dept",
  foreignKey: "deptId",
  otherKey: "RukuStateId"
});
//RukuStatelog????????????user???
db.user.hasMany(db.RukuStatelog, {
  foreignKey: "userId",
});
db.RukuStatelog.belongsTo(db.user);
//JinduStatelog????????????ruku???
db.ruku.hasMany(db.RukuStatelog, {
  foreignKey: "rukuId",
});
db.RukuStatelog.belongsTo(db.ruku);
//????????????RukuState???
db.RukuState.hasMany(db.RukuStatelog, {
  foreignKey: "oldstateid"
});
db.RukuState.hasMany(db.RukuStatelog, {
  foreignKey: "newstateid"
});
//???????????????????????????
db.operate.hasMany(db.RukuStatelog, {
  foreignKey: "operateId",
});

//chuku??????ChukuState?????????
db.ChukuState.hasMany(db.chuku);
db.chuku.belongsTo(db.ChukuState);
//ChukuState?????????????????????
db.ChukuState.belongsToMany(db.dept, {
  through: "ChukuState_dept",
  foreignKey: "ChukuStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.ChukuState, {
  through: "ChukuState_dept",
  foreignKey: "deptId",
  otherKey: "ChukuStateId"
});
//ChukuStatelog????????????user???
db.user.hasMany(db.ChukuStatelog, {
  foreignKey: "userId",
});
db.ChukuStatelog.belongsTo(db.user);
//ChukuStatelog????????????ruku???
db.chuku.hasMany(db.ChukuStatelog, {
  foreignKey: "chukuId",
});
db.ChukuStatelog.belongsTo(db.chuku);
//????????????RukuState???
db.ChukuState.hasMany(db.ChukuStatelog, {
  foreignKey: "oldstateid"
});
db.ChukuState.hasMany(db.ChukuStatelog, {
  foreignKey: "newstateid"
});
//???????????????????????????
db.operate.hasMany(db.ChukuStatelog, {
  foreignKey: "operateId",
});

//kucun??????KucunState?????????
db.KucunState.hasMany(db.kucun);
db.kucun.belongsTo(db.KucunState);
//KucunState?????????????????????
db.KucunState.belongsToMany(db.dept, {
  through: "KucunState_dept",
  foreignKey: "KucunStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.KucunState, {
  through: "KucunState_dept",
  foreignKey: "deptId",
  otherKey: "KucunStateId"
});
//KucunStatelog????????????user???
db.user.hasMany(db.KucunStatelog, {
  foreignKey: "userId",
});
db.KucunStatelog.belongsTo(db.user);
//KucunStatelog????????????kucun???
db.kucun.hasMany(db.KucunStatelog, {
  foreignKey: "kucunId",
});
db.KucunStatelog.belongsTo(db.kucun);
//????????????KucunState???
db.KucunState.hasMany(db.KucunStatelog, {
  foreignKey: "oldstateid"
});
db.KucunState.hasMany(db.KucunStatelog, {
  foreignKey: "newstateid"
});
//???????????????????????????
db.operate.hasMany(db.KucunStatelog, {
  foreignKey: "operateId",
});


//wuliao??????WuliaoState?????????
db.WuliaoState.hasMany(db.wuliao);
db.wuliao.belongsTo(db.WuliaoState);
//WuliaoState?????????????????????
db.WuliaoState.belongsToMany(db.dept, {
  through: "WuliaoState_dept",
  foreignKey: "WuliaoStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.WuliaoState, {
  through: "WuliaoState_dept",
  foreignKey: "deptId",
  otherKey: "WuliaoStateId"
});
//WuliaoStatelog????????????user???
db.user.hasMany(db.WuliaoStatelog, {
  foreignKey: "userId",
});
db.WuliaoStatelog.belongsTo(db.user);
//WuliaoStatelog????????????wuliao???
db.wuliao.hasMany(db.WuliaoStatelog, {
  foreignKey: "wuliaoId",
});
db.WuliaoStatelog.belongsTo(db.wuliao);
//????????????WuliaoState???
db.WuliaoState.hasMany(db.WuliaoStatelog, {
  foreignKey: "oldstateid"
});
db.WuliaoState.hasMany(db.WuliaoStatelog, {
  foreignKey: "newstateid"
});
//???????????????????????????
db.operate.hasMany(db.WuliaoStatelog, {
  foreignKey: "operateId",
});


//danwei??????DanweiState?????????
db.DanweiState.hasMany(db.danwei);
db.danwei.belongsTo(db.DanweiState);
//DanweiState?????????????????????
db.DanweiState.belongsToMany(db.dept, {
  through: "DanweiState_dept",
  foreignKey: "DanweiStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.DanweiState, {
  through: "DanweiState_dept",
  foreignKey: "deptId",
  otherKey: "DanweiStateId"
});
//DanweiStatelog????????????user???
db.user.hasMany(db.DanweiStatelog, {
  foreignKey: "userId",
});
db.DanweiStatelog.belongsTo(db.user);
//DanweiStatelog????????????danwei???
db.danwei.hasMany(db.DanweiStatelog, {
  foreignKey: "danweiId",
});
db.DanweiStatelog.belongsTo(db.danwei);
//????????????DanweiState???
db.DanweiState.hasMany(db.DanweiStatelog, {
  foreignKey: "oldstateid"
});
db.DanweiState.hasMany(db.DanweiStatelog, {
  foreignKey: "newstateid"
});
//???????????????????????????
db.operate.hasMany(db.DanweiStatelog, {
  foreignKey: "operateId",
});

//wuliaotype??????WuliaoTypeState?????????
db.WuliaoTypeState.hasMany(db.wuliaotype);
db.wuliaotype.belongsTo(db.WuliaoTypeState);
//WuliaoTypeState?????????????????????
db.WuliaoTypeState.belongsToMany(db.dept, {
  through: "WuliaoTypeState_dept",
  foreignKey: "WuliaoTypeStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.WuliaoTypeState, {
  through: "WuliaoTypeState_dept",
  foreignKey: "deptId",
  otherKey: "WuliaoTypeStateId"
});
//WuliaoTypeStatelog????????????user???
db.user.hasMany(db.WuliaoTypeStatelog, {
  foreignKey: "userId",
});
db.WuliaoTypeStatelog.belongsTo(db.user);
//WuliaoStatelog????????????wuliao???
db.wuliaotype.hasMany(db.WuliaoTypeStatelog, {
  foreignKey: "wuliaotypeId",
});
db.WuliaoTypeStatelog.belongsTo(db.wuliaotype);
//????????????WuliaoTypeState???
db.WuliaoTypeState.hasMany(db.WuliaoTypeStatelog, {
  foreignKey: "oldstateid"
});
db.WuliaoTypeState.hasMany(db.WuliaoTypeStatelog, {
  foreignKey: "newstateid"
});
//???????????????????????????
db.operate.hasMany(db.WuliaoTypeStatelog, {
  foreignKey: "operateId",
});

//???????????????????????????
db.caigou.hasMany(db.Rongzi, {
  foreignKey: "caigouId",
});
//???????????????????????????
db.Fukuan.hasMany(db.Fukuanwuliao, {
  foreignKey: "fukuanId",
});
//zhizao??????add?????????
db.zhizao.hasMany(db.addwuliao, {
  foreignKey: "zhizaoId",
});
//jindu???????????????
db.jindu.hasMany(db.addjinduwuliao, {
  foreignKey: "jinduId",
});
//jianzhu??????add?????????
db.jianzhu.hasMany(db.Addjianzhuwuliao, {
  foreignKey: "jianzhuId",
});

//fukuan??????FukuanState?????????
db.FukuanState.hasMany(db.Fukuan);
db.Fukuan.belongsTo(db.FukuanState);
//FukuanState?????????????????????
db.FukuanState.belongsToMany(db.dept, {
  through: "FukuanState_dept",
  foreignKey: "FukuanStateId",
  otherKey: "deptId"
});
db.dept.belongsToMany(db.FukuanState, {
  through: "FukuanState_dept",
  foreignKey: "deptId",
  otherKey: "FukuanStateId"
});
//FukuanStatelog????????????user???
db.user.hasMany(db.FukuanStatelog, {
  foreignKey: "userId",
});
db.FukuanStatelog.belongsTo(db.user);
//FukuanStatelog????????????Fukuan???
db.Fukuan.hasMany(db.FukuanStatelog, {
  foreignKey: "fukuanId",
});
db.FukuanStatelog.belongsTo(db.Fukuan);
//????????????FukuanState???
db.FukuanState.hasMany(db.FukuanStatelog, {
  foreignKey: "oldstateid"
});
db.FukuanState.hasMany(db.FukuanStatelog, {
  foreignKey: "newstateid"
});
//???????????????????????????
db.operate.hasMany(db.FukuanStatelog, {
  foreignKey: "operateId",
});
//?????????????????????
db.caigou.hasMany(db.CaigouImage, {
  foreignKey: "caigouId",
});
db.CaigouImage.belongsTo(db.caigou);
//?????????????????????
db.Fukuan.hasMany(db.FukuanImage, {
  foreignKey: "fukuanId",
});
db.FukuanImage.belongsTo(db.Fukuan);
//?????????????????????
db.huankuan.hasMany(db.HuankuanImage, {
  foreignKey: "huankuanId",
});
db.HuankuanImage.belongsTo(db.huankuan);



//????????????????????????????????????user???role????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
//db.ROLES = ["user", "admin", "moderator"];
module.exports = db;