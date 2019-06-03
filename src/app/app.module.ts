import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';

import { PollDataComponent } from './poll-data/poll-data.component';
import { HttpClientModule }    from '@angular/common/http';
import { InformationComponent } from './information/information.component';
import { VehicleLocationComponent } from './vehicle-location/vehicle-location.component';
import { VehicleStatusComponent } from './vehicle-status/vehicle-status.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InformationDisplayComponent } from './information-display/information-display.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PollDataComponent,
    InformationComponent,
    VehicleLocationComponent,
    VehicleStatusComponent,
    HeaderComponent,
    InformationDisplayComponent,
    FooterComponent

  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
