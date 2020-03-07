const express = require('express');
const router = express.Router();
const request = require('request');

router.get('/', (req, res) => {
    const options = {
        url: ' http://www.airparif.asso.fr/services/api/1.1/indiceJour?date=jour',
        method: 'GET',
    };

    request(options, function(err, resB, body) {
        let json = JSON.parse(body);
        res.send(json)
    });
});

module.exports = router;
