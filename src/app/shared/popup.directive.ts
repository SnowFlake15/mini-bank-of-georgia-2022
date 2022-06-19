import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[bgPopup]'
})
export class PopupDirective {

  constructor(private elementRef: ElementRef<HTMLElement>) { }
  @HostBinding('class.active') isActive = false;
  @HostListener('document:click', ['$event']) toggleOpen($event) {
    this.isActive = this.elementRef.nativeElement.contains($event.target) ? !this.isActive : false;
  }

}
