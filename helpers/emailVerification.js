const nodemailer = require("nodemailer");

async function emailVerification(email, template, subject) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });
  let info = await transporter.sendMail({
    from: `Reshme nila < ${process.env.EMAIL}>`, // concatenate the value
    to: email, // list of receivers
    subject: subject, // Subject line
    html: template, // html body
  });
}

module.exports = emailVerification;
