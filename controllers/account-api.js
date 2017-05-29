var db = require("../models/index");
// Json Webtoken
var jwt = require("jsonwebtoken");


module.exports = function(app) {

  app.post("/api/login", function(req, res) {
    var Username = req.body.username;
    var Password = req.body.password;
    console.log(Username);
    console.log(Password);
    db.Account.findOne({
      where: {
        username: Username
      }
    }).then(function(user) {
      if (!user || !db.Account.validPassword(Password, user.password)) {
        res.status(401).json({
          message: 'Incorrect username or password'
        })
      } else {
        var token = jwt.sign({
          data: {
            username: req.body.username,
          }
        }, 'secret', {
          expiresIn: '12h'
        });
        // Console log the token
        console.log("Token: " + token);
        res.status(200).json({
          message: 'Successfully authenticated.',
          "token": token
        })
      }
    }).catch(function(error) {
      console.log(error);
      res.status(500).json({
        message: 'Internal server error'
      })
    })
  });

  app.get("/questions", function(req, res) {
    db.surveyQuestions.findAll({}).then(function(dbsurveyQuestions) {
      //console.log(dbsurveyQuestions);
      res.render("questions", {
        questions: dbsurveyQuestions
      });
    });
  });

  app.get("/", function(req, res) {
    res.render("login");
  });

  app.get("/dashboard/:username", function(req, res) {
    db.Account.findOne({
      where: {
        username: req.params.username
      }
    }).then(function(dbaccounts) {
      //console.log("Id in the Table: " + dbaccounts.dataValues.id);

      res.render("dashboard");
    });

  });

  app.get("/profile", function(req, res) {
    res.render("profile");
  });

  app.get("/api/account", function(req, res) {
    db.Account.findAll({}).then(function(dbaccounts) {
      var userAccounts = {
        account: dbaccounts
      };
      console.log(userAccounts);
    });
  });

  app.post("/api/account", function(req, res) {
    /*req.checkBody("email", "Enter a valid email address.").isEmail();
      var errors = req.validationErrors();
     if (errors) {
          console.log(errors);
          res.status(504).json(errors);
          return;
      } else { */
    console.log(req.body);
    // Create the JSON-WebToken
    var token = jwt.sign({
      data: {
        username: req.body.username,
      }
    }, 'secret', {
      expiresIn: '12h'
    });
    // Console log the token
    console.log("Token: " + token);

    db.Account.create({
      username: req.body.username,
      password: db.Account.generateHash(req.body.password),
      email: req.body.email,
    }).then(function(dbaccounts) {
      // Send the json object to the app.js
      res.status(200).json({
        "dbaccounts": dbaccounts,
        "token": token
      });
      //console.log(dbaccounts);
    }).catch(function(error) {
      res.status(500).json(error);
    });
    //}
  });
};
