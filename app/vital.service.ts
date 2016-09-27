import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Vital } from './vital';
import { VITALS } from './mock-vitals';

@Injectable()
export class VitalService {
	getVitals(): Promise<Vital[]> {
		return Promise.resolve(VITALS);
	}
	getVital(id: number): Promise<Vital> {
		return this.getVitals()
			.then(vitals => vitals.find(vital => vital.id === id));
	}
}
