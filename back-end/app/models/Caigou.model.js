module.exports = (sequelize, Sequelize) => {
    const Caigou = sequelize.define("caigou", {
        
        qiye_name : {
            type: Sequelize.STRING
          },
          item_name: {
            type: Sequelize.STRING
          },
          money: {
            type: Sequelize.STRING
          },
          totalmoney: {
            type: Sequelize.STRING
          },
          statement: {
            type: Sequelize.STRING
          },
          delivery_note: {
            type: Sequelize.STRING
          },
          bill: {
            type: Sequelize.STRING
          },
          money1: {
            type: Sequelize.STRING
          },
          money2: {
            type: Sequelize.STRING
          },
          money3: {
            type: Sequelize.STRING
          },
          money4: {
            type: Sequelize.STRING
          },
          current_process: {
            type: Sequelize.STRING
          },
        });
    return Caigou;
  };