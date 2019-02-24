import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemperatureComponent } from './Controls/temperature/temperature.component';
import {MatButtonModule, MatCardModule, MatChipsModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import { ModeComponent } from './Controls/mode/mode.component';
import { FanSpeedComponent } from './Controls/fan-speed/fan-speed.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    ModeComponent,
    FanSpeedComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
