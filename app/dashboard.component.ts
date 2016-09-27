import { Component, OnInit } from '@angular/core';
import { Router }						 from '@angular/router';

import { Vital } from './vital';
import { VitalService } from './vital.service';

@Component({
	moduleId: module.id,
	selector: 'dashboard',
	templateUrl: 'dashboard.component.html',
	styleUrls: [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
	vitals: Vital[] = [];

	constructor(
		private router: Router,
		private vitalService: VitalService
	) {}
	ngOnInit(): void {
		this.vitalService.getVitals()
			.then(vitals => this.vitals = vitals.slice(1,5));
		/* this.vitalService.getVitals()
			.subscribe(response => this.vitals = response.json()); */
	}
	gotoDetail(vital: Vital): void {
		let link = ['/vital', vital.id];
		this.router.navigate(link);
	}
}
