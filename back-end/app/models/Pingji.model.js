module.exports = (sequelize, Sequelize) => {
    const Pingji = sequelize.define("pingji", {
      supplier_name: {
            type: Sequelize.STRING
          },
          year: {
            type: Sequelize.STRING
          },
          quarter: {
            type: Sequelize.STRING
          },
          quantify_points: {
            type: Sequelize.STRING
          },
          qualitative_points: {
            type: Sequelize.STRING
          },
          total_points: {
            type: Sequelize.STRING
          },
          current_process: {
            type: Sequelize.STRING
          },
        });
    return Pingji;
  };