var db = require("../../models/index");

const jwtSecret = process.env.JWT_SECRET || 'secret';
var jwt = require("jsonwebtoken");


module.exports = function (app) {
    /**
     * Router JWT authenticator function.
     * If valid JWT provided, passes request to next function down.
     * Else, invalid JWT will fail and request will not be processed.
     */

    app.use(function (req, res, next) {

        var token = req.body.token || req.query.token;
        console.log('app.use', token);

        if (token) {

            jwt.verify(token, jwtSecret, function (err, decoded) {
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

    app.get('/api/dashboard', function(req, res) {
        var userId =  req.decoded.uid;
        res.status(200).json({userId, success: true});
    })




    // Route to post the new profile to the table
    app.post("/api/profile", function (req, res) {
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
        }).then(function (dbProfile) {
            res.json(dbProfile);
            // Catch the error and display it on the console
        }).catch(function (error) {
            console.log(error);
            res.status(500).json(error);
        });
    });

};
