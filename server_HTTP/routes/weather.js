const express = require('express');
const router = express.Router();
const request = require('request');


// TODO : remove
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

router.post('/', (req, res) => {
    const json_request_body = JSON.parse(JSON.stringify(req.body));

    let city = json_request_body.city;
    if (city === undefined)
        city = "Paris";

    const send_mail = json_request_body.send_mail;

    const options = {
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=cb83efa1ba66096f8743aba2474495cc',
        method: 'GET',
    };

    request(options, function(err, resB, body) {
        let json = JSON.parse(body);
        if (send_mail === "true") {
            options.url = 'http://localhost:8080/send-email';
            options.method = 'POST';
            // TODO write something inside the mail
            request(options);
        }
        res.send(json)
    });
});

module.exports = router;
