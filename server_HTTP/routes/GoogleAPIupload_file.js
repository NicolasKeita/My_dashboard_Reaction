const express = require('express');
const router = express.Router();
const { google } = require('googleapis');
const keys = require('../google_api_key_oauth2');

router.get('/', async function(req, res)
{
    res.end("You probably wanted to do a POST request on /is_streaming");
});

router.post('/', async function(req, res)
{
    const tokens = JSON.parse(req.body.google_auth_tokens);
    let oAuth2Client = new google.auth.OAuth2(
        keys.web.client_id,
        keys.web.client_secret,
        keys.web.redirect_uris[0]
    );
    oAuth2Client.setCredentials(tokens);

    const url = 'https://people.googleapis.com/v1/people/me?personFields=phoneNumbers';
    const res2 = await oAuth2Client.request({url});
    if (res2.data.phoneNumbers[0].value)
        res.send(res2.data.phoneNumbers[0].value);
    else
        res.send("ERROR No phone Number detected");
});

module.exports = router;
