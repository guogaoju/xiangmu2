module.exports = app => {
    const huankuan = require("../controllers/HuanKuan.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", huankuan.create);
  
    // Retrieve all Tutorials
    router.get("/", huankuan.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", huankuan.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", huankuan.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", huankuan.delete);
  
    // Delete all Tutorials
    // router.delete("/", hexin.deleteAll);
  
    app.use('/api/HuanKuan', router);
  };