module.exports = (sequelize, Sequelize) => {
    const FangwenState = sequelize.define("FangwenState", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      nodeName: {
        type: Sequelize.STRING
      },
      nodebutton: {
        type: Sequelize.STRING
      },
      nextStateid: {
        type: Sequelize.INTEGER
      },
      lastone:{
        type: Sequelize.INTEGER,
      }
      
    },{timestamps: false});
    return FangwenState;
  };