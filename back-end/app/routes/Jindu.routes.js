module.exports = app => {
    const jindu = require("../controllers/Jindu.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", jindu.create);
  
    // Retrieve all Tutorials
    router.get("/", jindu.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", jindu.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", jindu.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", jindu.delete);
  
    // Delete all Tutorials
    // router.delete("/", hexin.deleteAll);
  
    app.use('/api/Jindu', router);
  };