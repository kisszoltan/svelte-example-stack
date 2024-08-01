import 'reflect-metadata';
import { singleton } from 'tsyringe';

@singleton()
export class BarRepository {
	fetch(): string {
		return 'bar';
	}
}
