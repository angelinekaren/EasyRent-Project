const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");

const { EMAIL_HOST, SERVICE, EMAIL_USERNAME, EMAIL_PASSWORD } = process.env;

const sendEmail = async (email, subject, payload, template) => {
  try {
    const transporter = nodemailer.createTransport({
      host: EMAIL_HOST,
      port: 587,
      service: SERVICE,
      secure: false,
      requireTLS: true,
      auth: {
        user: EMAIL_USERNAME,
        pass: EMAIL_PASSWORD,
      },
    });

    const source = fs.readFileSync(path.join(__dirname, template), "utf8");
    const compiledTemplate = handlebars.compile(source);

    const mailOptions = {
      from: EMAIL_USERNAME, 
      to: email,
      subject: subject,
      html: compiledTemplate(payload),
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendEmail;
