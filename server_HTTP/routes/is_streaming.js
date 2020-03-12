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

    const url = 'https://people.googleapis.com/v1/people/me?personFields=names';
    const res2 = await oAuth2Client.request({url});
    console.log(res2);

    /*
    let drive = google.drive({
        version: 'v3',
        auth: oAuth2Client
    });

    drive.files.list( {}, (err, res) => {
        if (err) throw err;
        const files = res.data.files;
        console.log("FIFIFFI: ", files);
        if (files.length) {
            files.map((file) => {
                console.log(file);
            });
        } else {
            console.log('no files found');
        }
    });
     */

    /*
    const res2 = await drive.files.create({
        requestBody: {
            name: 'Test',
            mimeType: 'text/plain'
        },
        media: {
            mimeType: 'text/plain',
            body: 'Hello World'
        }
    });*/
//    console.log(res2);
    res.send("Hi");
});

module.exports = router;
