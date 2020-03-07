const express = require('express');
const router = express.Router();
const unirest = require("unirest");


router.get('/', (req, res) => {
    const reqB = unirest("GET", "https://bravenewcoin-v1.p.rapidapi.com/convert");

    reqB.query({
        "qty": "1",
        "from": "btc",
        "to": "eur"
    });

    reqB.headers({
        "x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
        "x-rapidapi-key": "35d6f32c07msh355864905c93ccep1db843jsna91afb81c842"
    });

    reqB.end(function (resB) {
        res.send(resB.body);
    });
});

module.exports = router;
