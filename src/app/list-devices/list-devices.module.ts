import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListDevicesRoutingModule } from './list-devices-routing.module';
import { DeviceListComponent } from './components/device-list/device-list.component';
import { DeviceDetailsComponent } from './components/device-details/device-details.component';
import { DeviceDashboardComponent } from './components/device-dashboard/device-dashboard.component';

@NgModule({
  declarations: [DeviceListComponent, DeviceDetailsComponent, DeviceDashboardComponent],
  imports: [
    CommonModule,
    ListDevicesRoutingModule
  ]
})
export class ListDevicesModule { }
