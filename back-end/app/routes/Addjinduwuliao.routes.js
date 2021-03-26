module.exports = app => {
    const addjinduwuliao = require("../controllers/addjinduwuliao.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", addjinduwuliao.create);
  
    // Retrieve all Tutorials
    router.get("/", addjinduwuliao.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", addjinduwuliao.findOne);
  
    // Delete all Tutorials
    // router.delete("/", hexin.deleteAll);
  
    app.use('/api/Addjinduwuliao', router);
  };