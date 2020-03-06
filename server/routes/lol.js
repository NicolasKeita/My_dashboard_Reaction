const express = require('express');
const router = express.Router();
const request = require('request');


router.get('/', (req, res) => {
    const options = {
        url: 'https://euw1.api.riotgames.com/lol/status/v3/shard-data?api_key=RGAPI-ff838aff-1293-4ea9-a7f9-efd9d7281d69',
        method: 'GET',
        headers: {
            "Origin": "https://developer.riotgames.com",
            "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Riot-Token": "RGAPI-ff838aff-1293-4ea9-a7f9-efd9d7281d69",
            "Accept-Language": "en-US,en;q=0.5",
            "User-Agent": "Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:70.0) Gecko/20100101 Firefox/70.0"
        }
    };

    request(options, function(err, resB, body) {
        let json = JSON.parse(body);
        res.send(json)
    });
});

module.exports = router;
