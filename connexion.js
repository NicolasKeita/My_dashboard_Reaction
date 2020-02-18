const fire = require("./config_firebase")

const _checkLogin = (email, password) => {
	fire
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => {return "succes"})
		.catch(error => {return "fail"} )
}

module.exports = _checkLogin
