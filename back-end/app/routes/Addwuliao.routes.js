module.exports = app => {
    const addwuliao = require("../controllers/addWuliao.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", addwuliao.create);
  
    // Retrieve all Tutorials
    router.get("/", addwuliao.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", addwuliao.findOne);
  
    // Delete all Tutorials
    // router.delete("/", hexin.deleteAll);
  
    app.use('/api/Addwuliao', router);
  };