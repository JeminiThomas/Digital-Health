import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared-components/header/header.component';
import { HospitalsRoutingModule } from './hospitals/hospitals-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  exports: [
    HeaderComponent,
 
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
