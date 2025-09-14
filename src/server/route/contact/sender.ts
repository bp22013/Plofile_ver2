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

    // 管理者向けのメールオプション
    const mailOptionsToAdmin = {
        from: email,
        to: process.env.TO_EMAIL_ADDRESS,
        subject: 'お問い合わせがありました',
        text: `お名前: ${name}\nメールアドレス: ${email}\n\nメッセージ:\n${message}`,
    };

    // ユーザー向けの確認メールオプション
    const mailOptionsToUser = {
        from: process.env.GMAIL_USER,
        to: email,
        subject: '【お問い合わせありがとうございます】',
        text: `${name}様\n\nお問い合わせいただきありがとうございます。\n以下の内容でお問い合わせを受け付けました。\n\n--------------------\nお名前: ${name}\nメールアドレス: ${email}\n\nメッセージ:\n${message}\n--------------------\n\n内容を確認の上、折り返しご連絡いたしますので、今しばらくお待ちください`,
    };

    try {
        // 管理者とユーザーにメールを送信
        await Promise.all([
            transporter.sendMail(mailOptionsToAdmin),
            transporter.sendMail(mailOptionsToUser),
        ]);
        console.log('Emails sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Error sending email');
    }
};
