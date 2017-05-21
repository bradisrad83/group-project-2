var db = require("../models");

module.exports = function(app){
  // Route to get all the profile and send the json to the api route
  app.get("/api/profile", function(req, res){
    db.Profile.findAll({}).then(function(dbProfile){
      res.json(dbProfile);
    });
  });
  // Route to post the new profile to the table
  app.post("/api/profile", function(req, res){
    db.Profile.create({
      Username: req.body.Username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      location: req.body.location,
      zipCode: req.body.zipCode,
      bio: req.body.bio,
      imgLink: req.body.imgLink
    }).then(function(dbProfile){
      res.json(dbProfile);
    // Catch the error and display it on the console 
    }).catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
  });

};
