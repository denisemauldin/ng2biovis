import { Component } from '@angular/core';

@Component({
    selector: 'dpdcv',
    template: `
       <h1>{{title}}</h1>
         <nav>
          <a routerLink="/dashboard">Dashboard</a>
	        <a routerLink="/vitals">Vitals</a>
         </nav>
	       <router-outlet></router-outlet>

    `,
    styleUrls: ['app/app.component.css']
})
export class AppComponent {
  title = "Dense Personal Data Cloud Visualization"
}
