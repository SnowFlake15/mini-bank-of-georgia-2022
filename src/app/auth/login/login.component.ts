import {Component, ComponentFactoryResolver, OnInit, ViewChild} from '@angular/core';
import {AbstractControl, Form, FormControl, FormGroup} from '@angular/forms';
import {BgValidators} from '../../shared/validators/bg-validators';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/auth/auth.service';
import {AlertComponent} from '../../shared/alert/alert.component';
import {PlaceHolderDirective} from '../../shared/place-holder.directive';
import {Subscription} from 'rxjs';
import {Error} from '../error';
import {ErrorMsg} from '../../shared/errorMsg';

// import {ErrorService} from '../error';

@Component({
  selector: 'bg-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  error;
  @ViewChild(PlaceHolderDirective) alertPlaceHolder: PlaceHolderDirective;
  private closeSub: Subscription;
  constructor(private router: Router, private authService: AuthService, private cfr: ComponentFactoryResolver, private errorMsg: ErrorMsg) { }

  ngOnInit(): void {
    this.initForm();
  }
  get(controlName: string): AbstractControl{
    return this.loginForm.get(controlName);
  }
  onLogin() {
    if (this.loginForm.invalid){
      return;
    }
    const userName = this.get('userName').value;
    const password = this.get('password').value;
    this.authService.login(userName, password).subscribe(
      (resData) => {
        // console.log(resData)
        this.router.navigate(['/bpm/bpm000']);
      },
      (error) => {
        // this.error = error;
        // this.showError(error);
        // Error.error = error;
        // Error.showError(){}
        this.errorMsg.error.next(error);

      }

    );
    this.loginForm.reset();
    // this.authService
    //   .login(this.form.value.username, this.form.value.password)
    //   .subscribe(
    //     (res) => console.log(res),
    //     (error) => (this.error = error)
    //   );
  }
  initForm(){
    this.loginForm = new FormGroup({
      userName: new FormControl(undefined, [BgValidators.required, BgValidators.minLength(2),
        BgValidators.pattern(/^\S*$/), BgValidators.maxLength(30)]),
      password: new FormControl(undefined, [BgValidators.required, BgValidators.minLength(2), BgValidators.maxLength(30)]),
    });
  }
  errors(controlName: string){
    // return Object.values(this.get(controlName).errors);
    return this.get(controlName)?.errors
      ? Object.values(this.get(controlName).errors)
      : [];
  }
  onCloseError(){
    this.error = false;
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
  onSubmit(){}
}
