import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalDashboardComponent } from '../hospitals/components/hospital-dashboard/hospital-dashboard.component';


const routes: Routes = [
  {path :'' , component:HospitalDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
