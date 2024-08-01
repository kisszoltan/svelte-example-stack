import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';
import { BarRepository } from '$lib/server/repository/bar.server';

@injectable()
export class FooService {
	constructor(@inject(BarRepository) private database: BarRepository) {}

	value(): string {
		return this.database.fetch();
	}
}
