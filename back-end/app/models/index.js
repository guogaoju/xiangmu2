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
module.exports = db;