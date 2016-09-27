import { Component, OnInit } 			from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Vital } 				from './vital';
import { VitalService } from './vital.service';

@Component({
	moduleId: module.id,
	selector: 'vital-detail',
	templateUrl: 'vital-detail.component.html',
	styleUrls: [ 'vital-detail.component.css' ]
})
export class VitalDetailComponent implements OnInit {
	vital: Vital;
	sub: any;

	constructor(
		private vitalService: VitalService,
		private route: ActivatedRoute,
		private location: Location
	) { }
	ngOnInit(): void {
		/*this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.vitalService.getVital(id)
				.then(vital => this.vital = vital);
		}); */
		this.sub = this.route.params.subscribe(params => {
			let id = +params['id'];
			this.vitalService.getVital(id)
				.subscribe(response => this.vital = response.json());
		});
	}
	ngOnDestroy() {
		this.sub.unsubscribe();
	}
	goBack(): void {
		this.location.back();
	}
}
