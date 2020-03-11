const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const keys = require('../google_api_key_oauth2');

router.get('/', async function(req, res)
{
    const oAuth2Client = new OAuth2Client(
        keys.web.client_id,
        keys.web.client_secret,
        keys.web.redirect_uris[0]
    );

    const url = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: 'https://www.googleapis.com/auth/userinfo.profile',
    });
    res.send(url);
});

router.post('/', async function(req, res)
{
    res.end("You probably wanted to do a GET request on /getURL_toConnectToGoogle");
});

module.exports = router;
