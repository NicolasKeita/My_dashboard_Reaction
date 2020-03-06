const express = require('express');
const router = express.Router();
const request = require('request');


router.get('/', function(req, res, next) {
    const options = {
        url: 'https://api.trello.com/1/members/me/boards?key=45f4bc4d0a4abe2a27ec5d80c8a863e3&token=dfd8ac5263e85fda855c31e86a0fcb0f2f82efe62c64ee650c2b72a7352c732a',
        method: 'GET',
        headers: {
            'key': '45f4bc4d0a4abe2a27ec5d80c8a863e3',
            'token': 'dfd8ac5263e85fda855c31e86a0fcb0f2f82efe62c64ee650c2b72a7352c732a'
        }
    };

    request(options, function(err, resB, body) {
        let json = JSON.parse(body);
        res.send(json)
    });
});

module.exports = router;
