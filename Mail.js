const nodemailer = require ('nodemailer');

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    secure: true,
    port: 465,
    auth: {
        user:`sohampbandekar@gmail.com`,
        pass:`lcwsnrhwtprpnyvv`,
    }
});

function sendMail (to ,emailsubject, message) {
    transporter.sendMail({
        to: to,
        subject: emailsubject,
        html:message,
    })
    console.log("Message sent: " + message)
}

sendMail("sohampbandekar@gmail.com","this is subject","lorem");

module.exports = sendMail;