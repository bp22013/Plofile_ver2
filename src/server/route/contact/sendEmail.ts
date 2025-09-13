/* NodeMailer送信用ファイル */

import { Hono } from 'hono';
import { sendEmail } from './sender';

export const SenderEmail = new Hono().post('/sendEmail', async (c) => {
    try {
        const { name, email, message } = await c.req.json();
        console.log(name, email, message);

        if (!name || !email || !message) {
            return c.json({ success: false, message: '全てのフィールドを入力してください。' }, 400);
        }

        await sendEmail(name, email, message);

        return c.json({ success: true, message: '送信が完了しました。' }, 200);
    } catch (error) {
        console.error(error);
        return c.json({ success: false, message: `サーバーエラーが発生しました。` }, 500);
    }
});
