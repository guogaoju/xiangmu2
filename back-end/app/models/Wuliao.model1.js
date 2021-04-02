module.exports = (sequelize, Sequelize) => {
    const Wuliao1 = sequelize.define("wuliao1", {
      name: {
            type: Sequelize.STRING
          },
          Specification: {
            type: Sequelize.STRING
          },
          wuliaotype: {
            type: Sequelize.STRING
          },
          danwei: {
            type: Sequelize.STRING
          },
          avatar: {
            type: Sequelize.STRING
          },
          remarks: {
            type: Sequelize.STRING
          },
          current_process: {
            type: Sequelize.STRING
          },
        });
    return Wuliao1;
  };