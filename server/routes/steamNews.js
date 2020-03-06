const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res) => {
    const options = {
        url: 'https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=440&count=3',
        method: 'GET',
    };

    request(options, function(err, resB, body) {
        let json = JSON.parse(body);
        res.send(json)
    });
});

module.exports = router;
