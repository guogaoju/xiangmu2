module.exports = app => {
    const caigouwuliao = require("../controllers/CaiGouwuliao.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", caigouwuliao.create);
  
    // Retrieve all Tutorials
    router.get("/", caigouwuliao.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", caigouwuliao.findOne);
  
    // Delete all Tutorials
    // router.delete("/", hexin.deleteAll);
  
    app.use('/api/CaiGouwuliao', router);
  };