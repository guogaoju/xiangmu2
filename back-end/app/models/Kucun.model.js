module.exports = (sequelize, Sequelize) => {
    const Kucun = sequelize.define("kucun", {
        
        item_name: {
            type: Sequelize.STRING
          },
          goods_type: {
            type: Sequelize.STRING
          },
          goods_danwei: {
            type: Sequelize.STRING
          },
          before_stock: {
            type: Sequelize.STRING
          },
          after_stock: {
            type: Sequelize.STRING
          },
          current_process: {
            type: Sequelize.STRING
          },
        });
    return Kucun;
  };