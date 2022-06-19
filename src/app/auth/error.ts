import {ComponentFactoryResolver, ViewChild} from '@angular/core';
import {PlaceHolderDirective} from '../shared/place-holder.directive';
import {Subscription} from 'rxjs';

export class Error{
  static error: any;
  private closeSub: Subscription;

  @ViewChild(PlaceHolderDirective) alertPlaceHolder: PlaceHolderDirective;
  // error;
  constructor( private cfr: ComponentFactoryResolver) {
  }
}
