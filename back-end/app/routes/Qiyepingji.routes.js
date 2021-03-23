module.exports = app => {
    const qiyepingji = require("../controllers/Qiyepingji.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", qiyepingji.create);
  
    // Retrieve all Tutorials
    router.get("/", qiyepingji.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", qiyepingji.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", qiyepingji.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", qiyepingji.delete);
  
    // Delete all Tutorials
    // router.delete("/", hexin.deleteAll);
  
    app.use('/api/QiyePingji', router);
  };