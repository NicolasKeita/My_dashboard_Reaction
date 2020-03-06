const express = require('express');
const router = express.Router();
const  _checkLogin = require('../utils/connexion');

router.post('/', async (req, res, next) => {
    const result = await _checkLogin(req.body.email, req.body.password);
    res.send(result);
});

module.exports = router;
