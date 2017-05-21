var db = require("../models");

model.exports= function(app){
  app.get("/api/liked", function(req, res){
    // TODO: Capture who the user is that requesting this information.
    db.Match.findAll({
    // TODO: Find the query that find all the profile that the user liked in the table. We need to use the JSON Token

  });
});
};
