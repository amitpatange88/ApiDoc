import { Component } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}]
})
export class AppComponent {
  title = 'ApiDocs';
  location:any;

  constructor(location: Location) { this.location = location; }

  GoForward() {
    this.location.forward();
  }
  
  GoBack() {
    this.location.back();
  }

  getCurrentPath() {
    alert(this.location.path());  
  }
}
