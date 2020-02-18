const  _checkLogin = require('./connexion.js')

const mongoose = require('mongoose')
const user = require('./mongoDB')
const body = require('body-parser')

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.post('/', async (req, res) => {
	const name = req.body.name;
    const email = req.body.email
    const password = req.body.password

    if (!name || !email  || !password) { // on vérifie que les trois variables sont présentes
        res.send('false')
        return
    }

    const connection = _checkLogin(email, password)

    res.json(connection)
    return
})

app.use(body())

mongoose.connect('mongodb://localhost:27017/user', {useNewUrlParser: true});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
