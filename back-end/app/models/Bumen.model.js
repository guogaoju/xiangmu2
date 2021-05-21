module.exports = (sequelize, Sequelize) => {
    const Bumen = sequelize.define("bumen", {
        
        name: {
            type: Sequelize.STRING
          },
          username: {
            type: Sequelize.STRING
          },
          dept: {
            type: Sequelize.STRING
          },
        });
    return Bumen;
  };