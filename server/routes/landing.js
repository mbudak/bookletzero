const express = require("express");
const landingRouter = express.Router();

landingRouter.route("/").get(function (req, res) {
    res.render("landing");
});


module.exports = landingRouter ;