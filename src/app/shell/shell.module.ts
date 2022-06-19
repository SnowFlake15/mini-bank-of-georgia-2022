import { NgModule } from '@angular/core';
//
import { ShellComponent } from './shell.component';
import {BpmModule} from './modules/bpm/bpm.module';
import {ShellRoutingModule} from './shell-routing.module';
import {ShellHeaderComponent} from './shell-header/shell-header.component';
import {ShellSidebarComponent} from './shell-sidebar/shell-sidebar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
// import {KrnModule} from './modules/krn/krn.module';
import {BpmComponent} from './modules/bpm/bpm.component';
import {Bpm000Component} from './modules/bpm/bpm000/bpm000.component';
import {Bpm001Component} from './modules/bpm/bpm001/bpm001.component';
import {KrnComponent} from './modules/krn/krn.component';
import {AccoutnsComponent} from './modules/krn/accoutns/accoutns.component';
import {ClientHeaderComponent} from './client-header/client-header.component';
import {KrnicpComponent} from './modules/krn/krnicp/krnicp.component';
import {OperationsComponent} from './modules/krn/operations/operations.component';
import {CreateAccountComponent} from './modules/krn/accoutns/create-account/create-account.component';
import {SharedModule} from '../shared/shared.module';
import { PmdComponent } from './modules/pmd/pmd.component';
import { Pmd311Component } from './modules/pmd/pmd311/pmd311.component';
//
@NgModule({
  declarations: [
    ShellComponent,
    ShellHeaderComponent,
    ShellSidebarComponent,
    // BpmComponent,
    // Bpm000Component,
    // Bpm001Component,
    KrnComponent,
    AccoutnsComponent,
    ClientHeaderComponent,
    KrnicpComponent,
    OperationsComponent,
    CreateAccountComponent,
    PmdComponent,
    Pmd311Component
  ],
  imports: [
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    ReactiveFormsModule,
    // BpmModule,
    // KrnModule,
    SharedModule,
    ShellRoutingModule
  ],
  exports: [ClientHeaderComponent]
  // exports: [ShellComponent, ShellHeaderComponent, ShellSidebarComponent, ]
})
export class ShellModule {}
