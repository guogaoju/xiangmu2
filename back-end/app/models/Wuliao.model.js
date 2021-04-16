module.exports = (sequelize, Sequelize) => {
    const Wuliao = sequelize.define("wuliao", {
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
    return Wuliao;
  };