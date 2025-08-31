import nodemailer from 'nodemailer';

export const sendEmail = async (name: string, email: string, message: string) => {
    const transporter = nodemailer.createTransport({
        host: process.env.GMAIL_HOST,
        port: Number(process.env.GMAIL_PORT),
        secure: false,
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
        },
    });

    const mailOptions = {
        from: email,
        to: process.env.TO_EMAIL_ADDRESS,
        subject: 'お問い合わせがありました',
        text: `お名前: ${name}\nメールアドレス: ${email}\n\nメッセージ:\n${message}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Error sending email');
    }
};
