import { Component, OnInit } from '@angular/core';
import { Router }						 from '@angular/router';

import { Vital } 				from './vital';
import { VitalService } from './vital.service';

@Component({
	moduleId: module.id,
	selector: 'vitals',
	templateUrl: 'vitals.component.html'
})
export class VitalsComponent implements OnInit {
	vitals: Vital[];
	selectedVital: Vital;

	constructor(
		private router: Router,
		private vitalService: VitalService
	) {}

	getVitals(): void {
		this.vitalService.getVitals()
			.then(vitals => this.vitals = vitals);
	}
	ngOnInit(): void {
		this.getVitals();
	}
	onSelect(vital: Vital): void {
		this.selectedVital = vital;
	}
	gotoDetail(): void {
		this.router.navigate(['/vital/', this.selectedVital.id]);
	}
}