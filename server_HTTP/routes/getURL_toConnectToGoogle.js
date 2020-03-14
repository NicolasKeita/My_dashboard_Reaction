const express = require('express');
const router = express.Router();
const { google } = require('googleapis');
const keys = require('../google_api_key_oauth2');

router.get('/', async function(req, res)
{
    const oAuth2Client = new google.auth.OAuth2(
        keys.web.client_id,
        keys.web.client_secret,
        keys.web.redirect_uris[0]
    );

    // TODO remove unnecessary ones
    // Choosing which API we need
    const scopes = [
        'https://www.googleapis.com/auth/blogger',
        'https://www.googleapis.com/auth/calendar',

        // Private infos Google PEOPLE API
        'https://www.googleapis.com/auth/contacts',
        'https://www.googleapis.com/auth/contacts.readonly',
        'https://www.googleapis.com/auth/profile.agerange.read',
        'https://www.googleapis.com/auth/profile.emails.read',
        'https://www.googleapis.com/auth/profile.language.read',
        'https://www.googleapis.com/auth/user.addresses.read',
        'https://www.googleapis.com/auth/user.birthday.read',
        'https://www.googleapis.com/auth/user.emails.read',
        'https://www.googleapis.com/auth/user.organization.read',
        'https://www.googleapis.com/auth/user.phonenumbers.read',
        'https://www.googleapis.com/auth/userinfo.email',
        'https://www.googleapis.com/auth/userinfo.profile',

        // Youtube API
        'https://www.googleapis.com/auth/youtube.readonly',
        'https://www.googleapis.com/auth/youtube',
        'https://www.googleapis.com/auth/youtube.force-ssl',

        // Google Drive API
        'https://www.googleapis.com/auth/drive.appdata',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/drive'
    ];

    const url = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: scopes,
    });
    res.send(url);
});

router.post('/', async function(req, res)
{
    res.end("You probably wanted to do a GET request on /getURL_toConnectToGoogle");
});

module.exports = router;
