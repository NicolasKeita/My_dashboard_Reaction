const fire = require("./config_firebase")

const _checkLogin = (email, password) => {
	fire
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => res.send('nice'))
		.catch(error => res.send('fail'))
}

module.exports = _checkLogin
