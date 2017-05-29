app.get("/questions", function (req, res) {
    db.Questions.findAll({}).then(function (dbquestions) {
        console.log(dbquestions);
        res.render("questions", {questions: dbquestions});
    });
});
