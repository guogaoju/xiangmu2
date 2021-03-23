module.exports = app => {
    const qiye = require("../controllers/Qiye.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", qiye.create);
  
    // Retrieve all Tutorials
    router.get("/", qiye.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", qiye.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", qiye.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", qiye.delete);
  
    // Delete all Tutorials
    router.delete("/", qiye.deleteAll);
  
    app.use('/api/Qiye', router);
  };