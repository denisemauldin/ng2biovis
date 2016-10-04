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
		private http: Http
	) {}

	getVitals(): Promise<Vital[]> {
		return this.http.get(this.vitalsUrl, { headers: this.headers } )
			.toPromise()
			.then(response => response.json() as Vital[])
			.catch(this.handleError);
	}

	getVital(id: number): Promise<Vital> {
		 return this.http.get(this.vitalsUrl + '/' + id, { headers: this.headers })
		 	.toPromise()
			.then(response => response.json() as Vital)
			.catch(this.handleError);
	}

	update(vital: Vital): Promise<Vital> {
  	const url = `${this.vitalsUrl}/${vital.id}`;
  	return this.http
    .put(url, vital, {headers: this.headers})
    .toPromise()
    .then(() => vital)
    .catch(this.handleError);
	}

	create(name: string): Promise<Vital> {
	  return this.http
	    .post(this.vitalsUrl, JSON.stringify({name: name}), {headers: this.headers})
	    .toPromise()
	    .then(res => res.json().data)
	    .catch(this.handleError);
	}

	delete(id: number): Promise<void> {
	  const url = `${this.vitalsUrl}/${id}`;
	  return this.http.delete(url, {headers: this.headers})
	    .toPromise()
	    .then(() => null)
	    .catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
  	console.error('An error occurred', error); // for demo purposes only
  	return Promise.reject(error.message || error);
	}

}
