const nodemailer = require("nodemailer");

const nodeMailerData = (name, email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "deepak1812002@gmail.com",
      pass: "mjxqzhwxhkmzspsx",
    },
  });

  const mailOptions = {
    from: "deepak1812002@gmail.com",
    to: email,
    subject: "Registration successful",
    html: `  <!DOCTYPE html>
          <html>
            <head>
              <title>Example Email Template</title>
              <meta charset="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 18px; line-height: 1.5; color: #333; padding: 20px;">
              <table style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #fff; border-collapse: collapse;">
                <tr>
                  <td style="background-color: #0077c0; text-align: center; padding: 10px;">
                    <h1 style="font-size: 28px; color: #fff; margin: 0;">HealthyMe</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 20px;">
                    <h2 style="font-size: 24px; color: #0077c0; margin-top: 0;">Your user name is : ${name}</h2>
                    <p style="margin-bottom: 20px;">Thank you for choosing HealthyMe</p>
                    <p style="margin-bottom: 0;">Best regards,</p>
                    <p style="margin-bottom: 20px;">HealthyMe</p>
                  </td>
                </tr>
              </table>
            </body>
          </html>`,
  };

  transporter
    .sendMail(mailOptions)
    .then((info) => {
      console.log(info.response);
      return res.send({ msg: "Mail has been Send", email });
    })
    .catch((e) => {
      console.log(e);
      return res.send({ msg: "Error sending mail" });
    });
};

module.exports = {
//   sendMailer,
};
