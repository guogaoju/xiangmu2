module.exports = app => {
    const finance = require("../controllers/Finance.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", finance.create);
  
    // Retrieve all Tutorials
    router.get("/", finance.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", finance.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", finance.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", finance.delete);
  
    // Delete all Tutorials
    // router.delete("/", hexin.deleteAll);
  
    app.use('/api/Finance', router);
  };