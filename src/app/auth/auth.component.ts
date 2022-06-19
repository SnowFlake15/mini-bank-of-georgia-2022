import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {AlertComponent} from '../shared/alert/alert.component';
import {Subscription} from 'rxjs';
import {PlaceHolderDirective} from '../shared/place-holder.directive';

@Component({
  selector: 'bg-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  private closeSub: Subscription;

  @ViewChild(PlaceHolderDirective) alertPlaceHolder: PlaceHolderDirective;
  // error;
  constructor( private cfr: ComponentFactoryResolver) {
  }
  ngOnInit(): void {
  }
  showError(error){
    const alertComponentFactory = this.cfr.resolveComponentFactory(AlertComponent);
    this.alertPlaceHolder.viewContainerRef.clear();
    const alertRef = this.alertPlaceHolder.viewContainerRef.createComponent(
      alertComponentFactory
    );
    alertRef.instance.error = error;
    this.closeSub = alertRef.instance.closeClick.subscribe( () => {
      this.closeSub.unsubscribe();
      this.alertPlaceHolder.viewContainerRef.clear();
    });
  }
}
