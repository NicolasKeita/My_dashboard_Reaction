const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/',function(req, res) {
    res.send("Server HTTP received a GET request, at route '/'. But there is nothing there ...");
});

module.exports = router;
