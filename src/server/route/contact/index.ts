import { Hono } from 'hono';
import { SenderEmail } from './sendEmail';

const contactRoute = new Hono().route('/', SenderEmail);

export default contactRoute;
