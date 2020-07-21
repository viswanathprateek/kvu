import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CreateLRComponent } from './createLR/createLR.component';
import { LRListComponent } from './lrlist/lrlist.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateLRComponent,
    LRListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    HttpClientModule,
    [
      ServiceWorkerModule.register('ngsw-worker.js', { enabled: false }),
  ],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
