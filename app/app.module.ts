import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { VitalsComponent }      from './vitals.component';
import { VitalDetailComponent } from './vital-detail.component';
import { VitalService }         from './vital.service';
import { routing }              from './app.routing';

@NgModule({
  imports: [
	   BrowserModule,
	   FormsModule,
	   routing
  ],
  declarations: [
	  AppComponent,
    VitalsComponent,
	  VitalDetailComponent,
    DashboardComponent
  ],
  providers: [
    VitalService
  ],
  bootstrap: [
	  AppComponent
  ]
})
export class AppModule { }
