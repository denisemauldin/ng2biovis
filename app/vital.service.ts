import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Vital } from './vital';
import { VITALS } from './mock-vitals';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class VitalService {

	private vitalsUrl = 'http://localhost:3000/vitals';
	private headers = new Headers({
	'Content-Type': 'application/json',
	'Accept': 'application/json'
	});
	constructor(
		public http: Http
	) {}
	getVitals(): Promise<Vital[]> {
		return this.http.get("http://localhost:3000/vitals.json")
			.toPromise()
			.then(response => response.json() as Vital[])
			.catch(this.handleError);
	}

	getVital(id: number): Promise<Vital> {
		 return this.http.get("http://localhost:3000/vitals/"+ id + '.json')
		 	.toPromise()
			.then(response => response.json() as Vital)
			.catch(this.handleError);
	}

	update(vital: Vital): Promise<Vital> {
  	const url = `${this.vitalsUrl}/${vital.id}`;
		const putObj = { "vital": vital, "id": vital.id, "commit": "update vital" };
  	return this.http
    .put(url, JSON.stringify(putObj), {headers: this.headers})
    .toPromise()
    .then(() => vital)
    .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
  	console.error('An error occurred', error); // for demo purposes only
  	return Promise.reject(error.message || error);
	}

}
