module.exports = app => {
    const chuku = require("../controllers/Chuku.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", chuku.create);
  
    // Retrieve all Tutorials
    router.get("/", chuku.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", chuku.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", chuku.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", chuku.delete);
  
    // Delete all Tutorials
    // router.delete("/", hexin.deleteAll);
  
    app.use('/api/Chuku', router);
  };