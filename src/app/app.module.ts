import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatitoComponent } from './patito/patito.component';
import { Patito3Component } from './patito3/patito3.component';

@NgModule({
  declarations: [
    AppComponent,
    PatitoComponent,
    Patito3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
