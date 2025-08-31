import { Hono } from 'hono';
import { sendEmail } from './sender';

const app = new Hono().post('/', async (c) => {
    try {
        const { name, email, message } = await c.req.json();

        if (!name || !email || !message) {
            return c.json({ success: false, message: '全てのフィールドを入力してください。' }, 400);
        }

        await sendEmail(name, email, message);

        return c.json({ success: true, message: '送信が完了しました。' });
    } catch (error) {
        console.error(error);
        return c.json({ success: false, message: `サーバーエラーが発生しました。` }, 500);
    }
});

export const contactRoute = app;
