import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AuthService} from './shared/auth/auth.service';
import {Subscription} from 'rxjs';
import {ErrorMsg} from './shared/errorMsg';
import {AlertComponent} from './shared/alert/alert.component';
import {PlaceHolderDirective} from './shared/place-holder.directive';

@Component({
  selector: 'bg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit, OnDestroy{
  name = 'Levan';
  isAuthenticated = false;
  userSub: Subscription;
  closeSub: Subscription;
  @ViewChild(PlaceHolderDirective) alertPlaceHolder: PlaceHolderDirective;

  constructor(private authService: AuthService, private errorMsg: ErrorMsg, private cfr: ComponentFactoryResolver) {}

  ngOnInit() {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
    this.errorMsg.error.subscribe((error) => {
      this.showError(error);
    });
    this.authService.autoLogin();
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
  ngOnDestroy() {
    if (this.userSub) {
      this.userSub.unsubscribe();
    }
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }
}









