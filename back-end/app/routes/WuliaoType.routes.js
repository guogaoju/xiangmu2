module.exports = app => {
    const wuliaotype = require("../controllers/WuliaoType.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", wuliaotype.create);
  
    // Retrieve all Tutorials
    router.get("/", wuliaotype.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", wuliaotype.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", wuliaotype.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", wuliaotype.delete);
  
    // Delete all Tutorials
    router.delete("/", wuliaotype.deleteAll);
  
    app.use('/api/WuliaoType', router);
  };