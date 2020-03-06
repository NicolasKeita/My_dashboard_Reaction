const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res) => {
    const options = {
        url: 'https://api.nasa.gov/insight_weather/?api_key=TbofUQJC5HtgwnLV2w0TgNHhcN9tSQOsFpRWnz1x&feedtype=json&ver=1.0',
        method: 'GET',
        headers: {
            'version': '1.0',
            'feedtype': 'json',
            'api_key': 'TbofUQJC5HtgwnLV2w0TgNHhcN9tSQOsFpRWnz1x'
        }
    };

    request(options, function(err, resB, body) {
        let json = JSON.parse(body);
        res.send(json)
    });
});

module.exports = router;
