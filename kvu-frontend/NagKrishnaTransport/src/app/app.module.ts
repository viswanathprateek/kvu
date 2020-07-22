import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule, MatTableModule, MatIconModule, MatExpansionModule, MatListModule, MatChipsModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { LoginComponent } from './login/login.component';
import { CreateLRComponent } from './createLR/createLR.component';
import { LRListComponent } from './lrlist/lrlist.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { BillComponent } from './bill/bill.component';
import { LRComponent } from './lr/lr.component';


@NgModule({
  declarations: [
    AppComponent,
    BillListComponent,
    LoginComponent,
    CreateLRComponent,
    LRListComponent,
    BillComponent,
    LRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatListModule,
    MatChipsModule,
    MatExpansionModule,
    HttpClientModule,
    [
      ServiceWorkerModule.register('ngsw-worker.js', { enabled: false }),
  ],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
