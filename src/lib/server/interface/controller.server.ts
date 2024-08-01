import { Hono } from 'hono';
import type { HonoTypes } from '$lib/server/types/index.server';
import type { BlankSchema } from 'hono/types';

export interface Controller {
	controller: Hono<HonoTypes, BlankSchema, '/'>;
	routes(): unknown;
}
