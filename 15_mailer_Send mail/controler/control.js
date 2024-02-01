const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "roberto.schulist@ethereal.email",
      pass: "HgsNeJN7fRGWryuPRs",
    },
  });

  let info = await transporter.sendMail({
    from: '"Nima 👻" <foo@example.com>', // sender address
    to: "nihalchaudhary1252@gmail.com", // list of receivers
    subject: "Hello Nima ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  res.json(info);
};

module.exports = sendMail;
