module.exports = (sequelize, Sequelize) => {
    const Dept = sequelize.define("dept", {
        
        name: {
            type: Sequelize.STRING
          },
        });
    return Dept;
  };