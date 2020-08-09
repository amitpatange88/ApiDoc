import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {APP_BASE_HREF, Location, HashLocationStrategy, LocationStrategy} from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeedComponent } from './seed/seed.component';

@NgModule({
  declarations: [
    AppComponent,
    SeedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],//{provide: APP_BASE_HREF, useValue: '/'}
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
