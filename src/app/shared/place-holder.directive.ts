import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[bgPlaceHolder]',
})
export class PlaceHolderDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
