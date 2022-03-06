require("dotenv").config();
const nodemailer = require("nodemailer");
const config = require("../config/auth.config");

const user = config.user;
const pass = config.pass;

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: user,
    pass: pass,
  }
});

module.exports.sendConfirmationEmail = (name, email, confirmation_code) => {
  transport.sendMail({
    from: user,
    to: email,
    subject: "Please confirm your account",
    html: `<h1>Email Confirmation</h1>
        <h2>Hello ${name}</h2>
        <p>Thank you for subscribing. Please confirm your email by clicking on the following link</p>
        <a href=https://6222e52c32fd964bbc54b0eb--sharp-keller-ca21c3.netlify.app/login-redirect?confirmation_code=${confirmation_code}> Click here</a>
        </div>`,
  }).catch(err => console.log(err));
};
