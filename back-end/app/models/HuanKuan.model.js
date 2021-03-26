module.exports = (sequelize, Sequelize) => {
    const HuanKuan = sequelize.define("huankuan", {
        
        item_name: {
            type: Sequelize.STRING
          },
          total_quota: {
            type: Sequelize.STRING
          },
          money: {
            type: Sequelize.STRING
          },
          huan_money: {
            type: Sequelize.STRING
          },
          huan_money1: {
            type: Sequelize.STRING
          },
          huan_stream: {
            type: Sequelize.STRING
          },
          current_process: {
            type: Sequelize.STRING
          },
        });
    return HuanKuan;
  };