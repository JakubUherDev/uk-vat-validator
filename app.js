var express = require("express");
var app = express();
var request = require('request');

var gov = "https://api.service.hmrc.gov.uk/organisations/vat/check-vat-number/lookup/";

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/url", (req, res, next) => {
    const { vat } = req.query
    request(gov + vat, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.json({message: "valid"})
        }
        else {
            res.json({message: "invalid"})
        }
    })
});


