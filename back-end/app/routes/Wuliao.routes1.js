module.exports = app => {
    const wuliao1 = require("../controllers/Wuliao.controller1.js");
    const uploadController = require("../controllers/upload");
    const upload = require("../middleware/upload");
    var router = require("express").Router();
    


    // Create a new Tutorial
    router.post("/", wuliao1.create);
    // router.post("/upload", upload.single("file"), wuliao.uploadFiles);
    // Retrieve all Tutorials
    router.get("/", wuliao1.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", wuliao1.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", wuliao1.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", wuliao1.delete);
  
    // Delete all Tutorials
    router.delete("/", wuliao1.deleteAll);
  
    app.use('/api/Wuliao1', router);
  };