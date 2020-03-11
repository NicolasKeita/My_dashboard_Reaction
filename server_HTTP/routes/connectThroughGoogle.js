const express = require('express');
const router = express.Router();
const { OAuth2Client } = require('google-auth-library');
const http = require('http');
const url = require('url');
const destroyer = require('server-destroy');
const keys = require('../google_api_key_oauth2');

router.get('/', async function(req, res)
{
    const oAuth2Client = await getAuthenticatedClient();
    res.send(oAuth2Client);
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
        // create an oAuth client to authorize the API call.  Secrets are kept in a `keys.json` file,
        // which should be downloaded from the Google Developers Console.
        const oAuth2Client = new OAuth2Client(
            keys.web.client_id,
            keys.web.client_secret,
            keys.web.redirect_uris[0]
        );

        // Open an http www to accept the oauth callback. In this simple example, the
        // only request to our webserver is to /oauth2callback?code=<code>
        const server = http
            .createServer(async (req, res) => {
                try {
                    if (req.url.indexOf('google_auth_redirect_after_login') > -1) {
                        // acquire the code from the querystring, and close the web www.
                        const qs = new url.URL(req.url, 'http://localhost:3000')
                            .searchParams;
                        const code = qs.get('code');
                        console.log(`Code is ${code}`);
                        res.end('Authentication successful! You can close this window.');
                        server.destroy();

                        // Now that we have the code, use that to acquire tokens.
                        const r = await oAuth2Client.getToken(code);
                        // Make sure to set the credentials on the OAuth2 client.
                        oAuth2Client.setCredentials(r.tokens);
                        console.info('Tokens acquired.');
                        resolve(oAuth2Client);
                    } else {
                        console.log("[ERR DEV_AREA_2019] Wrong URL in connectThroughGoogle.js line 70");
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
