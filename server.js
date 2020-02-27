const  _checkLogin = require('./connexion.js')
const  _checkRegister = require('./register.js')


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

app.post('/users', async (req, res) => {
	//console.log(req)
 	const result = await _checkLogin(req.body.email, req.body.password)

	res.send(result)
  //return res.send(_checkLogin(req.body.email, req.body.password));
});

app.post('/register', async (req, res) => {
	//console.log(req)
 	const result = await _checkRegister(req.body.email, req.body.password)

	res.send(result)
  //return res.send(_checkLogin(req.body.email, req.body.password));
});

//45f4bc4d0a4abe2a27ec5d80c8a863e3

//c7b1ebc16a3e174053ac7adccdd43845584c377ff64a04176d804a37dfabd042

app.get('/trello', (req, res) => {
    const options = {
            url: 'https://api.trello.com/1/members/me/boards?key=45f4bc4d0a4abe2a27ec5d80c8a863e3&token=c7b1ebc16a3e174053ac7adccdd43845584c377ff64a04176d804a37dfabd042',
            method: 'GET',
            headers: {
                'key': '45f4bc4d0a4abe2a27ec5d80c8a863e3',
                'token': 'c7b1ebc16a3e174053ac7adccdd43845584c377ff64a04176d804a37dfabd042'
            }
        };

        request(options, function(err, resB, body) {
            let json = JSON.parse(body);
            res.send(json)
        });
});

app.get('/pictures', (req, res) => {
    const options = {
            url: ' https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY ',
            method: 'GET',
            headers: {
                'api_key': 'TbofUQJC5HtgwnLV2w0TgNHhcN9tSQOsFpRWnz1x'
            }
        };

        request(options, function(err, resB, body) {
            let json = JSON.parse(body);
            res.send(json)
        });
});

app.get('/mars', (req, res) => {
    const options = {
            url: 'https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0',
            method: 'GET',
            headers: {
                'version': '1.0',
                'feedtype': 'json',
                'api_key': 'TbofUQJC5HtgwnLV2w0TgNHhcN9tSQOsFpRWnz1x'
            }
        };

        request(options, function(err, resB, body) {
            let json = JSON.parse(body);
            res.send(json)
        });
});

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
