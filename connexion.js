const fire = require("./config_firebase")

const _checkLogin = (email, password) => {
	fire
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => 'signal connection réussi')
		.catch(error => 'signal connection raté')
}

module.exports = _checkLogin
