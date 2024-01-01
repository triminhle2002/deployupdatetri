const nodemailer = require('nodemailer')

const sendMail = async ({ email, subject, html }) => {
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_APP_PASSWORD
            }
        });
        let info = await transporter.sendMail({
            from: '"FotoFushion" <no-relply-fotofushion1012@gmail.com>',
            to: email,
            subject: subject,
            html: html
        });
        return info;
    } catch (error) {
        console.log(error);
    }
}

module.exports = sendMail;