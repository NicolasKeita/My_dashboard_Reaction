const  _checkLogin = require('./connexion.js')

const express = require('express')
const app = express()
const body = require('body-parser')
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
 	const result = await _checkLogin(req.body.email, req.body.password, res)

	res.send(result)
  //return res.send(_checkLogin(req.body.email, req.body.password));
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
