import 'reflect-metadata';
import { Hono } from 'hono';
import { injectable } from 'tsyringe';
import type { HonoTypes } from '$lib/server/types/index.server';
import type { Controller } from '$lib/server/interface/controller.server';

@injectable()
export class IamController implements Controller {
	constructor() {}

	controller = new Hono<HonoTypes>();

	routes() {
		return this.controller.get('/user', async (c) => {
			return c.json({ result: 'ok' });
		});
	}
}
