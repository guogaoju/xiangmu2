module.exports = (sequelize, Sequelize) => {
    const QiyeState = sequelize.define("qiyeState", {
      nodeName: {
        type: Sequelize.STRING
      },
      nodebutton: {
        type: Sequelize.STRING
      },
      nextStateid: {
        type: Sequelize.INTEGER
      }
    });
  
    return QiyeState;
  };