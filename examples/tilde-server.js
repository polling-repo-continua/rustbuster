var express = require("express");
var app = express();

app.all("/*", function (req, res) {
    let file = req.url.slice(1);
    console.log(file);
    switch (file) {
        case "*~1*":
        case "w*~1*":
        case "we*~1*":
        case "web~1*":
        case "web~1.%3f%3f%3f":
        case "web~1.c%3f%3f":
        case "web~1.co%3f":
        case "web~1.con":
        case "web.config":
            res.status(404).send();
        break
        default:
            res.status(400).send();
    }
});

app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});

