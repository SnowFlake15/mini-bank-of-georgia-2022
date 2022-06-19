import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BpmComponent} from './shell/modules/bpm/bpm.component';
const routes: Routes = [
  {
    path: '',
    component: BpmComponent,
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
