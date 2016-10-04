import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Vital }           from './vital';
@Injectable()
export class VitalSearchService {
  constructor(private http: Http) {}
  private vitalsUrl = 'http://localhost:3000/vitals';

  search(term: string): Observable<Vital[]> {
    /* our search is at http://localhost:3000/vitals/search?term=name:Tim
     term is a key value pair of what to search on
     Vital.where("#{key} like ?", "%#{val}%") */
    console.log("search is searching for "+term);
    let blah = this.http
               .get(this.vitalsUrl + `/search?term=name:${term}`)
               .map((r: Response) => r.json() as Vital[]);
    console.log(blah);
    return blah;
  }
}
