const express = require('express');
const router = express.Router();
const request = require('request');


router.get('/', (req, res) => {
    const options = {
        url: 'http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=cb83efa1ba66096f8743aba2474495cc',
        method: 'GET',
    };

    request(options, function(err, resB, body) {
        let json = JSON.parse(body);
        res.send(json)
    });
});

module.exports = router;
