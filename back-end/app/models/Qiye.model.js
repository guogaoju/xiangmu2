module.exports = (sequelize, Sequelize) => {
    const Qiye = sequelize.define("qiye", {
        
      
      id: {
        type: Sequelize.INTEGER  ,primaryKey: true
      },
      register_name: {
            type: Sequelize.STRING
          },
          introduction: {
            type: Sequelize.STRING
          },
          trade: {
            type: Sequelize.STRING
          },
          credit_code: {
            type: Sequelize.STRING
          },
          juridical_person: {
            type: Sequelize.STRING
          },
          register_money: {
            type: Sequelize.STRING
          },
          hexinqiye: {
            type: Sequelize.STRING
          },
          address: {
            type: Sequelize.STRING
          },
          business_term: {
            type: Sequelize.STRING
          },
          business_scope: {
            type: Sequelize.STRING
          },
          post_code: {
            type: Sequelize.STRING
          },
          phone: {
            type: Sequelize.STRING
          },
          email: {
            type: Sequelize.STRING
          },
          fax: {
            type: Sequelize.STRING
          },
          account_type: {
            type: Sequelize.STRING
          },
          bank_name: {
            type: Sequelize.STRING
          },
          bank_card: {
            type: Sequelize.STRING
          },
          create_time: {
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
    return Qiye;
  };