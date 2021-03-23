module.exports = (sequelize, Sequelize) => {
    const Danwei = sequelize.define("danwei", {
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      remarks: {
        type: Sequelize.STRING
      },
      current_process: {
        type: Sequelize.STRING
      },
    });
    return Danwei;
  };