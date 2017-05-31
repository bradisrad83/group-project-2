var db = require("../../models/index");
var jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET || 'secret';

module.exports = function(app){
  /**
 * Router JWT authenticator function.
 * If valid JWT provided, passes request to next function down.
 * Else, invalid JWT will fail and request will not be processed.
 */
app.use(function(req, res, next) {

  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {

    jwt.verify(token, jwtSecret, function(err, decoded) {
      if (err) {
        return res.status(403).json({
          success: false,
          message: 'Authentication failed.'
        });
      } else {
        console.log("Decoding");
        req.decoded = decoded;
        console.log(req.decoded.data);
        console.log("UID: " + req.decoded.data.uid);

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
  // Route to get all the profile and send the json to the api route
  // app.get("/api/profile", function(req, res){
  //   db.Profile.findAll({}).then(function(dbProfile){
  //     res.json(dbProfile);
  //   });
  // });
  app.get("/api/dashboard", function(req, res) {
    db.Account.findOne({
      where:{
        username: req.query.uid
      }
    }).then(function(dbaccounts){
      //console.log("Id in the Table: " + dbaccounts.dataValues.id);

      res.render("dashboard");
    });

  });
  // // Route to post the new profile to the table
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
      AccountId: req.decoded.data.uid
  }).then(function(dbProfile){
      // console.log("api/profile then");
      res.json({dbProfile, success: true});
    // Catch the error and display it on the console
    }).catch(function(error) {
      console.log("api/profile error ");
      console.log(error);
      res.status(500).json(error);
    });
  });


  // app.get("/profile", function(req,res) {
  //   res.render("profile");
  // });

};
