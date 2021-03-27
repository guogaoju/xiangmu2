module.exports = (sequelize, Sequelize) => {
    const Addwuliao = sequelize.define("addwuliao", {
        
      name: {
            type: Sequelize.STRING
          },
          wname: {
            type: Sequelize.STRING
          },
          shu: {
            type: Sequelize.STRING
          },
          shu1: {
            type: Sequelize.STRING
          },
          shu2: {
            type: Sequelize.STRING
          },
          output_value: {
            type: Sequelize.STRING
          },
          wancheng: {
            type: Sequelize.STRING
          },
          stock: {
            type: Sequelize.STRING
          },
        });
    return Addwuliao;
  };