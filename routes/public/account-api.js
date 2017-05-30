var db = require("../../models/index");
var jwt = require("jsonwebtoken");
// Json Webtoken

const jwtSecret = process.env.JWT_SECRET || 'secret';

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.render("index");
    });

    app.post("/login", function (req, res) {
        var Username = req.body.username;
        var Password = req.body.password;
        console.log(Username);
        console.log(Password);

        db.Account.findOne({
            where: {
                username: Username
            }
        }).then(function (user) {
            if (!user || !db.Account.validPassword(Password, user.password)) {
                res.status(401).json({ message: 'Incorrect username or password' })
            } else {

                var token = jwt.sign({
                    data: {
                        uid: req.body.id
                    }
                }, 'secret', {
                    expiresIn: '12h'
                });
                // Console log the token
                console.log("Token: " + token);
                res.status(200).json({ message: 'Successfully authenticated.', "token": token })
            }
        }).catch(function (error) {
            console.log(error);
            res.status(500).json({ message: 'Internal server error' })
        })
    });

    app.post("/signup", function (req, res) {
        db.Account.create({
            username: req.body.username,
            password: db.Account.generateHash(req.body.password),
            email: req.body.email,
        }).then(function (dbaccounts) {
            // Create the JSON-WebToken
            var token = jwt.sign({
                data: {
                    uid: dbaccounts.id
                }
            }, jwtSecret, {
                expiresIn: '12h'
            });
            // Send the json object to the app.js
            res.status(200).json({ "dbaccounts": dbaccounts, "token": token });
        }).catch(function (error) {
            res.status(500).json(error);
        });
        //}
    });

    app.get('/dashboard', function(req, res) {
        res.render('dashboard');
    });

};
