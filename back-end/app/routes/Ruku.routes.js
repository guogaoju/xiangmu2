module.exports = app => {
    const ruku = require("../controllers/Ruku.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", ruku.create);
  
    // Retrieve all Tutorials
    router.get("/", ruku.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", ruku.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", ruku.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", ruku.delete);
  
    // Delete all Tutorials
    // router.delete("/", hexin.deleteAll);
  
    app.use('/api/Ruku', router);
  };