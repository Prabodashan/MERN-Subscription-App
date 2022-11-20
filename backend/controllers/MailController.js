const Mailjet = require("node-mailjet");
const mailjet = new Mailjet({
  apiKey: process.env.MAILJET_API_KEY,
  apiSecret: process.env.MAILJET_SECRET_KEY,
});

const sendMail = (req, res) => {
  const { name, email, subject, textPart, htmlPart, customID, template_ID } =
    req.body;

  console.log(req.body);
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: "redapplenetworkdeveloper@gmail.com",
          Name: "kymox",
        },
        To: [
          {
            Email: email,
            Name: name,
          },
        ],
        Variables: {
          MAIL_TITLE: textPart,
          trips: [{ id: 1 }],
        },
        // TemplateID: 4336407,
        // TemplateLanguage: true,
        Subject: subject ? subject : "",
        TextPart: textPart ? textPart : "",
        HTMLPart: htmlPart ? htmlPart : "",
        CustomID: customID ? customID : "",
      },
    ],
  });
  request
    .then((result) => {
      return res.status(200).json("Email sended");
    })
    .catch((err) => {
      console.log(err.statusCode);
      return res.status(400).json(err);
    });
};

module.exports = { sendMail };
