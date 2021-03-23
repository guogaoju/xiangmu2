module.exports = app => {
    const danwei = require("../controllers/Danwei.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", danwei.create);
  
    // Retrieve all Tutorials
    router.get("/", danwei.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", danwei.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", danwei.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", danwei.delete);
  
    // Delete all Tutorials
    router.delete("/", danwei.deleteAll);
  
    app.use('/api/Danwei', router);
  };