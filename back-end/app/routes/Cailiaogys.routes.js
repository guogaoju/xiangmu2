module.exports = app => {
    const cailiaogys = require("../controllers/Cailiaogys.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", cailiaogys.create);
  
    // Retrieve all Tutorials
    router.get("/", cailiaogys.findAll);
  
    // Retrieve all published Tutorials
    // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", cailiaogys.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", cailiaogys.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", cailiaogys.delete);
  
    // Delete all Tutorials
    // router.delete("/", hexin.deleteAll);
  
    app.use('/api/Cailiaogys', router);
  };