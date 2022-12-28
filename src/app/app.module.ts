import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Car1Component } from './shared/components/car1/car1.component';
import { Car2Component } from './shared/components/car2/car2.component';
import { Car3Component } from './shared/components/car3/car3.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    Car1Component,
    Car2Component,
    Car3Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
