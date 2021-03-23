module.exports = (sequelize, Sequelize) => {
    const Pingji = sequelize.define("pingji", {
        
      
      id: {
        type: Sequelize.INTEGER  ,primaryKey: true
      },
      supplier_name: {
            type: Sequelize.STRING
          },
          year: {
            type: Sequelize.STRING
          },
          quarter: {
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
        },
        {
          timestamps: false,  //去除createAt updateAt
          // freezeTableName: true,  使用自定义表名
          // // 实例对应的表名
          // tableName: 'user',
          // // 如果需要sequelize帮你维护createdAt,updatedAt和deletedAt必须先启用timestamps功能
          // // 将createdAt对应到数据库的created_at字段
          // createdAt: 'created_at',
          // // 将updatedAt对应到数据库的updated_at字段
          // updatedAt: 'updated_at',
          // //And deletedAt to be called destroyTime (remember to enable paranoid for this to work)
          // deletedAt: false, //'deleted_at',
          // //删除数据时不删除数据，而是更新deleteAt字段 如果需要设置为true，则上面的deleteAt字段不能为false，也就是说必须启用
          // paranoid: false
        });
    return Pingji;
  };