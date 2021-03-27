module.exports = app => {
    const jianzhu = require("../controllers/Jianzhu.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", jianzhu.create);
  
    // Retrieve all Tutorials
    router.get("/", jianzhu.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", jianzhu.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", jianzhu.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", jianzhu.delete);
  
    // Delete all Tutorials
    // router.delete("/", hexin.deleteAll);
  
    app.use('/api/Jianzhu', router);
  };