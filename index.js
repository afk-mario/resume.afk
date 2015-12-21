/*jslint node: true */
'use strict';

var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    port = parseInt(process.env.PORT, 10) || 15304;

app.get("/", function(req, res) {
    res.redirect("README.html");
});
app.use(methodOverride());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static(__dirname + '/src'));
app.use(errorHandler({
    dumpExceptions: true,
    showStack: true
}));

app.listen(port);