const express = require('express');
const router = express.Router();
const request = require('request');
const nodeMailer = require('nodemailer');


router.post('/', function (req, res) {
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

module.exports = router;
