module.exports = app => {
    const pingji = require("../controllers/Pingji.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", pingji.create);
  
    // Retrieve all Tutorials
    router.get("/", pingji.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", pingji.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", pingji.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", pingji.delete);
  
    // Delete all Tutorials
    // router.delete("/", hexin.deleteAll);
  
    app.use('/api/Pingji', router);
  };