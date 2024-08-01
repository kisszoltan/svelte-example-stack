import 'reflect-metadata';
import { container } from 'tsyringe';
import { FooService } from '$lib/server/service/foo.server';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
	const instance = container.resolve(FooService);
	return { foo: instance.value() };
};
