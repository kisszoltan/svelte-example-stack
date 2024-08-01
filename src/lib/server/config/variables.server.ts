//import { env } from '$env/dynamic/private';
import { variables as clientVars } from '$lib/client/config/variables';

export const serverVars = {
};

export const variables = Object.assign({}, clientVars, serverVars);