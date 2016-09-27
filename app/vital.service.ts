import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Vital } from './vital';
import { VITALS } from './mock-vitals';

@Injectable()
export class VitalService {
	constructor(public http: Http) {}
	/* getVitals(): Promise<Vital[]> {
		return Promise.resolve(VITALS); */
	getVitals() {
		return this.http.get("http://localhost:3000/vitals.json");
	}

	/* getVital(id: number): Promise<Vital> {
		return this.getVitals()
			.then(vitals => vitals.find(vital => vital.id === id)); */
	getVital(id: number) {
		 return this.http.get("http://localhost:3000/vitals/"+ id + '.json');
	}
}
