module.exports = app => {
    const wuliao = require("../controllers/Wuliao.controller.js");
    const uploadController = require("../controllers/upload");
    const upload = require("../middleware/upload");
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", wuliao.create);
    router.post("/upload", upload.single("file"), uploadController.uploadFiles);
    // Retrieve all Tutorials
    router.get("/", wuliao.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", wuliao.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", wuliao.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", wuliao.delete);
  
    // Delete all Tutorials
    router.delete("/", wuliao.deleteAll);
  
    app.use('/api/Wuliao', router);
  };