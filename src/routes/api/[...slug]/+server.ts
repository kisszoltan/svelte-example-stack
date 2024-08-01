import { app } from '$lib/server/api/index.server';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = ({ request }) => app.request(request);
export const PUT: RequestHandler = ({ request }) => app.request(request);
export const DELETE: RequestHandler = ({ request }) => app.fetch(request);
export const POST: RequestHandler = ({ request }) => app.fetch(request);
export const PATCH: RequestHandler = ({ request }) => app.fetch(request);
export const fallback: RequestHandler = ({ request }) => app.fetch(request);
