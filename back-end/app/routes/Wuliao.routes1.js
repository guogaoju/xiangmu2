module.exports = app => {
    const wuliao1 = require("../controllers/Wuliao.controller1.js");
    const uploadController = require("../controllers/upload");
    const upload = require("../middleware/upload");
    var router = require("express").Router();
    
    //新增
    router.post("/", wuliao1.create);
    // router.post("/upload", upload.single("file"), wuliao.uploadFiles);

    //查找所有
    router.get("/", wuliao1.findAll);
  
    //根据id查询
    router.get("/:id", wuliao1.findOne);
  
    //修改
    router.put("/:id", wuliao1.update);
  
    //删除
    router.delete("/:id", wuliao1.delete);
  
    app.use('/api/Wuliao1', router);
  };