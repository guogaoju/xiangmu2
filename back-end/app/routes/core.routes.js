module.exports = app => {
    const hexin = require("../controllers/core.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", hexin.create);
  
    // Retrieve all Tutorials
    router.get("/", hexin.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", hexin.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", hexin.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", hexin.delete);
  
    // Delete all Tutorials
    router.delete("/", hexin.deleteAll);
  
    app.use('/api/Hexin', router);
  };