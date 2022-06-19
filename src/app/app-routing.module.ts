import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ShellComponent } from './shell/shell.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {Bpm000Component} from './shell/modules/bpm/bpm000/bpm000.component';
import {Bpm001Component} from './shell/modules/bpm/bpm001/bpm001.component';
import {KrnicpComponent} from './shell/modules/krn/krnicp/krnicp.component';
import {BpmComponent} from './shell/modules/bpm/bpm.component';
import {AuthGuard} from './shared/auth/auth.guard';
import {KrnComponent} from './shell/modules/krn/krn.component';
import {AccoutnsComponent} from './shell/modules/krn/accoutns/accoutns.component';
import {OperationsComponent} from './shell/modules/krn/operations/operations.component';
import {CreateAccountComponent} from './shell/modules/krn/accoutns/create-account/create-account.component';

const routes: Routes = [
  {
    path: '',
    component: BpmComponent,
    pathMatch: 'full',
  }
  // {
  //   path: 'auth',
  //   component: AuthComponent,
  //   children: [
  //     {
  //       path: '',
  //       component: LoginComponent
  //     },
  //     {
  //       path: 'register',
  //       component: RegisterComponent
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   component: ShellComponent,
  //   canActivate: [AuthGuard],
  //   children: [
      // {
      //   path: 'bpm',
      //   component: BpmComponent,
      //   children: [
      //     {
      //       path: 'bpm000',
      //       component: Bpm000Component,
      //     },
      //     {
      //       path: 'bpm001',
      //       component: Bpm001Component,
      //     },
      //     {
      //       path: '',
      //       redirectTo: 'bpm000',
      //       pathMatch: 'full',
      //     },
      //   ],
      // },
      // {
      //   path: 'krn',
      //   component: KrnComponent,
      //   children: [
      //     {
      //       path: 'krnicp',
      //       component: KrnicpComponent,
      //     },
      //     {
      //       path: 'accounts',
      //       component: AccoutnsComponent,
      //     },
      //     {
      //       path: 'operations',
      //       component: OperationsComponent,
      //     },
      //     {
      //       path: 'accounts',
      //       component: CreateAccountComponent,
      //       children: [
      //         {
      //           path: 'create',
      //           component: CreateAccountComponent
      //         }
      //       ]
      //     },
      //     {
      //       path: '',
      //       redirectTo: 'krnicp',
      //       pathMatch: 'full',
      //     },
      //   ],
      // },
      // {
      //   path: '',
      //   redirectTo: 'bpm',
      //   pathMatch: 'full',
      // },
  //   ],
  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
