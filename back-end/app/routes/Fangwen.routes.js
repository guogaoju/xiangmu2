module.exports = app => {
    const fangwen = require("../controllers/Fangwen.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", fangwen.create);
  
    // Retrieve all Tutorials
    router.get("/", fangwen.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", fangwen.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", fangwen.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", fangwen.delete);
  
    // Delete all Tutorials
    router.delete("/", fangwen.deleteAll);
  
    app.use('/api/Fangwen', router);
  };