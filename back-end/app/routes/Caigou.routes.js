module.exports = app => {
    const caigou = require("../controllers/Caigou.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", caigou.create);
  
    // Retrieve all Tutorials
    router.get("/", caigou.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", caigou.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", caigou.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", caigou.delete);
  
    // Delete all Tutorials
    // router.delete("/", hexin.deleteAll);
  
    app.use('/api/Caigou', router);
  };