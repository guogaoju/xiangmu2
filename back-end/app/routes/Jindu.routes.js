module.exports = app => {
    const jindu = require("../controllers/Jindu.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", jindu.create);
  
    //查找所有
    router.get("/", jindu.findAll);

    //根据id查询
    router.get("/:id", jindu.findOne);
  
    //修改
    router.put("/:id", jindu.update);
  
    //删除
    router.delete("/:id", jindu.delete);
  
    app.use('/api/Jindu', router);
  };