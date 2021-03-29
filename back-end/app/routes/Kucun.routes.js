module.exports = app => {
    const kucun = require("../controllers/Kucun.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", kucun.create);
  
    // Retrieve all Tutorials
    router.get("/", kucun.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", kucun.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", kucun.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", kucun.delete);
  
    // Delete all Tutorials
    // router.delete("/", hexin.deleteAll);
  
    app.use('/api/Kucun', router);
  };