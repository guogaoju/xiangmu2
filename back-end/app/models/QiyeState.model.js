module.exports = (sequelize, Sequelize) => {
    const QiyeState = sequelize.define("qiyeState", {
      nodeName: {
        type: Sequelize.STRING
      },
    //   nodeDeptname: {
    //     type: Sequelize.STRING
    //   }
    });
  
    return QiyeState;
  };