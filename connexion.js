const fire = require("./config_firebase")

const _checkLogin = async (email, password, res) => {
	return (
		fire
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then(() => {return "succes"})
			.catch(error => {return "error"} )
	)
}

module.exports = _checkLogin
