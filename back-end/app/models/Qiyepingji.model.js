module.exports = (sequelize, Sequelize) => {
    const QiyePingji = sequelize.define("qiyepingji", {
      qiye_name: {
            type: Sequelize.STRING
          },
          trade: {
            type: Sequelize.STRING
          },
          year: {
            type: Sequelize.STRING
          },
          quarter: {
            type: Sequelize.STRING
          },
          score1: {
            type: Sequelize.STRING
          },
          score2: {
            type: Sequelize.STRING
          },
          score3: {
            type: Sequelize.STRING
          },
          score4: {
            type: Sequelize.STRING
          },
          score5: {
            type: Sequelize.STRING
          },
          score6: {
            type: Sequelize.STRING
          },
          score7: {
            type: Sequelize.STRING
          },
          score8: {
            type: Sequelize.STRING
          },
          score9: {
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
    return QiyePingji;
  };