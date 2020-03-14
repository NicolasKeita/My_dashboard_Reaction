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

    let textToWrite = req.body.textToWrite;
    let filename = req.body.filename;

    if (textToWrite === undefined)
        textToWrite = "Hello world";
    if (filename === undefined)
        filename = "Test DEV_AREA";

    const drive = google.drive({
        version: 'v3',
        auth: oAuth2Client
    });

    await drive.files.create({
        requestBody: {
            name: filename,
            mimeType: 'text/plain'
        },
        media: {
            mimeType: 'text/plain',
            body: textToWrite
        }
    });
    res.end("File created !");
});

module.exports = router;
