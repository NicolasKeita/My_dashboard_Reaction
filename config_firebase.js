const firebase = require('firebase')

const firebaseConfig = {
	apiKey: "AIzaSyCxLJ_sOJtbn7dhaH4d2O2kfUMFuPwOEAE",
	authDomain: "area-f5adb.firebaseapp.com",
	databaseURL: "https://area-f5adb.firebaseio.com/",
	projectId: "area-f5adb",
	storageBucket: "area-f5adb.appspot.com",
	messagingSenderId: "876018468824",
	appId: "1:876018468824:web:fc36566a255d8d33a914ad",
	measurementId: "G-PR1N55CPDH"
};

const Firebase = firebase.initializeApp(firebaseConfig)
module.exports = Firebase
