import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { ShellComponent } from './shell/shell.component';
import { ShellHeaderComponent } from './shell/shell-header/shell-header.component';
import { ShellSidebarComponent } from './shell/shell-sidebar/shell-sidebar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { PopupDirective } from './shared/popup.directive';
import { Bpm000Component } from './shell/modules/bpm/bpm000/bpm000.component';
import { Bpm001Component } from './shell/modules/bpm/bpm001/bpm001.component';
import { FilterPipe } from './shell/modules/filter.pipe';
import { KrnicpComponent } from './shell/modules/krn/krnicp/krnicp.component';
import {AuthInterceptorService} from './shared/auth/auth-interceptor.service';
import {UrlInterceptorService} from './shared/url-interceptor.service';
import {LoaderComponent} from './shared/loader/loader.component';
import { BpmComponent } from './shell/modules/bpm/bpm.component';
import { KrnComponent } from './shell/modules/krn/krn.component';
import { ValidatorsComponent } from './shared/validators/validators.component';
import { AccoutnsComponent } from './shell/modules/krn/accoutns/accoutns.component';
import { OperationsComponent } from './shell/modules/krn/operations/operations.component';
import { ClientHeaderComponent } from './shell/client-header/client-header.component';
import { CreateAccountComponent } from './shell/modules/krn/accoutns/create-account/create-account.component';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceHolderDirective } from './shared/place-holder.directive';
// import {BpmModule} from './shell/modules/bpm/bpm.module';
// import {BpmModule} from './shell/modules/bpm/bpm.module';
// import {BpmRoutingModule} from './shell/modules/bpm/bpm-routing.module';
import {ShellModule} from './shell/shell.module';
// import {KrnModule} from './shell/modules/krn/krn.module';
import {AuthModule} from './auth/auth.module';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core.module';

@NgModule({
  declarations: [
    AppComponent,
    // PopupDirective,
    // FilterPipe,
    // LoaderComponent,
    // ValidatorsComponent,
    // AlertComponent,
    // PlaceHolderDirective,
    // AuthComponent,
    // ShellComponent,
    // ShellHeaderComponent,
    // ShellSidebarComponent,
    // LoginComponent,
    // RegisterComponent,
    // Bpm000Component,
    // Bpm001Component,
    // KrnicpComponent,
    // BpmComponent,
    // KrnComponent,
    // AccoutnsComponent,
    // OperationsComponent,
    // ClientHeaderComponent,
    // CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    ShellModule,
    // KrnModule,
    AuthModule,
    CoreModule
    // BpmModule
  ],
  providers: [
  //   {
  //   provide: HTTP_INTERCEPTORS,
  //   useClass: AuthInterceptorService,
  //   multi: true
  // },
  //   {
  //     provide: HTTP_INTERCEPTORS,
  //     useClass: UrlInterceptorService,
  //     multi: true
  //   }
    ],
  // exports: [
  //   ValidatorsComponent
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
