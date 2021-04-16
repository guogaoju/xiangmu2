module.exports = app => {
    const wuliao = require("../controllers/Wuliao.controller.js");
    const uploadController = require("../controllers/upload");
    const upload = require("../middleware/upload");
    var router = require("express").Router();
    
    //新增
    router.post("/", wuliao.create);
    
    router.post("/upload", upload.single("file"), wuliao.create);

    //查找所有
    router.get("/", wuliao.findAll);
  
    //根据id查询
    router.get("/:id", wuliao.findOne);
  
    //修改
    router.put("/:id", wuliao.update);
  
    //删除
    router.delete("/:id", wuliao.delete);
  
    app.use('/api/Wuliao', router);
  };