import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigurationRoutingModule } from './configuration-routing.module';
import { ConfigureHospitalsComponent } from './components/configure-hospitals/configure-hospitals.component';
import { ViewConfigurationComponent } from './components/view-configuration/view-configuration.component';
import { ConfigureDashboardComponent } from './components/configure-dashboard/configure-dashboard.component';


@NgModule({
  declarations: [ConfigureHospitalsComponent, ViewConfigurationComponent, ConfigureDashboardComponent],
  imports: [
    CommonModule,
    ConfigurationRoutingModule
  ]
})
export class ConfigurationModule { }
