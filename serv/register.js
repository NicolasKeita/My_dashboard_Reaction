const fire = require("./config_firebase");

const _checkRegister = async (email, password) => {
	return (
        fire
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {return("succes")})
			.catch(error => {return("error")})
		)
};

module.exports = _checkRegister;
