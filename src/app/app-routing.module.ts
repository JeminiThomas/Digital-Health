import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then(mod => mod.LoginModule)
  },
  {
    path: 'hospital',
    loadChildren: () => import('./hospitals/hospitals.module').then(mod => mod.HospitalsModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./configuration/configuration.module').then(mod => mod.ConfigurationModule)
  },
  {
    path: 'list-device',
    loadChildren: () => import('./list-devices/list-devices.module').then(mod => mod.ListDevicesModule)
  },

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
