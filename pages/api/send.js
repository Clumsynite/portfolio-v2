import nodemailer from "nodemailer";
import template from "../../templates";

const transport = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};

const sendMail = async (req, res) => {
  try {
    const { name, email, message, website } = req.body;
    const { content, selfHTML, userHTML } = template(name, email, message, website, false);

    if (!name || !email || !website || !message) return res.json({ err: true, msg: "Error sending mail", userHTML });

    const transporter = nodemailer.createTransport(transport);

    const canVerify = await transporter.verify();
    if (!canVerify) {
      return res.json({ err: true, msg: "Error Authenticating with Mail Server", userHTML });
    }

    const selfMail = {
      from: email,
      to: "rishabhjpathak@gmail.com",
      subject: `New Message from Contact Form By ${name} @ ${new Date().toISOString()}`,
      text: content,
      html: selfHTML,
    };

    const sendToSelf = await transporter.sendMail(selfMail);
    if (!sendToSelf) {
      return res.json({
        status: "fail",
        err: true,
        msg: "fail",
      });
    }

    const userMail = {
      from: "rishabhjpathak@gmail.com",
      to: email,
      subject: `${name}'s Submission was successful @ ${new Date().toISOString()}`,
      text: `Thank you for contacting me!\n\nForm details\nName: ${name}\nEmail: ${email}\nMessage: ${message}\n\nI'll try to get back to you ASAP.\n\n- Clumsyknight`,
      html: userHTML,
    };
    const sendToUser = await transporter.sendMail(userMail);

    if (!sendToUser) {
      return res.json({
        status: "success",
        err: false,
        msg: "partial success",
      });
    }
    return res.json({
      err: false,
      msg: `Message sent`,
    });
  } catch (error) {
    // console.error("Error while sending Mail", { error });
    return res.json({ err: true, msg: "Failed to send mail", error });
  }
};

export default sendMail;
