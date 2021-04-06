module.exports = app => {
    const caigou = require("../controllers/Caigou.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", caigou.create);
  
    //查找所有
    router.get("/", caigou.findAll);
  
    //根据id查询
    router.get("/:id", caigou.findOne);
  
    //修改
    router.put("/:id", caigou.update);
  
    //删除
    router.delete("/:id", caigou.delete);

    app.use('/api/Caigou', router);
  };