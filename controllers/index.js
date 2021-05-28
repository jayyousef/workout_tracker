const express = require('express');
const router = require('express').Router();
const path = require('path')
const db = require("../models")

router.get("/", (req, res) => {
    res.send("This is the home page!");
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
});

module.exports = router;