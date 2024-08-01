import { type Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import type { ApiRoutes } from '$lib/server/api/index.server';
import { hc } from 'hono/client';

const apiClient: Handle = async ({ event, resolve }) => {
	/* ------------------------------ Register api ------------------------------ */
	const { api } = hc<ApiRoutes>('/', {
		fetch: event.fetch,
		headers: {
			'x-forwarded-for': event.getClientAddress()
		}
	});

	/* ------------------------------ Set contexts ------------------------------ */
	event.locals.api = api;

	/* ----------------------------- Return response ---------------------------- */
	const response = await resolve(event);
	return response;
};

export const handle: Handle = sequence(apiClient);
