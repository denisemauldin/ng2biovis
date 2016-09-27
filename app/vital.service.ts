import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Vital } from './vital';
import { VITALS } from './mock-vitals';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class VitalService {
	constructor(public http: Http) {}
	/* getVitals(): Promise<Vital[]> {
		return Promise.resolve(VITALS); */
	getVitals(): Promise<Vital[]> {
		return this.http.get("http://localhost:3000/vitals.json")
			.toPromise()
			.then(response => response.json() as Vital[])
			.catch(this.handleError);
	}

	/* getVital(id: number): Promise<Vital> {
		return this.getVitals()
			.then(vitals => vitals.find(vital => vital.id === id)); */
	getVital(id: number): Promise<Vital> {
		 return this.http.get("http://localhost:3000/vitals/"+ id + '.json')
		 	.toPromise()
			.then(response => response.json() as Vital)
			.catch(this.handleError);
	}
	private handleError(error: any): Promise<any> {
  	console.error('An error occurred', error); // for demo purposes only
  	return Promise.reject(error.message || error);
	}

}
