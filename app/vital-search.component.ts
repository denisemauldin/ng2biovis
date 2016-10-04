import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { VitalSearchService } from './vital-search.service';
import { Vital } from './vital';

@Component({
  moduleId: module.id,
  selector: 'vital-search',
  templateUrl: 'vital-search.component.html',
  styleUrls: [ 'vital-search.component.css' ],
  providers: [VitalSearchService]
})
export class VitalSearchComponent implements OnInit {
  vitals: Observable<Vital[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private vitalSearchService: VitalSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.vitals = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.vitalSearchService.search(term)
        // or the observable of empty vitals if no search term
        : Observable.of<Vital[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Vital[]>([]);
      });
  }
  gotoDetail(vital: Vital): void {
    let link = ['/detail', vital.id];
    this.router.navigate(link);
  }
}
