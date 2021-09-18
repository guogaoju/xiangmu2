module.exports = app => {
    const jindu = require("../controllers/Jindu.controller.js");
    const upload = require("../middleware/upload");
    var router = require("express").Router();
  
    //新增
    router.post("/", jindu.create);
  
    //上传图片后向前端返回文件路径，前端收到这个路径以后和别的表单数据一起提交
    router.post("/upload", upload.single("file"), (req,res) => {
      // 需要返回图片的访问地址    域名+文件名
      const url = "http://localhost:8080/" +req.file.filename
       //服务器
      //const url = "http://106.15.5.29:8082/" +req.file.filename
      res.json({url})
      // res.json(req.file.filename)
    });
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