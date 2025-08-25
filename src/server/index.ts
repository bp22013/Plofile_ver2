/* メインAPI */

import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { csrf } from 'hono/csrf';
import { logger } from 'hono/logger';

const app = new Hono();

app.use('*', logger());
app.use('*', cors());
app.use('*', csrf());

export const route = app;

export type Apptype = typeof route;
export default app;
