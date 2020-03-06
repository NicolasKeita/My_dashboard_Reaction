const express = require('express');
const router = express.Router();
const request = require('request');

//jZppEVS5SHVTEMkgClvE7eHzqYWZ1apKMPwfjshi

router.get('/', (req, res) => {
    const options = {
        url: ' https://api.nasa.gov/planetary/apod?api_key=TbofUQJC5HtgwnLV2w0TgNHhcN9tSQOsFpRWnz1x ',
        method: 'GET',
        headers: {
            'api_key': 'TbofUQJC5HtgwnLV2w0TgNHhcN9tSQOsFpRWnz1x'
        }
    };

    request(options, function(err, resB, body) {
        let json = JSON.parse(body);
        res.send(json)
    });
});

module.exports = router;
