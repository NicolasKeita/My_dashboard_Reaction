const express = require('express');
const router = express.Router();
const { google } = require('googleapis');
const http = require('http');
const url = require('url');
const destroyer = require('server-destroy');
const keys = require('../google_api_key_oauth2');

router.get('/', async function(req, res)
{
    const auth_tokens = await getAuthenticatedClient();
    res.send(auth_tokens);
});

router.post('/', async function(req, res) {
    res.end("You sent a POST request to connectThroughGoogle but you probably wanted to send a GET request");
});

/**
 * Create a new OAuth2Client, and go through the OAuth2 content
 * workflow.  Return the full client to the callback.
 */
function getAuthenticatedClient() {
    return new Promise((resolve, reject) => {

        const oAuth2Client = new google.auth.OAuth2(
            keys.web.client_id,
            keys.web.client_secret,
            keys.web.redirect_uris[0]
        );

        // Open an http www to accept the oauth callback.
        const server = http
            .createServer(async (req, res) => {
                try {
                    if (req.url.indexOf('google_auth_redirect_after_login') > -1) {
                        // acquire the code from the querystring, and close the web www.
                        const qs = new url.URL(req.url, 'http://localhost:3000')
                            .searchParams;
                        const code = qs.get('code');
                        res.end('Authentication successful! You can close this window.');
                        server.destroy();

                        const r = await oAuth2Client.getToken(code);
                        resolve(r.tokens);
                    }
                } catch (e) {
                    reject(e);
                }
            })
            .listen(3000, () => {
            })
            .on('error', (e) => {
                if (e.code === 'EADDRINUSE') {
                    console.log('Address, port combination already in use');
                }
            });
        destroyer(server);
    });
}

module.exports = router;
