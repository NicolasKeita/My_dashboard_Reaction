const express = require('express');
const router = express.Router();
const aboutJsonFile = require('../about');

router.post('/', function (req, res) {
    res.end("You probably wanted to do a GET request at /about.json instead of a POST request");
});

router.get('/', function (req, res) {
    let jsonObject = {
        client: {
            host: req.ip
        },
        server: {
            current_time: Math.floor(new Date().getTime() / 1000),
            service: aboutJsonFile.services
        }
    };
    res.send(jsonObject);
});

module.exports = router;
