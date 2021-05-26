module.exports = (sequelize, Sequelize) => {
    const Dept = sequelize.define("depts", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      }
        });
    return Dept;
  };