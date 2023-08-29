const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "srisurya6669@gmail.com",
        pass: "ccsmuhzcexuzkxfb",
    },
});

const sendWelcomeEmail = async (email, name) => {
    const subject = "Thank you for Joining!"
    const text = "Welcome to the app! " + name
    sendMail(email, name, subject, text)
}

const sendCancellationEmail = (email, name) => {
    const subject = 'Cancellation Email'
    const text = 'Its unfortunate that you have cancelled our services'
    sendMail(email, name, subject, text)
}

const sendMail = (email, name, subject, text) => {
    const mailOptions = {
        from: "srisurya6669@gmail.com",
        to: email,
        subject,
        text
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email: ", error);
        } else {
            console.log("Email sent: ", info.response);
        }
    });
}


module.exports = { sendWelcomeEmail, sendCancellationEmail }