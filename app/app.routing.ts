import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VitalsComponent }      from './vitals.component';
import { VitalDetailComponent } from './vital-detail.component';
import { DashboardComponent }   from './dashboard.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'vitals',
    component: VitalsComponent
  },
  {
    path: 'vital/:id',
    component: VitalDetailComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
