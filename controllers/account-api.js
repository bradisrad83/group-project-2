var db = require("../models/index");


module.exports= function (app) {
    app.get("/api/account", function (req, res) {
        db.Account.findAll({}).then(function (dbaccounts) {
            var userAccounts = {account: dbaccounts};
            console.log(userAccounts);
        })
    });

    app.post("/api/account", function (req, res) {
        req.checkBody("email", "Enter a valid email address.").isEmail();
        var errors = req.validationErrors();
        if (errors) {
            console.log(errors);
            res.send(error);
            return;
        } else {
            // normal processing here


            db.Account.create({
                username: req.body.username,
                password: db.Account.generateHash(req.body.password),
                email: req.body.email
            }).then(function (dbaccounts) {
                res.json(dbaccounts);
            }).catch(function (error) {
                console.log(error);
                res.status(500).json(error);
            });

        }
    });

};


