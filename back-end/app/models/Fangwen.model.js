module.exports = (sequelize, Sequelize) => {
    const Fangwen = sequelize.define("fangwen", {
      qiye_name: {
            type: Sequelize.STRING
          },
          visit_type: {
            type: Sequelize.STRING
          },
          visit_time: {
            type: Sequelize.STRING
          },
          contract: {
            type: Sequelize.STRING
          },
          remarks: {
            type: Sequelize.STRING
          },
          current_process: {
            type: Sequelize.STRING
          },
        });
    return Fangwen;
  };