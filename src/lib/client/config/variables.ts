import { env } from '$env/dynamic/public';

export const variables = {
	isProduction: env.PUBLIC_MODE == 'prod',
	debug: env.PUBLIC_DEBUG == 'true',
	platformUrl: env.PUBLIC_PLATFORM_URL ?? 'http://localhost',
};