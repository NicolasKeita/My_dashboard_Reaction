const express = require('express');
const router = express.Router();
const { google } = require('googleapis');
const keys = require('../google_api_key_oauth2');

router.get('/',function(req, res) {
    res.end("received GET request at /isStreaming. You probably wanted to do a POST request");
});

router.post('/',async function(req, res) {
    const tokens = JSON.parse(req.body.google_auth_tokens);
    let oAuth2Client = new google.auth.OAuth2(
        keys.web.client_id,
        keys.web.client_secret,
        keys.web.redirect_uris[0]
    );
    oAuth2Client.setCredentials(tokens);

    let youtube = new google.youtube('v3');

    let liveChatId; // Where we'll store the id of our liveChat
    let nextPage; // How we'll keep track of pagination for chat messages
    const intervalTime = 5000; // Miliseconds between requests to check chat messages
    let interval; // variable to store and control the interval that will check messages
    let chatMessages = []; // where we'll store all messages

    const response = await youtube.liveStreams.list(
        {
            auth: oAuth2Client,
//            id: 'PF6jcqC-e08',
            mine: true,
            part: 'snippet',
        }
    );
    /*
    const latestChat = response.data.items[0];
    liveChatId = latestChat.snippet.liveChatId;
    console.log('Chat ID Found:', liveChatId);
*/
    //let gapi = new google.youtube();
//    gapi.client.youtube.liveStreams;

    res.end("received POST request at /isStreaming. Everything is OK");
});

module.exports = router;
