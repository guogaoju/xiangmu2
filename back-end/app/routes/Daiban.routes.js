module.exports = app => {
    const Daiban = require("../controllers/Daiban.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", Daiban.create);
  
    //查找所有
    router.get("/", Daiban.findAll);
  
    //根据id查询
    router.get("/:deptId:name", Daiban.findDaiban);
    router.get("/jian/:deptId:name", Daiban.findDaiban1);
    //修改
    router.put("/:id", Daiban.update);
  
    //删除
    router.delete("/:id", Daiban.delete);
  
    app.use('/api/Daiban', router);
  };