var db = require("../models/index");

module.exports = function(app){
  // Route to get all the profile and send the json to the api route
  app.get("/api/profile", function(req, res){
    db.Profile.findAll({}).then(function(dbProfile){
      res.json(dbProfile);
    });
  });
  // Route to post the new profile to the table
  app.post("/api/profile", function(req, res){
    console.log(req.body);
    db.Profile.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
         sex: req.body.sex,
      location: req.body.location,
      zipCode: req.body.zipCode,
      bio: req.body.bio,
      imgLink: req.body.imgLink
    }).then(function(dbProfile){
      res.json(dbProfile);
    // Catch the error and display it on the console 
    }).catch(function(error) {
      console.log(error);
      res.status(500).json(error);
    });
  });

};
