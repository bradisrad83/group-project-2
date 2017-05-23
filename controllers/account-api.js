var db = require("../models/index");
// Json Webtoken
var jwt = require("jsonwebtoken");


module.exports = function(app) {
  app.get("/api/account", function(req, res) {
    db.Account.findAll({}).then(function(dbaccounts) {
      var userAccounts = {
        account: dbaccounts
      };
      console.log(userAccounts);
    });
  });

  app.post("/api/account", function(req, res) {

    console.log(req.body);
    // Create the JSON-WebToken
    var token = jwt.sign({
      data: {
        username: req.body.username,
      }
    }, 'secret', {
      expiresIn: '1h'
    });
    // Console log the token
    console.log("Token: "+ token);

    db.Account.create({
      username: req.body.username,
      password: db.Account.generateHash(req.body.password),
      email: req.body.email,
    }).then(function(dbaccounts) {
      // Send the json object to the app.js
      res.status(200).json({"dbaccounts": dbaccounts, "token": token });
      //console.log(dbaccounts);
    }).catch(function(error) {
      res.status(500).json(error);
    });
  });

};
