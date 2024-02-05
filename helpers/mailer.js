import sgMail from "@sendgrid/mail";
import dotenv from "dotenv"

dotenv.config();

const sendEmail = ({ to, link }) => {
  sgMail.setApiKey(process.env.API_KEY_SENDGRID);
  const msg = {
    to,
    from: "jwitmailer@gmail.com",
    subject: "Here is your verification link!",
    text: `Please click on the enclosed link to activate your account: ${link}`,
  };
  sgMail
    .send(msg)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
};

export default sendEmail;