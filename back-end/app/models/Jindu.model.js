module.exports = (sequelize, Sequelize) => {
    const Jindu = sequelize.define("jindu", {
        
        item_name: {
            type: Sequelize.STRING
          },
          before_jindu: {
            type: Sequelize.STRING
          },
          after_jindu: {
            type: Sequelize.STRING
          },
          photo: {
            type: Sequelize.STRING
          },
          current_process: {
            type: Sequelize.STRING
          },
        },{
          sequelize,
          paranoid: true,
          // If you want to give a custom name to the deletedAt column
          deletedAt: 'destroyTime'
        });
    return Jindu;
  };