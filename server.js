const  _checkLogin = require('./connexion.js')

const express = require('express')
const app = express()
const body = require('body-parser')
var request = require('request');
var unirest = require("unirest");
app.use(body())

app.use(body.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});
app.post('/', (req, res) => {
  return res.send('Received a POST HTTP method');
});
app.put('/', (req, res) => {
  return res.send('Received a PUT HTTP method');
});
app.delete('/', (req, res) => {
  return res.send('Received a DELETE HTTP method');
});

app.post('/users', async (req, res) => {
	//console.log(req)
 	const result = await _checkLogin(req.body.email, req.body.password)

	res.send(result)
  //return res.send(_checkLogin(req.body.email, req.body.password));
});

/*app.get('/deezer', (req, res) => {
    const options = {
            url: 'https://www.reddit.com/r/funny.json',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Accept-Charset': 'utf-8',
                'User-Agent': 'my-reddit-client'
            }
        };

        request(options, function(err, resB, body) {
            let json = JSON.parse(body);
            console.log(json);
            res.send(json)
        });
});*/

app.get('/bitcoin', (req, res) => {
    var reqB = unirest("GET", "https://bravenewcoin-v1.p.rapidapi.com/convert");

    reqB.query({
    	"qty": "1",
    	"from": "btc",
    	"to": "eur"
    });

    reqB.headers({
    	"x-rapidapi-host": "bravenewcoin-v1.p.rapidapi.com",
    	"x-rapidapi-key": "35d6f32c07msh355864905c93ccep1db843jsna91afb81c842"
    });



    reqB.end(function (resB) {

        res.send(resB.body);
    });

});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
