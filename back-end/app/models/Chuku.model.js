module.exports = (sequelize, Sequelize) => {
    const Chuku = sequelize.define("chuku", {
        
        item_name: {
            type: Sequelize.STRING
          },
          goods_name: {
            type: Sequelize.STRING
          },
          goods_danwei: {
            type: Sequelize.STRING
          },
          chuku_number: {
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
    return Chuku;
  };