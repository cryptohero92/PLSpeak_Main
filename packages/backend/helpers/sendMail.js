"use strict";
const nodemailer = require("nodemailer");

let defaultValue = {
    from: `"Plspeak " <${process.env.MAIL_USERNAME}>`, // sender address
    to: process.env.MAIL_USERNAME, // list of receivers
    subject: "Plspeak verification email", // Subject line
    text: "Please verify this link to access Plspeak! https://google.com", // plain text body
    html: "<b>Please verify this link to access Plspeak! <link>https://google.com</link></b>", // html body
}

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(msg = {}) {
    msg = {...defaultValue, ...msg}
    console.log("s-s-s>>>>>>>>>>>msg>",msg)
    if (!msg.to) return;
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    try {
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.MAIL_USERNAME, // generated ethereal user
                pass: process.env.MAIL_PASSWORD, // generated ethereal password
            },
        });

        // send mail with defined transport object
        let info = await transporter.sendMail(msg).catch((err)=>{
            console.log("s-s-s>>>>>>>err>>>>>>",err)
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    } catch (err) {
        console.log("S-s-s>>>>>>>>>>>>", err)
    }
}

module.exports = sendMail