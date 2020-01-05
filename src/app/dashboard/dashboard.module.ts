import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';

import { SideBarComponent } from './component/side-bar/side-bar.component';
import { HeaderComponent } from './component/header/header.component';
import { ContainerComponent } from './component/container/container.component';
import { HospitalDashboardComponent } from './pages/hospital-dashboard/hospital-dashboard.component';


@NgModule({
  declarations: [ SideBarComponent, HeaderComponent, ContainerComponent, HospitalDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
