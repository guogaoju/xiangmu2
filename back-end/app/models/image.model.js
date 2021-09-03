module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("image", {
      name: {
        type: DataTypes.STRING,
      },
      // logid:{
      //   type: DataTypes.INTEGER,
      // },
      path:{
        type: DataTypes.STRING,
      }, 
    });
    return Image;
  };