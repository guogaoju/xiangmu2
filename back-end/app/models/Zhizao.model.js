module.exports = (sequelize, Sequelize) => {
    const Zhizao = sequelize.define("zhizao", {
        
        qiye_name: {
            type: Sequelize.STRING
          },
          item_name: {
            type: Sequelize.STRING
          },
          time: {
            type: Sequelize.STRING
          },
          jindu: {
            type: Sequelize.STRING
          },
          item_money: {
            type: Sequelize.STRING
          },
          total_quota: {
            type: Sequelize.STRING
          },
          money: {
            type: Sequelize.STRING
          },
          interest: {
            type: Sequelize.STRING
          },
          Return: {
            type: Sequelize.STRING
          },
          huan_money: {
            type: Sequelize.STRING
          },
          fax: {
            type: Sequelize.STRING
          },
          current_process: {
            type: Sequelize.STRING
          },
        });
    return Zhizao;
  };