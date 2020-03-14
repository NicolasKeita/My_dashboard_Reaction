const express = require('express');
const router = express.Router();
const nodeMailer = require('nodemailer');

router.get('/', function (req, res) {
    res.end("You probably wanted to access this route with a POST request." +
        "This is currently a GET request.");
});

router.post('/', async function (req, res) {
    console.log("[DEBUG] You want to send a mail !");
    // works with x-www-form-urlencoded but not with form-data
    const json_request_body = JSON.parse(JSON.stringify(req.body));
    let messageToSend = json_request_body.messageToSend;
    let subject_of_the_mail = json_request_body.subject_of_the_mail;
    let receiver_mail = json_request_body.receiver_mail;

    if (messageToSend === undefined)
        messageToSend = "empty message from DEV_area_2019";
    if (subject_of_the_mail === undefined)
        subject_of_the_mail = "empty subject from DEV_area_2019";
    if (receiver_mail === undefined)
        receiver_mail = "nicolaskeita2@gmail.com";

    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'nicolasdevarea2019@gmail.com',
            pass: 'DEV_area_2019'
        }
    });
    let mailOptions = {
        from: '"DEV_AREA_2019" <nicolasdevarea2019@gmail.com>', // sender address
        to: receiver_mail,
        subject: subject_of_the_mail, // Subject line
        text: "hello", // plain text body
        html: messageToSend // html body
    };

    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.send(error);
            return console.log(error);
        }
    });
    await res.end("Mail sent to " + receiver_mail + " ! It takes a few seconds to send.");
});

module.exports = router;
