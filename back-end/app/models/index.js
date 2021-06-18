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

//记录表和user表
db.user.hasMany(db.Statelog, {
  foreignKey: "userId",
});
db.Statelog.belongsTo(db.user);
//记录表和qiye表
db.qiye.hasMany(db.Statelog, {
  foreignKey: "qiyeId",
});
db.Statelog.belongsTo(db.qiye);
//记录表和State表
db.QiyeState.hasMany(db.Statelog, {
  as:"oldstate",
  foreignKey: "oldstateid"
});
db.QiyeState.hasMany(db.Statelog, {
  as:"newstate",
  foreignKey: "newstateid"
});
//状态表和部门表
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
//记录表和操作类型表
db.operate.hasMany(db.Statelog, {
  foreignKey: "operateId",
});
db.Statelog.belongsTo(db.operate);


//企业评级表和企业评级状态表
db.QiyepingjiState.hasMany(db.qiyepingji);
db.qiyepingji.belongsTo(db.QiyepingjiState);
//企业评级状态表和部门表
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
//qiyepingji记录表和user表
db.user.hasMany(db.QiyepingjiStatelog, {
  foreignKey: "userId",
});
db.QiyepingjiStatelog.belongsTo(db.user);
//记录表和qiyepingji表
db.qiyepingji.hasMany(db.QiyepingjiStatelog, {
  foreignKey: "qiyepingjiId",
});
db.QiyepingjiStatelog.belongsTo(db.qiyepingji);
//记录表和qiyepingjiState表
db.QiyepingjiState.hasMany(db.QiyepingjiStatelog, {
  foreignKey: "oldstateid"
});
db.QiyeState.hasMany(db.QiyepingjiStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.QiyepingjiStatelog, {
  foreignKey: "operateId",
});


//finance表和finance状态表
db.FinanceState.hasMany(db.finance);
db.finance.belongsTo(db.FinanceState);
//finance状态表和部门表
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
//FinanceStatelog记录表和user表
db.user.hasMany(db.FinanceStatelog, {
  foreignKey: "userId",
});
db.FinanceStatelog.belongsTo(db.user);
//记录表和finance表
db.finance.hasMany(db.FinanceStatelog, {
  foreignKey: "financeId",
});
db.FinanceStatelog.belongsTo(db.finance);
//记录表和qiyepingjiState表
db.FinanceState.hasMany(db.FinanceStatelog, {
  foreignKey: "oldstateid"
});
db.FinanceState.hasMany(db.FinanceStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.FinanceStatelog, {
  foreignKey: "operateId",
});


//fangwen表和fangwen状态表
db.FangwenState.hasMany(db.fangwen);
db.fangwen.belongsTo(db.FangwenState);
//fangwen状态表和部门表
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
//fangwenStatelog记录表和user表
db.user.hasMany(db.FangwenStatelog, {
  foreignKey: "userId",
});
db.FangwenStatelog.belongsTo(db.user);
//记录表和fangwen表
db.fangwen.hasMany(db.FangwenStatelog, {
  foreignKey: "fangwenId",
});
db.FangwenStatelog.belongsTo(db.fangwen);
//记录表和fangwenState表
db.FangwenState.hasMany(db.FangwenStatelog, {
  foreignKey: "oldstateid"
});
db.FangwenState.hasMany(db.FangwenStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.FangwenStatelog, {
  foreignKey: "operateId",
});


//Cailiaogys表和Cailiao状态表
db.CailiaoState.hasMany(db.cailiaogys);
db.cailiaogys.belongsTo(db.CailiaoState);
//cailiaogys状态表和部门表
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
//CailiaoStatelog记录表和user表
db.user.hasMany(db.CailiaoStatelog, {
  foreignKey: "userId",
});
db.CailiaoStatelog.belongsTo(db.user);
//CailiaoStatelog记录表和cailiaogys表
db.cailiaogys.hasMany(db.CailiaoStatelog, {
  foreignKey: "cailiaogyId",
});
db.CailiaoStatelog.belongsTo(db.cailiaogys);
//记录表和qiyepingjiState表
db.CailiaoState.hasMany(db.CailiaoStatelog, {
  foreignKey: "oldstateid"
});
db.CailiaoState.hasMany(db.CailiaoStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.CailiaoStatelog, {
  foreignKey: "operateId",
});


//Pingji表和PingjiState状态表
db.PingjiState.hasMany(db.pingji);
db.pingji.belongsTo(db.PingjiState);
//cailiaogys状态表和部门表
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
//CailiaoStatelog记录表和user表
db.user.hasMany(db.PingjiStatelog, {
  foreignKey: "userId",
});
db.PingjiStatelog.belongsTo(db.user);
//CailiaoStatelog记录表和cailiaogys表
db.pingji.hasMany(db.PingjiStatelog, {
  foreignKey: "pingjiId",
});
db.PingjiStatelog.belongsTo(db.pingji);
//记录表和qiyepingjiState表
db.PingjiState.hasMany(db.PingjiStatelog, {
  foreignKey: "oldstateid"
});
db.PingjiState.hasMany(db.PingjiStatelog, {
  foreignKey: "newstateid"
});
//记录表和操作类型表
db.operate.hasMany(db.PingjiStatelog, {
  foreignKey: "operateId",
});
//这是为了在中间件里面验证user的role是否存在，这样写是不对的，应该根据数据库里的内容验证，而不是根据这个提前定义好的静态数组
//db.ROLES = ["user", "admin", "moderator"];
module.exports = db;