// import {NgModule} from '@angular/core';
// import {RouterModule, Routes} from '@angular/router';
// import {KrnComponent} from './krn.component';
// import {KrnicpComponent} from './krnicp/krnicp.component';
// import {AccoutnsComponent} from './accoutns/accoutns.component';
// import {OperationsComponent} from './operations/operations.component';
// import {CreateAccountComponent} from './accoutns/create-account/create-account.component';
// const routes: Routes = [
//   {
//     path: '',
//     component: KrnComponent,
//     children: [
//       {
//         path: 'krnicp',
//         component: KrnicpComponent,
//       },
//       // {
//       //   path: 'accounts',
//       //   component: AccoutnsComponent,
//       // },
//       {
//         path: 'operations',
//         component: OperationsComponent,
//       },
//       {
//         path: 'accounts',
//         component: AccoutnsComponent,
//         children: [
//           {
//             path: 'create',
//             component: CreateAccountComponent
//           }
//         ]
//       },
//       {
//         path: '',
//         redirectTo: 'krnicp',
//         pathMatch: 'full',
//       },
//     ],
//   },
// ];
// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
// })
//
// export class KrnRoutingModule{}
