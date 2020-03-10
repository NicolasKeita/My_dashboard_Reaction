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
    let receiver_mail = json_request_body.receiver_mail;
    if (receiver_mail === undefined)
        receiver_mail = "nicolas.keita@epitech.eu";

    const options = {
        url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=cb83efa1ba66096f8743aba2474495cc',
        method: 'GET',
    };

    request(options, function(err, resB, body) {
        let json = JSON.parse(body);

        const messageToSend = "Voici votre message METEO automatique de l'app DEV_area_2019\n" +
            " Il fait une température de " + json.main.temp + " Kelvin à " + json.name + ".\n";

        if (send_mail === "true") {
            options.url = 'http://localhost:8080/send-email';
            options.method = 'POST';
            options.body = {
                "messageToSend": messageToSend,
                "subject_of_the_mail": "[AREA] Votre ami Méteo DEV_AREA_2019",
                "receiver_mail": receiver_mail
            };
            options.json = true;
            request(options);
        }
        res.send(json)
    });
});

module.exports = router;
