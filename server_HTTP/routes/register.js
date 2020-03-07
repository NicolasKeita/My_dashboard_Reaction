const express = require('express');
const router = express.Router();
const  _checkRegister = require('../utils/register');

router.post('/', async (req, res) => {
    const result = await _checkRegister(req.body.email, req.body.password);
    res.send(result);
});

module.exports = router;
