import 'reflect-metadata';
import { Hono } from 'hono';
import { hc } from 'hono/client';
import { container } from 'tsyringe';
import { variables } from '$lib/server/config/variables.server';
import { IamController } from '$lib/server/controller/iam.controller';

/* ----------------------------------- Api ---------------------------------- */
const app = new Hono().basePath('/api');

/* --------------------------- Global Middlewares --------------------------- */
//app.use(processAuth);

/* --------------------------------- Routes --------------------------------- */
const routes = app.route('/iam', container.resolve(IamController).routes());

/* -------------------------------------------------------------------------- */
/*                                   Exports                                  */
/* -------------------------------------------------------------------------- */
export const rpc = hc<typeof routes>(variables.platformUrl);
export type ApiClient = typeof rpc;
export type ApiRoutes = typeof routes;
export { app, routes };
