import { Component, OnInit, Input } from '@angular/core';
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
	gotoDetail(vital: Vital): void {
		this.selectedVital = vital;
		this.router.navigate(['/vital/', vital.id]);
	}

	add(name: string): void {
		console.log("name is "+name);
  		if (typeof name != undefined) {
			console.log("name should not exist");
			return;
		}
		this.vitalService.create(name)
    	.then(vital => {
      	this.vitals.push(vital);
      	this.selectedVital = null;
    	});
	}

	delete(vital: Vital): void {
	  this.vitalService
	      .delete(vital.id)
	      .then(() => {
	        this.vitals = this.vitals.filter(v => v !== vital);
	        if (this.selectedVital === vital) { this.selectedVital = null; }
	      });
	}

}
