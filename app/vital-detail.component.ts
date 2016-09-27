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

	constructor(
		private vitalService: VitalService,
		private route: ActivatedRoute,
		private location: Location
	) { }
	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];
			this.vitalService.getVital(id)
				.then(vital => this.vital = vital);
		});
	}
	goBack(): void {
		this.location.back();
	}
}
