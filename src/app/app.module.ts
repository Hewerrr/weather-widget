import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ResortsListComponent } from './resorts-list/resorts-list.component';
import { ResortTemperatureComponent } from './resort-temperature/resort-temperature.component';
import { ResortFollowersComponent } from './resort-followers/resort-followers.component';

@NgModule({
  declarations: [
    AppComponent,
    ResortsListComponent,
    ResortTemperatureComponent,
    ResortFollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
