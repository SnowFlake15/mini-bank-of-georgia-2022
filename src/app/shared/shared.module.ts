import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AlertComponent } from './alert/alert.component';
import { LoaderComponent } from './loader/loader.component';
import {PlaceHolderDirective} from './place-holder.directive';
import {ValidatorsComponent} from './validators/validators.component';
import {PopupDirective} from './popup.directive';
import {FilterPipe} from '../shell/modules/filter.pipe';
import { RounderPipe } from './rounder.pipe';


@NgModule({
  declarations: [AlertComponent, LoaderComponent, PlaceHolderDirective, ValidatorsComponent, PopupDirective, FilterPipe, RounderPipe],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    AlertComponent,
    LoaderComponent,
    PlaceHolderDirective,
    CommonModule,
    ReactiveFormsModule,
    ValidatorsComponent,
    PopupDirective,
    FilterPipe,
    RounderPipe
  ],
})
export class SharedModule {}
