const  _checkLogin = require('./connexion.js')
const  _checkRegister = require('./register.js')


const express = require('express')
const app = express()
const body = require('body-parser')
var request = require('request');
var unirest = require("unirest");

var nodeMailer = require('nodemailer');
app.use(body())

app.use(body.urlencoded({
  extended: true
}));

app.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

app.post('/users', async (req, res) => {
 	const result = await _checkLogin(req.body.email, req.body.password)
	res.send(result)
});

app.post('/register', async (req, res) => {
 	const result = await _checkRegister(req.body.email, req.body.password)
	res.send(result)
});

app.get('/trello', (req, res) => {
    const options = {
            url: 'https://api.trello.com/1/members/me/boards?key=45f4bc4d0a4abe2a27ec5d80c8a863e3&token=dfd8ac5263e85fda855c31e86a0fcb0f2f82efe62c64ee650c2b72a7352c732a',
            method: 'GET',
            headers: {
                'key': '45f4bc4d0a4abe2a27ec5d80c8a863e3',
                'token': 'dfd8ac5263e85fda855c31e86a0fcb0f2f82efe62c64ee650c2b72a7352c732a'
            }
        };

        request(options, function(err, resB, body) {
            let json = JSON.parse(body);
            res.send(json)
        });
});

//jZppEVS5SHVTEMkgClvE7eHzqYWZ1apKMPwfjshi

app.get('/pictures', (req, res) => {
    const options = {
            url: ' https://api.nasa.gov/planetary/apod?api_key=TbofUQJC5HtgwnLV2w0TgNHhcN9tSQOsFpRWnz1x ',
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
            url: 'https://api.nasa.gov/insight_weather/?api_key=TbofUQJC5HtgwnLV2w0TgNHhcN9tSQOsFpRWnz1x&feedtype=json&ver=1.0',
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

app.get('/weather', (req, res) => {
    const options = {
            url: 'http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=cb83efa1ba66096f8743aba2474495cc',
            method: 'GET',
        };

        request(options, function(err, resB, body) {
            let json = JSON.parse(body);
            res.send(json)
        });
});

app.get('/time', (req, res) => {
    const options = {
            url: 'http://worldclockapi.com/api/json/est/now',
            method: 'GET',
        };

        request(options, function(err, resB, body) {
            let json = JSON.parse(body);
            res.send(json)
        });
});

app.get('/pollution', (req, res) => {
    const options = {
            url: ' http://www.airparif.asso.fr/services/api/1.1/indiceJour?date=jour',
            method: 'GET',
        };

        request(options, function(err, resB, body) {
            let json = JSON.parse(body);
            res.send(json)
        });
});


app.get('/lol', (req, res) => {
    const options = {
            url: 'https://euw1.api.riotgames.com/lol/status/v3/shard-data?api_key=RGAPI-ff838aff-1293-4ea9-a7f9-efd9d7281d69',
            method: 'GET',
            headers: {
                "Origin": "https://developer.riotgames.com",
                "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
                "X-Riot-Token": "RGAPI-ff838aff-1293-4ea9-a7f9-efd9d7281d69",
                "Accept-Language": "en-US,en;q=0.5",
                "User-Agent": "Mozilla/5.0 (X11; Fedora; Linux x86_64; rv:70.0) Gecko/20100101 Firefox/70.0"
            }
        };

        request(options, function(err, resB, body) {
            let json = JSON.parse(body);
            res.send(json)
        });
});

app.get('/steamNews', (req, res) => {
    const options = {
            url: 'https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=440&count=3',
            method: 'GET',
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

app.post('/send-email', function (req, res) {
      let transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          port: 465,
          secure: true,
          /*auth: {
              user: 'louis.druo@gmail.com',
              pass: 'Furet9292'
          }*/
      });
      let mailOptions = {
          from: '"Hugo lacour" <louis.druo@gmail.com>', // sender address
          to: 'hlacour49@gmail.com', // list of receivers
          subject: "test", // Subject line
          text: "hello", // plain text body
          html: '<b>NodeJS Email Tutorial</b>' // html body
      };

      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              res.send(error);
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('index');
          });
      });


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
