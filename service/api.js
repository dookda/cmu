const express = require("express");
const app = express.Router();
const db = require("./db");

app.get("/", (req, res) => {
    // db.query()
    res.status(200).json({
        status: "hello"
    });
});

app.get("/api/", (req, res) => {
    res.status(200).json({
        status: "hello_api"
    });
});

module.exports = app;