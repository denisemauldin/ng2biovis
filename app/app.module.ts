import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { VitalsComponent }      from './vitals.component';
import { VitalDetailComponent } from './vital-detail.component';
import { VitalService }         from './vital.service';
import { VitalSearchComponent } from './vital-search.component';
import { routing }              from './app.routing';


@NgModule({
  imports: [
	   BrowserModule,
	   FormsModule,
     HttpModule,
	   routing
  ],
  declarations: [
	  AppComponent,
    VitalsComponent,
	  VitalDetailComponent,
    VitalSearchComponent,
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
