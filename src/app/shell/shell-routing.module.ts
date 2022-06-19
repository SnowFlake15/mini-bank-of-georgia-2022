import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell.component';
import {AuthGuard} from '../shared/auth/auth.guard';
import {BpmComponent} from './modules/bpm/bpm.component';
import {Bpm000Component} from './modules/bpm/bpm000/bpm000.component';
import {Bpm001Component} from './modules/bpm/bpm001/bpm001.component';
import {KrnComponent} from './modules/krn/krn.component';
import {KrnicpComponent} from './modules/krn/krnicp/krnicp.component';
import {AccoutnsComponent} from './modules/krn/accoutns/accoutns.component';
import {OperationsComponent} from './modules/krn/operations/operations.component';
import {CreateAccountComponent} from './modules/krn/accoutns/create-account/create-account.component';
import {PmdComponent} from './modules/pmd/pmd.component';
import {Pmd311Component} from './modules/pmd/pmd311/pmd311.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: ShellComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: '',
  //       redirectTo: 'bpm',
  //       pathMatch: 'full',
  //     },
  //   ]
  // }
  {
    path: '',
    component: ShellComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'bpm',
        loadChildren: () =>
          import('./modules/bpm/bpm.module').then((m) => m.BpmModule),
      },
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
    //   {
    //     path: 'krn',
    //     loadChildren: () =>
    //       import('./modules/krn/krn-routing.module').then((m) => m.KrnRoutingModule),
    //   },
    {
      path: 'krn',
      component: KrnComponent,
      children: [
        {
          path: 'krnicp',
          component: KrnicpComponent,
        },
        {
          path: 'operations',
          component: OperationsComponent,
        },
        {
          path: 'accounts',
          component: AccoutnsComponent,
          children: [
            {
              path: 'create',
              component: CreateAccountComponent
            }
          ]
        },
        {
          path: '',
          redirectTo: 'krnicp',
          pathMatch: 'full',
        },
      ],
    },
      {
        path: 'pmd',
        component: PmdComponent,
        children: [
          {
            path: 'pmd311',
            component: Pmd311Component
          }
        ]
      },
      // {
      //   path: 'pmd',
      //   loadChildren: () =>
      //     import('./modules/pmd/pmd.module').then((m) => m.PmdModule),
      // },
    {
      path: '',
      redirectTo: 'bpm',
      pathMatch: 'full',
    },
      ],
    },
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShellRoutingModule {}
