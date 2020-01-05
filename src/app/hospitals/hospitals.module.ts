import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HospitalsRoutingModule } from './hospitals-routing.module';
import { HospitalListComponent } from './components/hospital-list/hospital-list.component';
import { HospitalDashboardComponent } from './components/hospital-dashboard/hospital-dashboard.component';
import { HospitalDetailsComponent } from './components/hospital-details/hospital-details.component';


@NgModule({
  declarations: [HospitalListComponent, HospitalDashboardComponent, HospitalDetailsComponent],
  imports: [
    CommonModule,
    HospitalsRoutingModule
  ]
})
export class HospitalsModule { }
