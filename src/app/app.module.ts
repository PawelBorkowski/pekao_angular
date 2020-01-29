import { LayoutModule } from './layout/layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccNumberValidatorDirective } from './directives/acc-number-validator.directive';
import { environment } from 'src/environments/environment';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
firebase.initializeApp(environment.firebase);





@NgModule({
  declarations: [
    AppComponent,
    AccNumberValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
