module.exports = (sequelize, Sequelize) => {
    const Daiban = sequelize.define("Daiban", {
    deptId: {
            type: Sequelize.INTEGER
          },
      name: {
        type: Sequelize.STRING
      },
      link: {
        type: Sequelize.STRING
      },
      sum: {
        type: Sequelize.STRING
      },
    });
    return Daiban;
  };