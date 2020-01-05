import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalDashboardComponent } from './components/hospital-dashboard/hospital-dashboard.component';
import { HospitalListComponent } from './components/hospital-list/hospital-list.component';
import { HospitalDetailsComponent } from './components/hospital-details/hospital-details.component';


const routes: Routes = [
  {path:'' , component:HospitalDashboardComponent ,
             children : [
               {path:'', component:HospitalListComponent},
               {path:'hospital-details', component:HospitalDetailsComponent},

             ]
 },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HospitalsRoutingModule { }
