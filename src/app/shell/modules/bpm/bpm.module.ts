import {NgModule} from '@angular/core';
import {Bpm000Component} from './bpm000/bpm000.component';
import {Bpm001Component} from './bpm001/bpm001.component';
import {BpmComponent} from './bpm.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../../app-routing.module';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BpmRoutingModule} from './bpm-routing.module';
import {SharedModule} from '../../../shared/shared.module';
//
@NgModule({
  declarations: [
    BpmComponent,
    Bpm000Component,
    Bpm001Component,
  ],
  imports: [
    // BrowserModule,
    FormsModule,
    // AppRoutingModule,
    // HttpClientModule,
    // ReactiveFormsModule,
    RouterModule,
    // CommonModule,
    BpmRoutingModule,
    SharedModule
  ],
  exports: [
    BpmComponent,
    Bpm000Component,
    Bpm001Component,
  ],
})
export class BpmModule {}
