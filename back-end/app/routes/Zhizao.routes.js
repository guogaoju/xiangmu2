module.exports = app => {
    const zhizao = require("../controllers/Zhizao.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", zhizao.create);
  
    // Retrieve all Tutorials
    router.get("/", zhizao.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", zhizao.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", zhizao.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", zhizao.delete);
  
    // Delete all Tutorials
    // router.delete("/", hexin.deleteAll);
  
    app.use('/api/Zhizao', router);
  };