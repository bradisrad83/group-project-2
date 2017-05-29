var db = require("../../models/index");

const jwtSecret = process.env.JWT_SECRET || 'secret';

module.exports = function(app){
  // Route to get all the profile and send the json to the api route
  app.get("/api/profile", function(req, res){
    db.Profile.findAll({}).then(function(dbProfile){
      res.json(dbProfile);
    });
  });

  /**
  * Router JWT authenticator function.
  * If valid JWT provided, passes request to next function down.
  * Else, invalid JWT will fail and request will not be processed.
  */

  app.use(function(req, res, next) {

     var token = req.body.token;
     console.log('app.use', token);

     if (token) {

       jwt.verify(token, jwtSecret, function(err, decoded) {
         if (err) {
           return res.status(403).json({
             success: false,
             message: 'Authentication failed.'
           });
         } else {
           req.decoded = decoded;
           next();
         }
       });

    } else {
      return res.status(403).send({
        success: false,
        message: 'Please provide valid token with request.'
      });
    }
  });

// =============================================================================
// ROUTES BELOW THIS POINT REQUIRE VALID JWT IN ORDER TO ACCESS
// =============================================================================


  // Route to post the new profile to the table
  app.post("/api/profile/", function(req, res){
    console.log(req.body);
    db.Profile.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      sex: req.body.sex,
      location: req.body.location,
      zipCode: req.body.zipCode,
      bio: req.body.bio,
      imgLink: req.body.imgLink,
      AccountId: req.decoded.uid
  }).then(function(dbProfile){
      res.json(dbProfile);
    // Catch the error and display it on the console
    }).catch(function(error) {
      console.log(error);
      res.status(500).json(error);
    });
  });

};
