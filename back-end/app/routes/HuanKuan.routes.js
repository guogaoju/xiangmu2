module.exports = app => {
    const huankuan = require("../controllers/HuanKuan.controller.js");
  
    var router = require("express").Router();
  
    //新增
    router.post("/", huankuan.create);
  
    //查找所有
    router.get("/", huankuan.findAll);
  
    //根据id查询
    router.get("/:id", huankuan.findOne);
  
    //修改
    router.put("/:id", huankuan.update);
  
    //删除
    router.delete("/:id", huankuan.delete);
  
  
    app.use('/api/HuanKuan', router);
  };